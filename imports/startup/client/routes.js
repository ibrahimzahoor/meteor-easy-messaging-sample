import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/layout.js';
import '../../ui/pages/application/sidebar.js';
// import '../../ui/pages/conversations/show-page.js';


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar'});
  },
});

FlowRouter.route('/conversation/:_id', {
  name: 'conversation.show',
  action(params, queryparams) {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', main: 'ConversationShowPage', maindata: { conversationId: params._id } });
  },
});

FlowRouter.route('/users', {
  name: 'users.show',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', main: 'Users' });
  },
});
