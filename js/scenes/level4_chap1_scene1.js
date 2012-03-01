Scene_Level4Chap1Scene1 = Klass(Scene, {
	
	name: "level4_chap1_scene1",
	
	// objects
	all_sets: null,
	full: null,
	hha: null,
	
	functions_heading: null,
	
	functions: ["f(x)=x^2", "g(x)=x \\cdot sin(x)", "f(x)=x", 
		"\\chi _A(x)=1 \\Leftrightarrow x\\in A", 
		"x \\mapsto \\sqrt x",
		"g:N^R \\longrightarrow N",
		"f(x)=x^2-4x+16",
		"h(x)=\\frac{2x^3-15x}{17x+3}",
		"x\\mapsto |x|"
   		],
		
	func_elem: [],
	
	initialize : function(config) {
		Scene.initialize.call(this, config);
	},
	
	animate: function() {
		
		var self = this;
		
		function keyaction(time, object, effect) { 
			Scene.keyaction.call(self, time, object, effect);
		}
		
		keyaction(1000, this.func_elem[0], effects.fade_in);		
		for (var i = 1; i < this.func_elem.length; i++) {
			keyaction(200, this.func_elem[i], effects.fade_in);
		}
		keyaction(100, this.func_elem[4], effects.fade_out);
		keyaction(500, this.functions_heading, effects.fade_in);
		
		// Fade out everything.
		keyaction(2000, this.functions_heading, effects.fade_out);		
		for (var i = 0; i < this.func_elem.length; i++) {
			keyaction(10, this.func_elem[i], effects.fade_out);
		}
		
		// What is a function?
		keyaction(500, this.what_is_heading, effects.fade_in);
		
		// Move heading up.
		keyaction(1000, this.what_is_heading, effects.move_up(200));
		keyaction(500, this.def, effects.fade_in);
	},
	
	zoom: function(time, object) {
		
		object.centered = true;
		
		var zoom = new Timeline();
		zoom.addKeyframe(time, { rotation: 0, scale: 1 });
		zoom.addKeyframe(time + 1000, { rotation: Math.PI * 0.45, scale: 1.5 }, "sine");
		object.addTimeline(zoom);
		
	},
	
	create_objects: function() {
		
		var self = this;
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
		
		
		// Create equations.
		$(this.functions).each(function(index, func) {
			
			// Calculate random (x,y) position for the equation.
			//var x = Math.round(Math.random() * 500 - 250),
			//	y = Math.round(Math.random() * 500 - 250);
			var x = (index % 3) * 230 - 130,
				y = (Math.round((index-1) / 3)) * 150 - 200,
				color = colors_helper.random(); // Choose random color
				
			var e = new ElementNode(
				E('span', '$' + func + '$'), {
				"x": x,
				"y": y,
				center: true,
				font: 'Arial',
				rotation: Math.PI / 8 * (Math.random() - 0.5),
				align: "center",
				color: colors[color],
				absoluteOpacity: 0
				}
			);
			
			self.func_elem[index] = e;
			self.append(e);			
		});
		
		// Create 'Functions' Heading.
		this.functions_heading = new ElementNode(
			E('h1', 'פונקציות'), { x: 0, y: -170, color: colors.three, rotation: Math.PI / 10, font: 'Arial', scale: 1.8, absoluteOpacity: 0}
		);
		this.append(this.functions_heading);
		
		var what_is = new ElementNode(
			E('h1', 'מהי פונקציה?'), { x: -100, y: -100, color: colors.three, scale: 2, absoluteOpacity: 0 }
		);
		this.append(what_is);
		this.what_is_heading = what_is;
		
		var def = new ElementNode(
			$("#level4_chap1_scene1 .c_def").html(),
			{ 
				x: 0, y: 0, 
				color: colors.three,
				scale: 2, 
				width: 800,
				height: 600,
				fill: 'red',
				width: 400,
				absoluteOpacity: 0 
			}
		);
		this.append(def);
		this.def = def;
	}
});