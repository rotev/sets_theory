Scene_Level4Chap3Scene4a = Klass(Scene, {
	
	name: "level4_chap3_scene4a",
	
	initialize : function(config) {
		Scene.initialize.call(this, config);
		
		this.create_scene();
	},
	
	
	create_scene: function() {
		
		var d = this.d;
		
		d.all_sets = {
			xRadius: Math.round(d.canvas.width * 0.4),
			yRadius: Math.round(d.canvas.width * 0.4)
		}

		// Create all sets rectangle.
		var all_sets = new Ellipse(d.all_sets.xRadius, d.all_sets.yRadius, 
			{
				fill: colors.white,
				fillOpacity: 1,
				stroke: colors.dark_80w,
				strokeWidth: 8,
				centered: true,
				x: d.canvas.width / 2,
				y: d.canvas.height / 2,
				rx: 20, ry: 20, // px border-radius
				shadowColor: colors_helper.opacity(colors.bg_20b, 0.2),
				shadowBlur: 30
			}
		);
		
		var fadein = new Timeline();
		fadein.addKeyframe(0, { absoluteOpacity: 0 });
		fadein.addKeyframe(1000, { absoluteOpacity: 0 });
		fadein.addKeyframe(1500, { absoluteOpacity: 1 }, 'sine');
		all_sets.addTimeline(fadein);
		
		this.append(all_sets);
		
		// Create full circle.
		var full = new Circle(d.all_sets.xRadius / 2.5, {
			stroke: colors.dark_50w,
			strokeWidth: 8,
			strokeOpacity: 0.8,
			fill: colors.white,
			fillOpacity: 1,
			x: xCenter * 1.25, y: yCenter * 1.1,
			center: true,
			shadowColor: colors_helper.opacity(colors.dark_80w, 0.7),
			shadowBlur: 20
		});
		this.append(full);
		
		// Create hha circle.
		var hha = new Circle(d.all_sets.xRadius / 2.5, {
			stroke: colors.dark_50w,
			strokeWidth: 8, 
			strokeOpacity: 0.8,
			fillOpacity: 0.4,
			x: xCenter * 0.75, y: yCenter * 1.1,
			center: true,
			shadowColor: colors_helper.opacity(colors.dark_80w, 0.7),
			shadowBlur: 20
		});
		this.append(hha);
		
		var e = new ElementNode(
			E('h1', 'כל הקבוצות'), {
			x: xCenter,
			y: yCenter,
			center: true,
			font: 'Arial',
			align: "center"
			}
		)
		this.append(e);		
	}
});