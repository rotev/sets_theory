var ColorsHelper = Klass({
	
	initialize : function() {
		
	},

	color_names: ["dark", "one", "two", "three", "bg"],
	
	font_bold: "Arial",
	
	random: function() {
		var color_index = Math.round(Math.random() * (this.color_names.length-1));
		return this.color_names[color_index];
	},
				
	calc_color: function( value, start, end, min, max ) {
		var n = ( value - min ) / ( max - min );
		
		end = parseInt( end.substring( 1, 7 ), 16 );
		start = parseInt( start.substring( 1, 7 ), 16 );
				
		var result = start +
		( ( ( Math.round( ( ( ( ( end & 0xFF0000 ) >> 16 ) - ( ( start & 0xFF0000 ) >> 16 ) ) * n ) ) ) << 16 )
		+ ( ( Math.round( ( ( ( ( end & 0x00FF00 ) >> 8 ) - ( ( start & 0x00FF00 ) >> 8 ) ) * n ) ) ) << 8 )
		+ ( ( Math.round( ( ( ( end & 0x0000FF ) - ( start & 0x0000FF ) ) * n ) ) ) ) ) ;
	
			return "#" + 
			( ( result >= 0x100000 )
				? ""
				: ( result >= 0x010000 )
				? "0"
				: ( result >= 0x001000 )
					? "00"
					: ( result >= 0x000100 )
					? "000"
					: ( result >= 0x000010 )
						? "0000"
						: "00000" ) + result.toString( 16 );  
	},
	
	extend: function(original) {
		var extended = {};
			
		var self = this;
		
		$(this.color_names).each(function(index, color_name) {
			var color = original[color_name]; // Retrieve current color.
			extended[color_name] = color; // Copy original colors to the extended.
			
			for (var i = 1; i < 10; i++) {
				extended[color_name + "_" + (i*10) + "b"] = self.calc_color(i*10, color, '#000000', 1, 100);
				extended[color_name + "_" + (i*10) + "w"] = self.calc_color(i*10, color, '#ffffff', 1, 100);
			}
		});
		
		extended.white = '#ffffff';
		
		return extended;				
	},	
	
	hex_to_rgba: function(color) {
		function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
		function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
		function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
		function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
		
		R = hexToR(color);
		G = hexToG(color);
		B = hexToB(color);
		
		return [R, G, B, 1];
	},
	
	opacity: function(color, o) {
		color = this.hex_to_rgba(color);
		color[3] = o;
		return color;
	}
});

var colors_helper = new ColorsHelper();