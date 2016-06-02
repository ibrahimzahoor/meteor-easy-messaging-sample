import { Meteor } from 'meteor/meteor';

Meteor.publishComposite("conversation.messages", function(conversationId) {
  check(conversationId, String);

  if (!this.userId) {
    return this.ready();
  }

  return {
    find: function() {
      return Meteor.conversations.find({
        _id: conversationId
      });
    },
    children: [
      {
        find: function(conversation) {
          return Meteor.messages.find({
            conversationId: conversation._id
          }, {
            sort: { date: -1 }
          });
        }
      },
      {
        find: function(conversation) {
          return Meteor.users.find({
            _id: {$in: conversation._participants }
          }, {
            fields: { username: 1 }
          });

        },
        children: [
          {
            find: function(user, conversation) {
              return Meteor.participants.find({
                userId: user._id
              });
            }
          }
        ]
      }
    ]
  };
});
