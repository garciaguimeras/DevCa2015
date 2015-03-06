function addInitiative{
var country= new Ext.form.TextField({ 
	fieldLabel:'Country', 
	name:'txt-country', 
	emptyText:'Your Country...', 
	id:"id-country" 
});
var name = new Ext.form.TextField({ 
	fieldLabel:'Name', 
	name:'txt-name', 
	emptyText:'Your name...', 
	id:"id-name" 
}); 
var leader = new Ext.form.TextField({ 
	fieldLabel:'Leader', 
	name:'txt-name', 
	emptyText:'Your Leader...', 
	id:"id-leader" 
}); 
var type= new Ext.form.TextField({ 
	fieldLabel:'Type', 
	name:'txt-type', 
	emptyText:'Your Type...', 
	id:"id-type" 
});
var date,
date = new Date();
var cadena = fecha.getDate() + '/'+(fecha.getMonth()+1)+'/'+fecha.getYear();

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
		country, 
		{
			fieldLabel:'Country', 
			name:'txt-type', 
			emptyText:'Your Country...', 
			id:"id-country"
		},
		leader,
		{
			fieldLabel:'Leader', 
			name:'txt-type', 
			emptyText:'Your Leader...', 
			id:"id-leader" 
		},
		url,
		{
			fieldLabel:'URL', 
			name:'txt-url', 
			emptyText:'Your URL...', 
			id:"id-url" 
		}}],
		buttons:[{text:'Save'},{text:'Cancel'}] 


}
