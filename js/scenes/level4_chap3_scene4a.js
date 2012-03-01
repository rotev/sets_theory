Scene_Level4Chap3Scene4a = Klass(Scene, {
	
	name: "level4_chap3_scene4a",
	
	// objects
	all_sets: null,
	full: null,
	hha: null,
	
	initialize : function(config) {
		Scene.initialize.call(this, config);
	},
	
	animate: function() {
		
		var self = this;
		
		function keyaction(time, object, effect) { 
			Scene.keyaction.call(self, time, object, effect);
		}
		
		keyaction(1000, this.all_sets, effects.fade_in);
		keyaction(1000, this.full, effects.fade_in);
		keyaction(1000, this.hha, effects.fade_in);
		keyaction(4000, this, this.zoom);
	},
	
	zoom: function(time, object) {
		
		object.centered = true;
		
		var zoom = new Timeline();
		zoom.addKeyframe(time, { rotation: 0, scale: 1 });
		zoom.addKeyframe(time + 1000, { rotation: Math.PI * 0.45, scale: 1.5 }, "sine");
		object.addTimeline(zoom);
		
	},
	
	create_objects: function() {
		
		var d = this.d;
		
		d.all_sets = {
			xRadius: Math.round(d.canvas.width * 0.4),
			yRadius: Math.round(d.canvas.width * 0.4)
		}

		// Create all sets rectangle.
		this.all_sets = new Ellipse(d.all_sets.xRadius, d.all_sets.yRadius, 
			{
				fill: colors.white,
				fillOpacity: 1,
				stroke: colors.dark_80w,
				strokeWidth: 8,
				centered: true,
				//x: d.canvas.width / 2,
				//y: d.canvas.height / 2,
				x: 0, y: 0,
				rx: 20, ry: 20, // px border-radius
				shadowColor: colors_helper.opacity(colors.bg_20b, 0.2),
				shadowBlur: 30,
				absoluteOpacity: 0
			}
		);
		
		this.append(this.all_sets);
		
		// Create full circle.
		this.full = new Circle(d.all_sets.xRadius / 2.5, {
			stroke: colors.dark_50w,
			strokeWidth: 8,
			strokeOpacity: 0.8,
			fill: colors.white,
			fillOpacity: 1,
			//x: xCenter * 1.25, y: yCenter * 1.1,
			x: 0 - 100, y: 0,
			centered: true,
			shadowColor: colors_helper.opacity(colors.dark_80w, 0.7),
			shadowBlur: 20,
			absoluteOpacity: 0,
			endAngle: Math.PI * 1.9
		});
		this.append(this.full);
		
		// Create hha circle.
		this.hha = new Circle(d.all_sets.xRadius / 2.5, {
			stroke: colors.dark_50w,
			strokeWidth: 8, 
			strokeOpacity: 0.8,
			fillOpacity: 0.4,
			//x: xCenter * 0.75, y: yCenter * 1.1,
			x: 0 + 100, y: 0,
			centered: true,
			shadowColor: colors_helper.opacity(colors.dark_80w, 0.7),
			shadowBlur: 20,
			absoluteOpacity: 0
		});
		this.append(this.hha);
		
		/*var e = new ElementNode(
			E('h1', 'כל הקבוצות'), {
			x: xCenter,
			y: yCenter,
			center: true,
			font: 'Arial',
			align: "center"
			}
		)
		this.append(e);		*/
	}
});