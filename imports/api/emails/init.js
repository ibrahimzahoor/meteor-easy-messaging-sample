// import { Templates } from './templates.js';
// import { TemplateHelpers } from './template-helpers.js';

TemplateHelpers = {};

Templates = {};

Templates.newMessage = {
  path: 'conversations/new-message.html',    // Relative to the 'private' dir.
  css: 'conversations/new-message.css',      // Mail specific CSS.

  helpers: {
    capitalizedName() {
      return "capitalizedName";
    }
  },

  route: {
    path: '/conversation/:conversationId/new-message/:toUser/:fromUser',
    data: function(conversationId, toUser, fromUser) {
      const conversation = Meteor.conversations.findOne(conversationId);

      return {
        conversation,
        messages: conversation.messages(2).fetch(),
        toUser: Meteor.users.findOne(toUser),
        fromUser: Meteor.users.findOne(fromUser)
      };
    }
  }
};


Mailer.init({
  templates: Templates,     // Global Templates namespace, see lib/templates.js.
  helpers: TemplateHelpers, // Global template helper namespace.
  layout: {
    name: 'emailLayout',
    path: 'email-layout.html',
    css: 'email-layout.css'
  }
});
