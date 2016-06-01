import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/layout.js';
import '../../ui/pages/sidebar.js';
import '../../ui/pages/show-page.js';


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', main: 'ShowPage'});
  },
});

FlowRouter.route('/conversation/:_id', {
  name: 'conversation.show',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', main: 'ShowPage' });
  },
});

FlowRouter.route('/users', {
  name: 'users.show',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', main: 'Users' });
  },
});
