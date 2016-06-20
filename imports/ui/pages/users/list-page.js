import { Template } from 'meteor/templating';
import './list-page.html';
import './list-page.css';

// Components used inside the template
import '../../components/users/list.js';

Template.UsersListPage.onCreated(function() {

  this.autorun(() => {
    this.subscribe('user.list');
  });

  this.getUsersListData = () => {
    const self = this;
    const usersList = Meteor.users.find({
      _id: {
        $ne: Meteor.userId()
      }
    });
    return {
      usersListReady: self.subscriptionsReady(),
      usersList
    };
  }
});

Template.UsersListPage.onRendered(function() {
  this.autorun(() => {
    if (this.subscriptionsReady()) {
      console.log('subscriptionsReady :: UsersListPage');
    }
  });
});


Template.UsersListPage.helpers({
  usersList() {
    const instance = Template.instance();
    return instance.getUsersListData()
  }
});

Template.UsersListPage.events({

});
