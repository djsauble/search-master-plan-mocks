var $ = require('jquery');
var AppView = require('./app');

// Once the DOM is ready, render the application
$(function() {
  var view = new AppView;
  $("#app_root").html(view.render().el);
});
