import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './conversation-list-item.html';


Template.ConversationListItem.onCreated(function() {
  console.log('this', this);
});

Template.ConversationListItem.helpers({
  label() {
    var participants = this._participants;
    return Meteor.users.findOne({_id: participants[1]}).username;
  }
});
