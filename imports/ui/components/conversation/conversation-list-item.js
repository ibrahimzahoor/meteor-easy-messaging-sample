import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './conversation-list-item.html';


Template.ConversationListItem.onCreated(function() {
});

Template.ConversationListItem.helpers({
  label(param) {
    // var participants = this._participants;
    // let user = Meteor.users.findOne({_id: participants[1]});
    // return user && user.username;
    console.log('param', param);
    console.log('this', this.conversation.lastMessage());
    // return this.usernameTitle();

  }
});
