Palette = Klass(Composite, {
	
	colors: [],	
	
	initialize : function(colors, config) {
		if (colors !== null) this.colors = colors;		
		Composite.initialize.call(this, config);
		
		this.generate();
	},
	
	generate: function() {

		var x = this.x, y = this.y, 
			width = this.width / colors_helper.color_names.length, 
			height = this.height / 20,
			colors = this.colors;
			
		var self = this;
		
		$(colors_helper.color_names).each(function(index, color_name) {
			var color = colors[color_name],
				rect;
			
			// Original
			rect = new Rectangle(width, height*2);
			rect.x = x + index * width;
			rect.y = y + (10*height);
			rect.fill = color;		    
			Composite.append.call(self, rect);
		
			for (var i = 1; i < 10; i++) {
				// Blacks
				rect = new Rectangle(width, height);
				rect.x = x + index * width;
				rect.y = y + (11*height) + i * height;
				rect.fill = colors[color_name + "_" + (i*10) + "b"];
				Composite.append.call(self, rect);
				
				// Whites
				rect = new Rectangle(width, height);
				rect.x = x + index * width;
				rect.y = y + i * height;
				rect.fill = colors[color_name + "_" + (100 - i*10) + "w"];		    
				Composite.append.call(self, rect);
			}
		});
	}
});