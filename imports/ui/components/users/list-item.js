import { Bert } from 'meteor/themeteorchef:bert';

import './list-item.html';
import './list-item.css';

Template.UserListItem.onCreated(function(){
  this.autorun(() => {
    new SimpleSchema({
      user: { type: User },
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
        function(error, conversationId) {
          if (conversationId) {
            FlowRouter.go('conversation.show', {
                _id: conversationId
            });
          }
          else {
            Meteor.user().startNewConversationWithUsers(participants, function(error, conversationId) {
              if(!error) {
                FlowRouter.go('conversation.show', {
                    _id: conversationId
                });
              }
            });
          }
        });
      }
      else {
        Bert.alert( 'Sign in to start chat!', 'danger', 'growl-top-right' );
      }
  },
});
