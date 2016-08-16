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
    path: '/new-message/:name',
    data: function(params) {
      
      return {
        name: params.name,
        names: ['Johan', 'John', 'Paul', 'Ringo']
      };
    }
  }
};
