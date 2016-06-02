import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Conversation } from 'meteor/socialize:messaging';

import './users.html';

Template.Users.onCreated(function() {
  this.autorun(() => {
    this.subscribe('users');
  });
});

Template.Users.helpers({
  users(){
    return Meteor.users.find({
      _id:{$ne: Meteor.userId() }
    });
  },
});

Template.Users.events({
  'click .user'(event, instance) {
    event.preventDefault();

    var userId = this._id;
    var user = Meteor.users.findOne({ _id: userId });
    var participants = [ userId ];

     Meteor.user().findExistingConversationWithUsers(
      participants, function(error, result){
           if(result){
            //  console.log("link exists");
             conversationId = result;
             console.log("conversationId", conversationId);
             FlowRouter.go('conversation.show', { _id: conversationId });
           }
           else {
            //  console.log("no link");
             var conversation = new Conversation().save();
             conversation.addParticipant(user);
             FlowRouter.go('conversation.show', { _id: conversation._id });
            //  conversation.sendMessage("beginning");
           }
       });
  },
});
