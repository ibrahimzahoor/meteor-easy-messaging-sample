import { Bert } from 'meteor/themeteorchef:bert';

import './user-list-item.html';
import './user-list-item.css';

Template.UserListItem.onCreated(function(){
  this.autorun(() => {
    new SimpleSchema({
      user: { type: User },
      onChangeTab: { type: Function }
    }).validate(Template.currentData());
  });
});

Template.UserListItem.events({

  'click #contact_card' (event, instance) {
    event.preventDefault();

    if(Meteor.user()) {
      const participants = [instance.data.user._id];

      Meteor.user().findExistingConversationWithUsers(
        participants,
        function(error, result) {
          if (result) {
            conversationId = result;
            console.log("conversationId", conversationId);
            FlowRouter.go('conversation.show', {
                _id: conversationId
            });

            instance.data.onChangeTab('conversations');
          }
          else {
            var conversation = new Conversation().save();
            conversation.addParticipant(instance.data.user);
            FlowRouter.go('conversation.show', {
                _id: conversation._id
            });

            instance.data.onChangeTab('conversations');
          }
        });
      }
      else {
        Bert.alert( 'Sign in to start chat!', 'danger', 'growl-top-right' );
      }
  },
});
