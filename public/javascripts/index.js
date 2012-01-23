Ext.Loader.setConfig({enabled: true});

Ext.application({
    name: 'App',

    launch: function() {
        Ext.Viewport.add({
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1,
                xtype: 'carousel'
            },
            items: [{
                items: [
                    {cls: "head-1 head"},
                    {cls: "head-2 head"},
                    {cls: "head-3 head"},
                ]
            }, {
                items: [
                    {cls: "torso-1 torso"},
                    {cls: "torso-2 torso"},
                    {cls: "torso-3 torso"},
                ]
            }, {
                items: [
                    {cls: "legs-1 legs"},
                    {cls: "legs-2 legs"},
                    {cls: "legs-3 legs"},
                ]
            }, {
                xtype: 'component',
                docked: 'bottom',
                html: 'Illustrations by <a href="http://www.veryworrying.com/">Laurie Pink</a>'
            }]
        });
    }
});
