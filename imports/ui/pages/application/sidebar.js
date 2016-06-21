import { Template } from 'meteor/templating';
import './sidebar.html';
import './sidebar.css';

// import '../conversations/list-page.js';
import '../users/list-page.js';

// Components used inside the template
import '../../components/application/user-menu.js';


Template.Sidebar.onCreated(function sidebarOnCreated() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    selectedTab: 'conversations'
  });
});

Template.Sidebar.onRendered(function sidebarOnRendered() {
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      console.log('subscriptionsReady :: Sidebar');
    }
  });
});

Template.Sidebar.helpers({
  sidebarContentArgs() {
    const instance = Template.instance();
    if(instance.state.get('selectedTab') === 'conversations') {
      return {
        template: 'ConversationListPage',
      }
    }
    else if(instance.state.get('selectedTab') === 'users') {
      return {
        template: 'UsersListPage',
      }
    }
  },
  isActive(tab) {
    const instance = Template.instance();
    return instance.state.get('selectedTab') === tab && 'active';
  }
});

Template.Sidebar.events({
  'click #contacts_controller'(event, instance) {
    instance.state.set('selectedTab', 'users')
  },
  'click #active_chats_controller'(event, instance) {
    instance.state.set('selectedTab', 'conversations')
  }
});
