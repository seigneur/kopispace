'use strict';

// The Package is past automatically as first parameter
module.exports = function(Kopispace, app, auth, database) {

  app.get('/kopispace/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/kopispace/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/kopispace/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/kopispace/example/render', function(req, res, next) {
    Kopispace.render('index', {
      package: 'kopispace'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
