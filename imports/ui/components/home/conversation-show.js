import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './conversation-show.html';

// Components used inside the template
import './conversation-item.js'

Template.ConversationShow.onCreated(function() {
  // this.messages = [
  //   {
  //     "from": "me",
  //     "message": "Hello!"
  //   },
  //   {
  //
  //   }
  // ]
});
