Scene = Klass(Composite, {
	
	name: "Scene AAA",
	
	timer: 0,
	
	initialize : function(config) {
		
		if (typeof config.d !== 'undefined') this.d = config.d;
		
		config.x = this.d.canvas.width / 2;
		config.y = this.d.canvas.height / 2;
		config.centered = true;
			  
		Composite.initialize.call(this, config);
		
		this.create_objects();
		this.animate();
	},
	
	create_objects: function() {
		
	},
	
	animate: function() {
		
	},
	
	keyaction: function(time, object, effect) {
			
		this.timer += time;
		
		effect(this.timer, object);
	}
});