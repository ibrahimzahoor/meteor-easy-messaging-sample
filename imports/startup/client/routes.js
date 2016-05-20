import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/layout.js';
import '../../ui/pages/sidebar.js';
import '../../ui/pages/home.js';


FlowRouter.route('/', {
  name: 'homepage',
  action() {
    BlazeLayout.render('Layout', { sidebar: 'Sidebar', home: 'ConversationShow'});
  },
});
