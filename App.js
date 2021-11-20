Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
        alertMe();
       
    },

    _loadEpics: function(){},

    _loadFeatures: function(){}
});
