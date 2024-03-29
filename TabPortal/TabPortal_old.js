
Ext.onReady(function(){
   // Menu containing actions
    var tabActions = new Ext.Panel({
    	frame:true,
    	title: 'Actions',
    	collapsible:true,
    	contentEl:'actions',
    	titleCollapse: true
    });
 
    // Parent Panel to hold actions menu
    var actionPanel = new Ext.Panel({
    	id:'action-panel',
    	region:'west',
    	split:true,
    	collapsible: true,
    	collapseMode: 'mini',
    	width:200,
    	minWidth: 150,
    	border: false,
    	baseCls:'x-plain',
    	items: [tabActions]
    });
 
// Adds tab to center panel
    function addTab(tabTitle, targetUrl){
        tabPanel.add({
	    title: tabTitle,
	    iconCls: 'tabs',
	    autoLoad: {url: targetUrl, callback: this.initSearch, scope: this},
	    closable:true
	}).show();
    }
 
    // Update the contents of a tab if it exists, otherwise create a new one
    function updateTab(tabId,title, url) {
    	var tab = tabPanel.getItem(tabId);
    	if(tab){
    		tab.getUpdater().update(url);
    		tab.setTitle(title);
    	}else{
    		tab = addTab(title,url);
    	}
    	tabPanel.setActiveTab(tab);
    }
 
    // Main (Tabbed) Panel
    var tabPanel = new Ext.TabPanel({
		region:'center',
		deferredRender:false,
		autoScroll: true, 
		margins:'0 4 4 0',
		activeTab:0,
		items:[{
			id:'tab1',
			contentEl:'tabs',
    			title: 'Main',
    			closable:false,
    			autoScroll:true
		}]
    });
 
    // Configure viewport
    viewport = new Ext.Viewport({
           layout:'border',
           items:[actionPanel,tabPanel]});

    // Map link ids to functions
    var count = 0;
    var actions = {
    	'create' : function(){
    		addTab("New Tab",'loripsum.html');
    	},
    	'use' : function(){
    		// Toggle between sample pages
    		updateTab('tab1','Replaced ' + count + ' Times','sample'+(count%2)+'.html');
    		count++;	    		
    	}
    };
 
    function doAction(e, t){
    	e.stopEvent();
    	actions[t.id]();
    }
 
    // This must come after the viewport setup, so the body has been initialized
    actionPanel.body.on('mousedown', doAction, null, {delegate:'a'});


});