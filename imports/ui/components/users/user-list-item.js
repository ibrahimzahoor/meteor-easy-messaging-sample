import './user-list-item.html';
import './user-list-item.css';

Template.UserListItem.events({

  'click #contact_card' (event, instance) {
    event.preventDefault();

    const participants = [this.user._id];

    Meteor.user().findExistingConversationWithUsers(
      participants,
      function(error, result) {
        if (result) {
          conversationId = result;
          console.log("conversationId", conversationId);
          FlowRouter.go('conversation.show', {
              _id: conversationId
          });
        }
        else {
          var conversation = new Conversation().save();
          conversation.addParticipant(this.user);
          FlowRouter.go('conversation.show', {
              _id: conversation._id
          });
        }
      });
  },
});
