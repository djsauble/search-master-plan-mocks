const express = require('express');

const PORT = 3000;

// Create a server instance
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(require('serve-static')(__dirname + '/public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

// Define routes
app.get('/', function(req, res) {
  res.render('index', { user: req.user });
});

// Start the server
app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
