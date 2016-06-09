import { FlowRouter } from 'meteor/kadira:flow-router';
import { Hooks } from 'meteor/differential:event-hooks'

Hooks.init();

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Hooks.onLoggedOut = function (userId) {
  FlowRouter.go('homepage');
}
