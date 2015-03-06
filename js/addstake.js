function addStakeholder {

var name = new Ext.form.TextField({ 
	fieldLabel:'Name', 
	name:'txt-name', 
	emptyText:'Your name...', 
	id:"id-name" 
}); 

var type= new Ext.form.TextField({ 
	fieldLabel:'Type', 
	name:'txt-type', 
	emptyText:'Your Type...', 
	id:"id-type" 
});

var funcArea= new Ext.form.TextField({ 
	fieldLabel:'FuncArea', 
	name:'txt-type', 
	emptyText:'Your Functional Area...', 
	id:"id-functArea" 
});

var url= new Ext.form.TextField({ 
	fieldLabel:'URL', 
	name:'txt-url', 
	emptyText:'Your URL...', 
	id:"id-url" 
});

this.form= new Ext.FormPanel({ 
	title:'Registrar datos', 
	renderTo: 'frame', 
	defaults:{xtype:'textfield'},	
	bodyStyle:'padding: 10px', 
	items:[ 
		name, 
		{ 
			fieldLabel:'Name',  
			name:'txt-name', 
			value:'Your name...', 
			id:"id-name" 
		},
		type, 
		{
			fieldLabel:'Type', 
			name:'txt-type', 
			emptyText:'Your Type...', 
			id:"id-type"
		},{
		funcArea,
			fieldLabel:'FuncArea', 
			name:'txt-type', 
			emptyText:'Your Functional Area...', 
			id:"id-functArea" 
		},{
		url,
			fieldLabel:'URL', 
			name:'txt-url', 
			emptyText:'Your URL...', 
			id:"id-url" 
		}],
		buttons:[{text:'Save'},{text:'Cancel'}] 
});}