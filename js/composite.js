Composite = Klass(Drawable, {
	
	initialize : function(config) {
		Drawable.initialize.call(this, config);
	},
	
	append: function(obj) {
		Drawable.append.call(this, obj);
	},

	isPointInPath : function(x, y) {
		return 1;
	},

	getBoundingBox : function() {
		return [0, 0, 200, 200];
	}
});