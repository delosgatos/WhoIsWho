/*requirejs.s.contexts._.execCb = function(name, callback, args, exports) {
    var value = callback.apply(exports, args);

    if (typeof (value) === 'function') {
        value.__module = name;
    }

    return value;
};*/
require.config({
    packages: ["app"],
    /* TODO: REMOVE IN PRODUCTION */
    //urlArgs: "stamp=" + (new Date()).getTime()
    //,enforceDefine:          true
    paths: {
        'jquery':                   ['//code.jquery.com/jquery-1.9.1.min', 'vendor/jquery']
        ,'text':                    'vendor/require.text'
        ,underscore:                '../vendor/underscore'
        ,backbone:                  ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min', '../vendor/backbone']
        ,pageslider:                ['vendor/pageslider.js']
        //,'jquery.easing':        ['//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min', 'vendor/jquery.easing']
        //,'jquery.mousewheel':    'vendor/jquery.mousewheel.min'
        //,'jquery.transform':     'vendor/jquery-css-transform'
        //,'jquery.parallax':      'vendor/jquery.parallax.min'
        //,'jquery.touch':         'vendor/jquery.touchSwipe.min'
        //,'jquery.imgliquid':     'vendor/imgLiquid-min'
        //,plugins:                '../plugins'
        //,bootstrap:              ['//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/js/bootstrap.min', '../../bootstrap/js/bootstrap.min']
        //,'easy.events':          '../utils/easy.events'
        //,audioplayer:            '../utils/audioplayer'
        //,json:                   ['//cdnjs.cloudflare.com/ajax/libs/json2/20121008/json2', '../vendor/json2']
        //,icanhaz:                ['//cdnjs.cloudflare.com/ajax/libs/ICanHaz.js/0.10/ICanHaz.min', '../vendor/ICanHaz.dev']
    }
    ,shim: {
        "jquery":                   { deps: [], exports: "$" }
        ,"underscore":              { deps: [], exports: "_" }
        ,"backbone":                { deps: ["jquery", "underscore"], exports: "Backbone"}
        ,"pageslider":              ['jquery']
        //"json":                  { deps: [] }
        //,"easy.events":          { deps: [], exports: "Event" }
        //,"jquery.easing":        ['jquery']
        //,"jquery.mousewheel":    ['jquery']
        //,"jquery.transform":     ['jquery']
        //,"jquery.parallax":      ['jquery']
        //,"jquery.touch":         ['jquery']
        //,'jquery.imgliquid':     ['jquery']
        //,"audioplayer":          { deps: ['jquery','easy.events'], exports: "AudioPlayer" }
        //,"plugins":              ['jquery']
        //,"bootstrap":            ['jquery']
        //,"icanhaz":              { deps: ["jquery", "underscore"], exports: "ich" }
    }

});


/*
    <script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
    <script src="js/app.js"></script>
    <script src="js/utils/templates.js"></script>
    <script src="js/models/EmployeeModel.js"></script>
    <script src="js/adapters/memory-adapter.js"></script>
    <script src="js/routers/AppRouter.js"></script>
    <script src="js/views/HomeView.js"></script>
    <script src="js/views/EmployeeListView.js"></script>
    <script src="js/views/EmployeeView.js"></script>
    <script src="js/views/ReportsView.js"></script>
    <script src="js/views/MapView.js"></script>
*/