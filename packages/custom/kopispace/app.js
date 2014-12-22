'use strict';
/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Kopispace = new Module('kopispace');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Kopispace.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Kopispace.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Kopispace.menus.add({
    title: 'kopispace example page',
    link: 'kopispace example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
    Kopispace.aggregateAsset('css', 'kopispace.css');
    Kopispace.aggregateAsset('css', 'fonts.css');
    Kopispace.aggregateAsset('css', 'helper.css');

    Kopispace.aggregateAsset('js', 'jquery.easing.min.js');
     Kopispace.aggregateAsset('js', 'helper.js');
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Kopispace.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Kopispace.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Kopispace.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Kopispace;
});
