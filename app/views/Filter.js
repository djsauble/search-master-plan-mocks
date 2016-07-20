var _ = require('underscore');
var Backbone = require('backbone');

// State for the filter control
var Model = Backbone.Model.extend({
  defaults: {
    hidden: true
  },
  toggle: function() {
    this.set('hidden', !this.get('hidden'));
  }
});

// View for the filter control
var View = Backbone.View.extend({
  className: 'filter',

  model: new Model,

  events: {
    'click .toggle': 'toggle'
  },

  template: _.template(`
    <% if (hidden) { %>
      <a class='toggle' href='#'>Show filters&hellip;</a>
    <% } else { %>
      <div class='options'>
        <button class='dropdown combo'>Choose format</button>
        <button class='dropdown combo'>Choose repository</button>
      </div>
      <a class='toggle' href='#'>Hide filters&hellip;</a>
    <% } %>
  `),

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template({
      hidden: this.model.get('hidden')
    }));

    return this;
  },

  toggle: function() {
    this.model.toggle();
  }
});

module.exports = View;
