Palette = Klass(Composite, {
	
	colors: [],	
	
	color_names: ["dark", "one", "two", "three", "bg"],
	x: 10, y: 485, width: 50, height: 100,
	
	initialize : function(config) {
		if (typeof config.x !== 'undefined') this.x = config.x;
		if (typeof config.y !== 'undefined') this.y = config.y;
		if (typeof config.width !== 'undefined') this.width = config.width;
		if (typeof config.height !== 'undefined') this.height = config.height;
		if (typeof config.colors !== 'undefined') 
			this.colors = config.colors;
		else
			alert('Colors were not provided');
		
		Composite.initialize.call(this, config);
	},
	
	/*append: function(node) {
		CanvasNode.append.call(this, node);
	},*/
	
	generate: function() {

		var x = this.x, y = this.y, 
			width = this.width / this.color_names.length, 
			height = this.height / 20,
			colors = this.colors;
			
		var self = this;
		
		$(this.color_names).each(function(index, color_name) {
			var color = colors[color_name],
				rect;
			
			// Original
			rect = new Rectangle(width, height*2);
			rect.x = x + index * width;
			rect.y = y + (10*height);
			rect.fill = color;		    
			//self.append(rect)
			Composite.append.call(self, rect);
		
			for (var i = 1; i < 10; i++) {
				// Blacks
				rect = new Rectangle(width, height);
				rect.x = x + index * width;
				rect.y = y + (11*height) + i * height;
				rect.fill = colors[color_name + "_" + (i*10) + "b"];		    
				//self.append(rect)
				Composite.append.call(self, rect);
				
				// Whites
				rect = new Rectangle(width, height);
				rect.x = x + index * width;
				rect.y = y + i * height;
				rect.fill = colors[color_name + "_" + (100 - i*10) + "w"];		    
				//self.append(rect)
				Composite.append.call(self, rect);
			}
		});
	}
});