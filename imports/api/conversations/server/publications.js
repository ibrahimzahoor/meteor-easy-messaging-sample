import { Meteor } from 'meteor/meteor';

Meteor.publishComposite("conversations", function(){
  if (!this.userId) {
    return this.ready();
  }

  return {
    find: function() {
      return Meteor.conversations.find({
        _participants: this.userId
      });
    },
    children: [
      {
        find: function(conversation) {
          return Meteor.users.find({
            _id: {$in: conversation._participants }
          }, {
            fields: { username: 1 }
          });
        }
      }
    ]
  };
});

Meteor.publishComposite("conversations.list", function() {
  if (!this.userId) {
    return this.ready();
  }

  return {
    find: function() {
      return Meteor.conversations.find({
        _participants: this.userId
      });
    },
    children: [
      {
        find: function(conversation) {
          return Meteor.messages.find({
            conversationId: conversation._id
          }, {
            sort: { date: -1 },
            limit: 1
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
        }
      }
    ]
  };
});
