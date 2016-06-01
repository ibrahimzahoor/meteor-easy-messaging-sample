import { Template } from 'meteor/templating';
import { Tracker } from 'meteor/tracker';

import './conversation-list.html';

// Components used inside the template
import './conversation-list-item.js';
import './conversation-new.js';

Template.ConversationList.onCreated(function() {

  // this.state = new ReactiveDict();
  // this.state.setDefault({
  //   conversationsLength: 0,
  // });
  //
  // // this.autorun(() => {
  // //    console.log('Reactive dict: ', this.state.get('editing'));
  // // });
  //
  // this.autorun(() => {
  //   this.subscribe('conversations');
  // });
  //
  //
  // this.getConversations = () => {
  //
  // }

  this.autorun(() => {
    new SimpleSchema({
      conversationsListReady: { type: Boolean },
      conversationsList: { type: Mongo.Cursor },
    }).validate(Template.currentData());
  });

});

Template.ConversationList.helpers({

});

Template.ConversationList.events({

});
