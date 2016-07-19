var _ = require('underscore');
var Backbone = require('backbone');

var View = Backbone.View.extend({
  className: "search_app",

  template: _.template("<h1><%- message %></h1>"),

  render: function() {
    this.$el.html(this.template({
      message: "Hello, world!"
    }));

    return this;
  }
});

module.exports = View;
