import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './conversation-list-item.html';


Template.ConversationListItem.onCreated(function() {

});

Template.ConversationListItem.helpers({
  online(status) {
    if(status == 'online')
      return true;
    return false;
  }
});
