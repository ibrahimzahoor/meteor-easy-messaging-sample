import { Template } from 'meteor/templating';
import './sidebar.html';

// Components used inside the template
import '../components/users/user-menu.js';
import '../components/conversation/conversation-list.js';

Template.Sidebar.onCreated(function sidebarOnCreated() {
  this.autorun(() => {
    this.subscribe('conversations.list');
  });
});

Template.Sidebar.onRendered(function sidebarOnRendered() {
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      console.log('subscriptionsReady');
    }
  });
});


Template.Sidebar.helpers({
  convertationsListData() {
    const instance = Template.instance();
    const conversationsList = Meteor.conversations.find({
      _participants: Meteor.userId()
    });
    return {
      conversationsListReady: instance.subscriptionsReady(),
      conversationsList
    };
  },
});
