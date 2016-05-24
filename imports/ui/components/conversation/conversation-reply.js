import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './conversation-reply.html';



Template.ConversationReply.events({
  'submit .js-todo-new'(event) {
    event.preventDefault();

    const $input = $(event.target).find('[type=text]');
    if (!$input.val()) {
      return;
    }
    
    var conversation = Meteor.conversations.findOne({ _id: FlowRouter.getParam('_id') });
    conversation.sendMessage($input.val());

    $input.val('');
  },
});
