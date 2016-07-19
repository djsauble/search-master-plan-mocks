var _ = require('underscore');
var Backbone = require('backbone');

var View = Backbone.View.extend({
  className: "search_app",

  template: _.template(`
    <div class="header">
      <h1><i class="fa fa-search"></i> <%- title %></h1>
      <h3><%- subtitle %></h3>
    </div>
    <div class="search">
      <textarea></textarea>
      <button class="dropdown">Search</button>
    </div>
    <div class="filter">
      <a class="toggle" href="#">Show filters&hellip;</a>
      <div class="options">
        <button class="dropdown combo">Choose format</button>
        <button class="dropdown combo">Choose repository</button>
      </div>
    </div>
    <div class="results">
      <div class="count">20 results found</div>
      <div class="table">
        <div class="header row">
          <div class="cell">Name <i class="fa fa-caret-down"></i></div>
          <div class="cell">Version</div>
          <div class="cell">Format</div>
          <div class="cell">Repository</div>
        </div>
        <div class="body">
          <div class="row">
            <div class="cell">abbrev</div>
            <div class="cell">1.0.9</div>
            <div class="cell">npm</div>
            <div class="cell">npm-central</div>
          </div>
        </div>
      </div>
    </div>
  `),

  render: function() {
    this.$el.html(this.template({
      title: "Search",
      subtitle: "Search for packages",
    }));

    return this;
  }
});

module.exports = View;
