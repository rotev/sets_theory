var Effects = Klass({
	
	initialize: function() {
	
		
	},
	
	fade_in: function(time /* absolute time */, object) {		
		var fadein = new Timeline();
		fadein.addKeyframe(time, { absoluteOpacity: 0 });
		fadein.addKeyframe(time + 500, { absoluteOpacity: 1 }, 'sine');
		object.addTimeline(fadein);
	},
	
	fade_out: function( time /*absolute time */, object) {
		var fadeout = new Timeline();
		fadeout.addKeyframe(time, { });
		fadeout.addKeyframe(time + 500, { absoluteOpacity: 0 }, 'sine');
		object.addTimeline(fadeout);
	},
	
	move_up: function(distance) {
		
		var func = function(time, object) {
			var t = new Timeline();
			t.addKeyframe(time, { y: object.y });
			t.addKeyframe(time + 500, { y: object.y - distance }, 'sine');
			object.addTimeline(t);
		}
		
		return func;
	}
});

var effects = new Effects();