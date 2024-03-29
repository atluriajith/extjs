/*
 * Ext JS Library 2.0
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.onReady(function(){

    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());

    // create some portlet tools using built in Ext tool ids
    var tools = [{
        id:'gear',
        handler: function(){
            Ext.Msg.alert('Message', 'The Settings tool was clicked.');
        }
    },{
        id:'close',
        handler: function(e, target, panel){
            panel.ownerCt.remove(panel, true);
        }
    }];

    var sampleGrid = new SampleGrid([0, 2, 3]);
/*    
    sampleGrid.on('afterDragDrop', function () {
    	alert('sampleGrid on afterDragDrop');
    	//this.onResize();
    });
*/
    var viewport = new Ext.Viewport({
    	title:'viewport',
        layout:'border',
        items:[
/*       	{
            region:'west',
            id:'west-panel',
            title:'West',
            split:true,
            width: 200,
            minSize: 175,
            maxSize: 400,
            collapsible: true,
            margins:'35 0 5 5',
            cmargins:'35 5 5 5',
            layout:'accordion',
            layoutConfig:{
                animate:true
            },
            items: [{
                html: Ext.example.shortBogusMarkup,
                title:'Navigation',
                autoScroll:true,
                border:false,
                iconCls:'nav'
            },{
                title:'Settings',
                html: Ext.example.shortBogusMarkup,
                border:false,
                autoScroll:true,
                iconCls:'settings'
            }]
        },
*/        {
            xtype:'portal',
            id:'portal',
            title: 'portal',
            region:'center',
            margins:'35 5 5 0',
            items:[{
            	title: 'column1',
                columnWidth:.25,
                style:'padding:10px 0 10px 10px',
                items:[{
                	id: 'sampleGrid',
                    title: 'Grid in a Portlet',
                    layout:'fit',
                    //anchor: '100%',
                    tools: tools,
                    items: sampleGrid
                },{
                    title: 'Another Panel 1',
                    tools: tools,
                    html: Ext.example.shortBogusMarkup
                }]
            },{
            	title: 'column2',
                columnWidth:.50,
                style:'padding:10px 0 10px 10px',
                items:[{
                    title: 'Panel 2',
                    tools: tools,
                    html: Ext.example.shortBogusMarkup
                },{
                    title: 'Another Panel 2',
                    tools: tools,
                    html: Ext.example.shortBogusMarkup
                }]
            },{
            	title: 'column3',
                columnWidth:.25,
                style:'padding:10px',
                items:[{
                    title: 'Panel 3',
                    tools: tools,
                    html: Ext.example.shortBogusMarkup
                },{
                    title: 'Another Panel 3',
                    tools: tools,
                    html: Ext.example.shortBogusMarkup
                }]
            }]
        }]
    });

    
});

