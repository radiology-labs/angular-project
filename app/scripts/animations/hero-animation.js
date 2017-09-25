(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"Animation_600x500_atlas_", frames: [[1386,0,244,360],[1187,0,197,495],[1779,282,5,114],[1632,0,124,375],[1758,219,56,28],[1537,377,104,121],[1386,362,149,149],[1643,440,138,59],[1758,163,128,54],[1643,377,134,61],[1758,0,185,161],[1758,249,42,31],[1179,514,605,356],[0,514,1177,505],[0,0,1185,512]]}
];


// symbols:



(lib.ml_beam_big = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ml_beam_lines = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ml_beam_single = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ml_beam_small = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ml_chair_el = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ml_chair_legs = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ml_chair_man = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ml_chair_shadow = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ml_doc_body = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ml_doc_shadow = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ml_girl = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ml_girl_hand = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ml_mach_body = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ml_platform = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ml_platform_shadow = function() {
	this.spriteSheet = ss["Animation_600x500_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,70,248,0.988)","rgba(0,70,248,0)","rgba(248,98,117,0.988)"],[0,0,1],-69.6,2.4,10.1,2.4).s().p("AjGAJQDSgMC7gnIAAAjQi9AljPANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-4.2,39.9,8.6);


(lib.monitor04a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("Ag8gOQA2AABAgEIACAhQg7ADg9ABg");
	this.shape.setTransform(6.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor04a, new cjs.Rectangle(0,0,12.1,3.8), null);


(lib.monitor0406 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape.setTransform(1.9,7.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(22).to({_off:false},0).wait(11));

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_1.setTransform(8.1,4.8);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(11).to({_off:false},0).to({_off:true},11).wait(11));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAHAAAGQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_2.setTransform(14,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},11).wait(22));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEFFA5").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_3.setTransform(1.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(33));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BEFFA5").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAFgIAAQgHAAgFgFg");
	this.shape_4.setTransform(8.1,4.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(33));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BEFFA5").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAHAAAGQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_5.setTransform(14,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.9,9.4);


(lib.monitor0405 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AhHgFQBOgLBBgMIgBAjQhBAMhIAKg");
	this.shape.setTransform(7.2,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0405, new cjs.Rectangle(0,0,14.3,5.9), null);


(lib.monitor0403 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("Ai7gEQC7gCC2gXIAGAiQi5AXi+ACg");
	this.shape.setTransform(18.8,3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0403, new cjs.Rectangle(0,0,37.6,6.1), null);


(lib.monitor0402 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AhrgKQBngBBsgKIAEAfQhtALhqABg");
	this.shape.setTransform(10.8,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0402, new cjs.Rectangle(0,0,21.6,4.4), null);


(lib.monitor03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626BC2").s().p("AgegPIAdgUQAOAcASAVIgdAWQgQgWgQgdg");
	this.shape.setTransform(6.7,26.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104));

	// Layer 9
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626BC2").s().p("AgZgsIAagOQACAxAXAxIgbATQgXg1gBgyg");
	this.shape_1.setTransform(2.6,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(104));

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#626BC2").s().p("Agig2IAZgOQAIA8AjA6IgbATQgjg9gGg+g");
	this.shape_2.setTransform(9.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(104));

	// Layer 11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#626BC2").s().p("AgyhEIAagPQAPBMA8BFIgcAWQg9hKgMhOg");
	this.shape_3.setTransform(17.6,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(104));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#626BC2").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_4.setTransform(24,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7579BC").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_5.setTransform(24,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8988B6").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_6.setTransform(24,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9C96B0").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_7.setTransform(24,7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B0A4AB").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_8.setTransform(24,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C3B2A5").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_9.setTransform(24,7.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6C19F").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_10.setTransform(24,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EACF99").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_11.setTransform(24,7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDDD93").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_12.setTransform(24,7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECD098").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_13.setTransform(24,7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DBC49D").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_14.setTransform(24,7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9B7A3").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_15.setTransform(24,7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8AAA8").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_16.setTransform(24,7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A79EAD").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_17.setTransform(24,7.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9691B2").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_18.setTransform(24,7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8484B8").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_19.setTransform(24,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7378BD").s().p("Agyg9IAbgPQASBFA4A/IgbAVQg6hEgQhGg");
	this.shape_20.setTransform(24,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(18).to({_off:true},1).wait(16).to({_off:false},0).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.1,29.9);


(lib.monitor0206 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("Ag8BgQBchlADhuIAaAPQAABvhaBpg");
	this.shape.setTransform(6.1,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0206, new cjs.Rectangle(0,0,12.2,23.2), null);


(lib.monitor0205 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AgmA9QAuhEAGhHIAZAOQgEBJgsBGg");
	this.shape.setTransform(3.9,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0205, new cjs.Rectangle(0,0,7.7,15.9), null);


(lib.monitor0204 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AgiAOQAYgXAQgXIAdASQgSAZgVAWg");
	this.shape.setTransform(3.5,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0204, new cjs.Rectangle(0,0,7,6.7), null);


(lib.monitor0203 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AgVAXQANgeAFghIAZAQQgEAhgMAfg");
	this.shape.setTransform(2.2,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0203, new cjs.Rectangle(0,0,4.4,8.1), null);


(lib.monitor0202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("Ag5AvQA5g1Aeg8IAcASQgcA7g4A4g");
	this.shape.setTransform(5.8,6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0202, new cjs.Rectangle(0,0,11.6,13.4), null);


(lib.monitor0201 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AhKBUQBmhYAShkIAdARQgQBkhjBcg");
	this.shape.setTransform(7.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0201, new cjs.Rectangle(0,0,14.9,21), null);


(lib.monitor0106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AhEAEIAOggQA6AMBBALIgHAiQg+gKhEgPg");
	this.shape.setTransform(6.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0106, new cjs.Rectangle(0,0,13.8,5.8), null);


(lib.monitor0105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AiAgSIAVgfQBsAmCAAcIgNAhQiAgdh0gng");
	this.shape.setTransform(12.9,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0105, new cjs.Rectangle(0,0,25.8,10), null);


(lib.monitor0104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AjBgfIATgeQCoA6DIAfIgHAiQjQgjisg6g");
	this.shape.setTransform(19.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0104, new cjs.Rectangle(0,0,38.9,12.3), null);


(lib.monitor0103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AizgbIATgeQCbA0C5AeIgHAhQi/gfihg2g");
	this.shape.setTransform(18,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0103, new cjs.Rectangle(0,0,36.1,11.7), null);


(lib.monitor0102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("Ag4AHIAMghQA0AMAxAIIgIAhQgygJg3gLg");
	this.shape.setTransform(5.7,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0102, new cjs.Rectangle(0,0,11.4,5.3), null);


(lib.monitor0101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AhigJIAUgfQBTAcBeAUIgNAhQhhgXhXgbg");
	this.shape.setTransform(9.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.monitor0101, new cjs.Rectangle(0,0,19.8,8.2), null);


(lib.mlplatform = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_platform();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.ml_platform_shadow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,20,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlplatform, new cjs.Rectangle(0,0,592.5,276), null);


(lib.mlgirlhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_girl_hand();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,15.5);


(lib.mlgirl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoALXQgDgjgBgjQAAgrAHgaQAEgSANgeQALgdALgOIAOgQIAOgOQAZgaAhg5QAmhAAMgjQARg0AAhZQAAgrgLgVQgGgLgOgOIgWgYQgIgLgMgYQgMgYgIgLQgKgMgcgYQhPg9hQg4QgFgEgDABIgBABIAAgGQgFhZALhxQAGhBAUiJQAJhAAMgfIAOgbISPAAIAAWtg");
	mask.setTransform(58.4,43.2);

	// Layer 1
	this.instance = new lib.ml_girl();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.5,80.5);


(lib.mldocshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_doc_shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mldocshadow, new cjs.Rectangle(0,0,67,30.5), null);


(lib.mldocbody2fill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ak/AeIFeiiIEhBnIldCig");
	this.shape.setTransform(32,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,26.6);


(lib.mldocbodcheck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhsgXIAzgCIADAcIChgGIACAVIjVAIg");
	this.shape.setTransform(10.1,3.5,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F86275").s().p("Ah5A5Qg3gTgDgfQgCgdAygYQAygXBLgDQBKgDA2ATQA3AUADAeQADAegzAXQgyAYhLACIgSABQg/AAgvgRg");
	this.shape_1.setTransform(9,3.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,7.3);


(lib.mlcharelement = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_chair_el();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlcharelement, new cjs.Rectangle(0,0,28,14), null);


(lib.mlchairshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_chair_shadow();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlchairshadow, new cjs.Rectangle(0,0,69,29.5), null);


(lib.mlchairman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_chair_man();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlchairman, new cjs.Rectangle(0,0,74.5,74.5), null);


(lib.mlchairlegs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_chair_legs();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlchairlegs, new cjs.Rectangle(0,0,52,60.5), null);


(lib.mlbeamsmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_beam_small();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlbeamsmall, new cjs.Rectangle(0,0,62,187.5), null);


(lib.mlbeamsingleel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_beam_single();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlbeamsingleel, new cjs.Rectangle(0,0,2.5,57), null);


(lib.mlbeamlines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_beam_lines();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlbeamlines, new cjs.Rectangle(0,0,98.5,247.5), null);


(lib.mlbeambig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ml_beam_big();
	this.instance.parent = this;
	this.instance.setTransform(1,0,0.49,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlbeambig, new cjs.Rectangle(1,0,119.6,180), null);


(lib.mcmonitorcircl2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(16));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_16 = new cjs.Graphics().p("AgbBgQgYgHgTgUQgSgTgHgYIgDgTQgBgJACgNQADgVANgTQAMgSATgMQATgLAXgCQAWgCAVAIQAXAJASAUQARAUAEAZQAFAYgIAZQgIAZgTARQgTASgaAGQgLACgLAAQgNAAgOgDg");
	var mask_graphics_17 = new cjs.Graphics().p("AgsBgQgZgHgSgUQgTgTgHgYIgDgTQAAgJABgNQADgVANgTQANgSATgMQATgLAXgCQANgBAMACIAJgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAYgJAZQgIAZgTARQgTASgZAGQgVAEgTgDQgJABgIAAQgOAAgNgDg");
	var mask_graphics_18 = new cjs.Graphics().p("AhNBqQgYgHgTgUQgSgTgHgYIgDgTQgBgKACgMQADgVANgTQAMgSATgMQATgLAXgCIAOAAIAJgHQATgLAWgCQAOgBANACIAIgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAYQgIAZgTARQgTASgaAGQgUAEgUgDQgMACgLgBQgPANgVAFQgLACgMAAQgNAAgOgDg");
	var mask_graphics_19 = new cjs.Graphics().p("AhNBqQgYgHgTgUQgSgTgHgYIgDgTQgBgKACgMQADgVANgTQAMgSATgMQATgLAXgCIAOAAIAJgHQATgLAWgCQAOgBANACIAIgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAYQgIAZgTARQgTASgaAGQgUAEgUgDQgMACgLgBQgPANgVAFQgLACgMAAQgNAAgOgDg");
	var mask_graphics_20 = new cjs.Graphics().p("AhrB2QgYgHgTgTQgSgTgHgZIgDgSQgBgLACgMQADgVANgTQAMgSATgLIAEgCIAFgIQAMgTATgLQATgLAXgCQAXgCAVAIIACAAQARgKAVgBQAOgCANADIAIgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAZQgIAZgTARQgTARgaAGQgUAFgUgEQgMACgLAAQgQAMgVAFIgPADQgTAQgZAGQgLADgMAAQgNAAgOgEg");
	var mask_graphics_21 = new cjs.Graphics().p("Ah8CDQgZgHgSgUQgTgTgHgYIgDgTQAAgKABgNQADgUANgTQANgTATgLIAMgGQAKgLANgIIADgCIAFgIQANgSATgMQATgLAXgCQAXgCATAIIACABQASgKAWgCQANgBANACIAJgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAYgTARQgTASgZAGQgVAEgUgDQgLACgLgBQgQANgVAFIgRACQgLALgPAGIgHAHQgTASgZAGQgMACgLAAQgOAAgNgDg");
	var mask_graphics_22 = new cjs.Graphics().p("AiOCUQgYgHgTgTQgSgTgHgZIgDgSQAAgLABgMQADgWANgSQAMgSATgMIABAAIADgFQAMgSATgMIAMgGQAKgLANgHIAEgCIAFgIQAMgTATgLQATgLAXgCQAWgCAVAIIABAAQATgKAVgBQAOgCAMADIAJgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAaQgIAYgTARQgTARgaAGQgVAFgUgEQgLACgLAAQgQAMgVAFIgRADQgMAKgNAHIgHAHQgIAHgJAFQgHANgLAKQgTARgaAGQgMADgLAAQgOAAgNgEg");
	var mask_graphics_23 = new cjs.Graphics().p("AidCoQgYgHgTgTQgSgTgHgZIgDgSQAAgLABgMQADgWANgTQAJgNALgIQAEgJAGgJQAMgSATgMIABAAIADgFQAMgSATgMIAMgGQAKgLANgHIAEgCIAFgIQAMgTATgLQATgLAWgCQAXgCAVAIIABAAQATgKAVgBQAOgCAMADIAJgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAaQgIAZgTAQQgTARgaAGQgVAFgUgEQgLACgLAAQgQAMgVAFIgRADQgMAKgOAHIgHAHQgHAHgJAFQgHANgLAKIgGAEQgIAVgQAPQgTARgaAGQgMADgLAAQgOAAgNgEg");
	var mask_graphics_24 = new cjs.Graphics().p("AifDBQgYgHgTgTQgSgTgHgZIgDgSQgBgLACgMQABgKAEgKIgBgHQgBgLACgMQADgWANgSQAIgNAMgJQADgJAGgJQANgSATgMIAAAAIADgFQANgSATgMIAMgGQAKgLANgHIADgCIAFgIQANgTATgLQATgLAWgCQAXgCAUAIIACAAQASgKAWgBQANgCANADIAJgBQAXgCAUAIQAYAJARAUQARAUAFAYQAFAZgJAaQgIAZgTARQgTARgZAGQgVAEgUgEQgLACgLAAQgRAMgUAFIgRADQgMAKgPAHIgHAHQgHAHgIAFQgIANgLAKIgDADQADAWgIAXQgIAZgTARQgTARgZAGQgMADgMAAQgNAAgNgEg");
	var mask_graphics_25 = new cjs.Graphics().p("AiLDhQgcgCgYgRQgXgQgLgaQgGgOgCgQQgBgWAIgVIAAgBIgCgNQAAgLABgMQACgKADgKIgBgHQAAgLABgMQADgVANgTQAJgNALgJQAEgJAGgJQAMgSATgMIABAAIADgFQAMgSATgMIAMgGQAKgLANgHIAEgCIAFgIQAMgTATgLQATgLAWgCQAXgCAVAIIABAAQATgJAVgCQAOgCAMADIAJgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAaQgIAZgTARQgTARgaAGQgUAFgVgEQgLACgLAAQgQAMgVAFIgRADQgMAKgOAGIgHAHQgHAHgJAFQgHANgLAKIgEADQADAWgHAXIgCAEIACAPQACAdgOAZQgNAYgaAOQgXANgZAAIgFAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AiOD4QgYgHgTgTQgSgTgHgZIgDgSIAAgCQgHgKgFgLQgGgOgCgQQgBgWAIgVIAAgBIgCgNQAAgLABgMQACgKADgKIgBgHQAAgKABgMQADgWANgTQAJgNALgJQAEgJAGgJQAMgSATgMIABAAIADgFQAMgSATgMIAMgGQAKgLANgHIAEgCIAFgIQAMgTATgLQATgLAWgCQAXgCAVAIIABAAQATgKAVgBQAOgCAMADIAJgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAaQgIAZgTARQgTARgaAGQgUAFgVgEQgLACgLAAQgQAMgVAFIgRADQgMAKgOAHIgHAHQgHAHgJAEQgHANgLAKIgEADQADAWgHAXIgCAEIACAPQAOASAEAWQAFAZgIAaQgIAZgTARQgTARgaAGQgMADgLAAQgOAAgNgEg");
	var mask_graphics_27 = new cjs.Graphics().p("Ah1EZQgYgHgTgUQgSgTgHgYIgDgTIAAgGQgPgSgHgWIgDgTIAAgBQgHgKgFgMQgGgOgCgQQgBgWAIgVIAAgBIgCgNQAAgKABgMQACgKADgJIgBgIQAAgKABgNQADgVANgTQAJgNALgKQAEgJAGgIQAMgTATgLIABgBIADgEQAMgTATgLIAMgGQAKgLANgIIAEgCIAFgIQAMgSATgMQATgLAWgCQAXgCAVAIIABABQATgKAVgCQAOgBAMACIAJgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgUAEgVgDQgLACgLgBQgQANgVAFIgRACQgMALgOAGIgHAHQgHAHgJAFQgHANgLAKIgEADQADAVgHAXIgCAFIACAOQAOATAEAWQACAJAAAJIACACQAQAUAEAZQAFAZgIAZQgHAZgTARQgTASgaAGQgMACgLAAQgOAAgNgDg");
	var mask_graphics_28 = new cjs.Graphics().p("AhIEtQgYgHgTgUQgIgIgGgKQgRgHgOgPQgSgTgHgYIgDgTIAAgGQgPgSgHgWIgDgTIAAgBQgHgKgFgMQgGgOgCgQQgBgWAIgVIAAgBIgCgMQAAgKABgNQACgKADgJIgBgIQAAgKABgNQADgVANgTQAJgNALgKQAEgJAGgIQAMgTATgLIABgBIADgEQAMgTATgLIAMgGQAKgLANgIIAEgCIAFgIQAMgSATgMQATgLAWgCQAXgCAVAIIABABQATgKAVgCQAOgBAMACIAJgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgUAEgVgDQgLACgLgBQgQANgVAFIgRACQgMALgOAGIgHAHQgHAHgJAFQgHANgLAKIgEADQADAWgHAWIgCAFIACAOQAOATAEAWQACAJAAAJIACACIAJANQAUAJAPASQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgZAGQgMACgLAAQgOAAgNgDg");
	var mask_graphics_29 = new cjs.Graphics().p("AgME5QgVgGgRgPQgLgBgLgDQgYgHgTgTQgIgJgGgJQgRgIgOgOQgSgTgHgZIgDgSIAAgHQgPgSgHgWIgDgSIAAgCQgHgKgFgLQgGgOgCgQQgBgWAIgUIAAgBIgCgNQAAgLABgMQACgKADgKIgBgHQAAgLABgMQADgWANgTQAJgNALgJQAEgJAGgJQAMgSATgMIABAAIADgFQAMgSATgMIAMgGQAKgLANgHIAEgCIAFgIQAMgTATgLQATgLAWgCQAXgCAVAIIABAAQATgKAVgBQAOgCAMADIAJgBQAXgCAVAIQAXAJASAUQARAUAEAYQAFAZgIAaQgIAZgTARQgTARgaAGQgUAFgVgEQgLACgLAAQgQAMgVAFIgRADQgMAKgOAHIgHAHQgHAHgJAFQgHANgLAKIgEADQADAWgHAWIgCAEIACAPQAOASAEAWQACAJAAAJIACACIAJANQANAHAMAKQAPABAOAFQAYAJARAUQARAVAEAYQAFAZgIAaQgIAZgTARQgTARgaAGQgMADgLAAQgOAAgMgEg");
	var mask_graphics_30 = new cjs.Graphics().p("AA+E8QgIgDgIgEIgJADQgZAGgYgHQgVgGgRgQQgLAAgLgDQgYgHgTgUQgIgIgGgKQgRgHgOgPQgSgTgHgYIgDgTIAAgGQgPgSgHgWIgDgTIAAgBQgHgKgFgMQgGgOgCgQQgBgWAIgUIAAgBIgCgNQAAgKABgNQACgKADgJIgBgIQAAgKABgNQADgVANgTQAJgNALgKQAEgJAGgIQAMgTATgLIABgBIADgEQAMgTATgLIAMgGQAKgLANgIIAEgCIAFgIQAMgSATgMQATgLAWgCQAXgCAVAIIABABQATgKAVgCQAOgBAMACIAJgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgUAEgVgDQgLACgLgBQgQANgVAFIgRACQgMALgOAGIgHAHQgHAHgJAFQgHANgLAKIgEADQADAWgHAWIgCAFIACAOQAOATAEAWQACAJAAAJIACACIAJANQANAGAMAKQAPABAOAGIAIADQALgDAMgBQAXgCAVAIQAYAJARAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgMACgLAAQgOAAgNgDg");
	var mask_graphics_31 = new cjs.Graphics().p("AA3E8QgJgDgIgEIgIADQgaAGgXgHQgVgGgRgQQgLAAgLgDQgZgHgSgUQgIgIgGgKQgSgHgNgPQgTgTgGgYIgDgTIAAgGQgQgSgGgWIgDgTIAAgBQgIgKgFgMQgGgOgBgQQgCgWAIgUIAAgBIgBgNQgBgKACgNQABgKAEgJIgBgIQgBgKACgNQADgVANgTQAIgNAMgKQADgJAGgIQANgTATgLIAAgBIADgEQANgTATgLIAMgGQAKgLANgIIADgCIAFgIQANgSATgMQATgLAXgCQAWgCAUAIIACABQASgKAWgCQANgBANACIAJgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARQgTASgZAGQgVAEgUgDQgLACgLgBQgRANgUAFIgRACQgMALgPAGIgGAHQgIAHgIAFQgIANgLAKIgDADQADAWgIAWIgBAFIACAOQAOATAEAWQABAJAAAJIACACIAKANQANAGALAKQAPABAOAGIAJADQALgDAMgBQALgBALABQARgJAVgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARQgTASgZAGQgTAEgTgDQgKAGgMADQgMACgMAAQgNAAgNgDg");
	var mask_graphics_32 = new cjs.Graphics().p("AAZE8QgJgDgIgEIgIADQgZAGgYgHQgVgGgRgQQgLAAgLgDQgZgHgSgUQgIgIgGgKQgSgHgNgPQgTgTgGgYIgDgTIAAgGQgQgSgGgWIgDgTIAAgBQgIgKgFgMQgGgOgBgQQgCgWAIgUIAAgBIgBgNQgBgKACgNQABgKAEgJIgBgIQgBgKACgNQADgVANgTQAIgNAMgKQADgJAGgIQANgTATgLIAAgBIADgEQANgTATgLIAMgGQAKgLANgIIADgCIAFgIQANgSATgMQATgLAXgCQAXgCATAIIACABQASgKAWgCQANgBANACIAJgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARQgTASgZAGQgVAEgUgDQgLACgLgBQgRANgUAFIgRACQgLALgPAGIgHAHQgIAHgIAFQgIANgLAKIgDADQADAWgIAWIgBAFIACAOQAOATAEAWQABAJAAAJIACACIAKANQAOAGALAKQAPABANAGIAJADQALgDAMgBQALgBALABQARgJAVgBIAPgBIADgBQATgLAXgCQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARQgTASgZAGQgPADgPgBQgOAJgQAEQgTAEgTgDQgKAGgMADQgMACgMAAQgNAAgNgDg");
	var mask_graphics_33 = new cjs.Graphics().p("AAKE8QgJgDgHgEIgIADQgaAGgYgHQgVgGgRgQQgLAAgLgDQgZgHgSgUQgIgIgGgKQgSgHgNgPQgTgTgGgYIgDgTIAAgGQgQgSgGgWIgDgTIAAgBQgIgKgFgMQgGgOgBgQQgCgWAIgUIAAgBIgBgNQgBgKACgNQABgKAEgJIgBgIQgBgKACgNQADgVANgTQAIgNAMgKQADgJAGgIQANgTATgLIAAgBIADgEQANgTATgLIAMgGQAKgLANgIIADgCIAFgIQANgSATgMQATgLAXgCQAXgCAUAIIACABQARgKAWgCQANgBANACIAJgBQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARQgTASgZAGQgVAEgUgDQgLACgLgBQgRANgUAFIgQACQgMALgPAGIgHAHQgIAHgIAFQgIANgLAKIgDADQADAWgIAWIgBAFIACAOQAOATAEAWQABAJAAAJIACACIAKANQAOAGALAKQAPABAOAGIAIADQALgDAMgBQALgBALABQARgJAVgBIAJgBIAHgLQANgTATgLQATgLAXgCQAXgCAUAIQAYAJARAUQARAUAFAZQAFAZgJAZQgIAZgTARIgFAFQgIAUgRAPQgTASgZAGQgPADgPgBQgOAJgQAEQgTAEgTgDQgKAGgMADQgMACgMAAQgNAAgNgDg");
	var mask_graphics_34 = new cjs.Graphics().p("AgHE8QgIgDgIgEIgJADQgZAGgZgHQgVgGgRgQQgLAAgLgDQgYgHgTgUQgIgIgGgKQgRgHgOgPQgSgTgHgYIgDgTIAAgGQgPgSgHgWIgDgTIAAgBQgHgKgFgMQgGgOgCgQQgBgWAIgUIAAgBIgCgNQAAgKABgNQACgKADgJIgBgIQAAgKABgNQADgVANgTQAJgNALgKQAEgJAGgIQAMgTATgLIABgBIADgEQAMgTATgLIAMgGQAKgLANgIIAEgCIAFgIQAMgSATgMQATgLAXgCQAXgCAVAIIABABQASgKAVgCQAOgBAMACIAJgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgUAEgVgDQgLACgLgBQgQANgUAFIgRACQgMALgOAGIgHAHQgIAHgJAFQgHANgLAKIgEADQADAWgHAWIgCAFIACAOQAOATAEAWQACAJAAAJIACACIAJANQAOAGAMAKQAPABAOAGIAIADQALgDALgBQAMgBALABQARgJAUgBIAKgBIAHgLQAMgTATgLQAKgGAKgDQAHgGAIgFQATgLAXgCQAXgCAVAIQAYAJARAUQARAUAEAZQAFAZgIAZQgIAZgTARQgQAPgVAGIgEAEQgIAUgQAPQgTASgaAGQgPADgPgBQgNAJgRAEQgTAEgSgDQgLAGgMADQgMACgLAAQgOAAgMgDg");
	var mask_graphics_35 = new cjs.Graphics().p("AgME8QgIgDgIgEIgJADQgZAGgZgHQgVgGgRgQQgLAAgLgDQgYgHgTgUQgIgIgGgKQgRgHgOgPQgSgTgHgYIgDgTIAAgGQgPgSgHgWIgDgTIAAgBQgHgKgFgMQgGgOgCgQQgBgWAIgUIAAgBIgCgNQAAgKABgNQACgKADgJIgBgIQAAgKABgNQADgVANgTQAJgNALgKQAEgJAGgIQAMgTATgLIABgBIADgEQAMgTATgLIAMgGQAKgLANgIIAEgCIAFgIQAMgSATgMQATgLAXgCQAXgCAVAIIABABQATgKAUgCQAOgBAMACIAJgBQAXgCAVAIQAXAJASAUQARAUAEAZQAFAZgIAZQgIAZgTARQgTASgaAGQgUAEgVgDQgLACgLgBQgQANgUAFIgRACQgMALgOAGIgHAHQgIAHgJAFQgHANgLAKIgEADQADAWgHAWIgCAFIACAOQAOATAEAWQACAJAAAJIACACIAJANQAOAGAMAKQAPABAOAGIAIADQALgDALgBQAMgBALABQARgJAUgBIAKgBIAHgLQALgRARgLIABgMQADgVANgTQAMgTATgKQATgLAXgCQAXgCAVAIQAYAJARATQARAUAEAZQAFAZgIAZIgGAOQADAXgHAXQgIAZgTARQgQAPgVAGIgEAEQgIAUgQAPQgTASgaAGQgPADgPgBQgNAJgRAEQgTAEgSgDQgLAGgMADQgMACgLAAQgOAAgMgDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(16).to({graphics:mask_graphics_16,x:31.4,y:3.4}).wait(1).to({graphics:mask_graphics_17,x:29.6,y:3.4}).wait(1).to({graphics:mask_graphics_18,x:26.4,y:4.4}).wait(1).to({graphics:mask_graphics_19,x:26.4,y:4.4}).wait(1).to({graphics:mask_graphics_20,x:23.4,y:5.6}).wait(1).to({graphics:mask_graphics_21,x:21.6,y:6.9}).wait(1).to({graphics:mask_graphics_22,x:19.9,y:8.6}).wait(1).to({graphics:mask_graphics_23,x:18.4,y:10.6}).wait(1).to({graphics:mask_graphics_24,x:18.1,y:13.1}).wait(1).to({graphics:mask_graphics_25,x:17.9,y:15.9}).wait(1).to({graphics:mask_graphics_26,x:17.9,y:18.6}).wait(1).to({graphics:mask_graphics_27,x:17.9,y:21.9}).wait(1).to({graphics:mask_graphics_28,x:17.9,y:23.9}).wait(1).to({graphics:mask_graphics_29,x:17.9,y:25.1}).wait(1).to({graphics:mask_graphics_30,x:17.9,y:25.4}).wait(1).to({graphics:mask_graphics_31,x:18.6,y:25.4}).wait(1).to({graphics:mask_graphics_32,x:21.6,y:25.4}).wait(1).to({graphics:mask_graphics_33,x:23.1,y:25.4}).wait(1).to({graphics:mask_graphics_34,x:24.9,y:25.4}).wait(1).to({graphics:mask_graphics_35,x:25.4,y:25.4}).wait(20));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(33,25,106,0.988)","rgba(246,81,112,0.988)"],[0,1],-26.5,14.2,7.4,-26.2).s().p("Ai5C7QhOhOAAhtQAAhsBOhOQBNhOBsAAIADABIAAADQAQADAKALQALAMAAAPQAAARgMAMQgNANgQAAIgKgCQhHAFgwA0QgxA0AABGQAABKA1A2QA1A0BJAAQBGAAA0guQAzgvAHhEIABAAQACgOALgJQAMgKAPAAQAQAAALAKQALAJADAOIACAAQgHBnhMBHQhMBIhpAAQhsgBhNhNg");
	this.shape.setTransform(26.4,26.5);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(16).to({_off:false},0).wait(39));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303091").s().p("Ai2C3QhLhMAAhrQAAhqBLhMQBMhLBqAAQBrAABMBLQBLBMAABqQAABrhLBMQhMBLhrAAQhqAAhMhLgAiDiDQg3A2AABNQAABOA3A2QA2A3BNAAQBNAAA3g3QA3g2AAhOQAAhNg3g2Qg3g3hNAAQhNAAg2A3g");
	this.shape_1.setTransform(25.8,27.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.3,51.7,51.6);


(lib.mcdotsholder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.reload = function() {
		
		function getRandomizer(bottom, top) {
		
		        return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
		
		}
		
		
		var rnd = getRandomizer(1,5);
		
		this.gotoAndStop(rnd);
		
		
		 var sc = 0.15 + (Math.random()*0.4);
		
		this.scaleX = this.scaleY = sc;
		
		
			
		}.bind(this);
		
		this.reload();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F86275").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape.setTransform(6.5,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#13A4C3").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(6.5,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2865B9").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_2.setTransform(6.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.mcdot2glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,11.9).s().p("AhSBTQgigjAAgwQAAgvAigjQAjgiAvAAQAwAAAjAiQAiAjAAAvQAAAwgiAjQgjAigwAAQgvAAgjgig");
	this.shape.setTransform(11.7,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcdot2glow, new cjs.Rectangle(0,0,23.4,23.4), null);


(lib._MC_DUMMY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib._MC_DUMMY, null, null);


(lib.monitor04copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.monitor0406();
	this.instance.parent = this;
	this.instance.setTransform(89.4,-4.1,1,1,0,0,0,8,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37C1C7").s().p("AkUANQElgEEEg3IAAAjQkFA3kkADg");
	this.shape.setTransform(27.8,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));

	// Layer 3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.4,26.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,70,248,0.988)","rgba(0,70,248,0)","rgba(248,98,117,0.988)"],[0,0,1],-161.6,-43.1,33,16.4).s().p("AkIAoQEggeDhhSIAQAfQjoBUklAeg");
	this.shape_1.setTransform(51.7,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(130));

	// Layer 1
	this.instance_2 = new lib.monitor0403();
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.9,35.5,1,1,0,0,0,18.8,3);

	this.instance_3 = new lib.monitor04a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6,29.4,1,1,0,0,0,6,1.9);

	this.instance_4 = new lib.monitor0402();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.9,13.7,1,1,0,0,0,10.8,2.2);

	this.instance_5 = new lib.monitor0405();
	this.instance_5.parent = this;
	this.instance_5.setTransform(48.1,32.6,1,1,0,0,0,7.2,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,70,248,0.988)","rgba(0,70,248,0)","rgba(248,98,117,0.988)"],[0,0,1],-116,-65.2,78.6,-5.7).s().p("Ag8gOQA2AABAgEIACAhQg7ADg9ABg");
	this.shape_2.setTransform(6.1,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#37C1C7").s().p("AjGAJQDSgMC7gnIAAAjQi9AljPANg");
	this.shape_3.setTransform(35.4,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.8,97.3,47.4);


(lib.monitor02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:36});

	// Layer 2
	this.instance = new lib.monitor0205();
	this.instance.parent = this;
	this.instance.setTransform(23.8,15.6,1,1,0,0,0,3.9,7.9);

	this.instance_1 = new lib.monitor0204();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18.1,26.6,1,1,0,0,0,3.5,3.3);

	this.instance_2 = new lib.monitor0203();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.2,8,1,1,0,0,0,2.1,4);

	this.instance_3 = new lib.monitor0202();
	this.instance_3.parent = this;
	this.instance_3.setTransform(13.3,18.9,1,1,0,0,0,5.8,6.7);

	this.instance_4 = new lib.monitor0201();
	this.instance_4.parent = this;
	this.instance_4.setTransform(7.5,10.5,1,1,0,0,0,7.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(146));

	// monitor-02-06
	this.instance_5 = new lib.monitor0206();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27.7,22.9,1,1,0,0,0,6.1,11.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({alpha:1},10).wait(75).to({alpha:0},35).to({alpha:1},9).to({alpha:0},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.8,34.4);


(lib.monitor01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":41});

	// monitor-01-03
	this.instance = new lib.monitor0103();
	this.instance.parent = this;
	this.instance.setTransform(26.9,12.5,1,1,0,0,0,18,5.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(84).to({alpha:0},8).to({alpha:1},9).wait(71).to({alpha:0},12).wait(1));

	// monitor-01-06
	this.instance_1 = new lib.monitor0106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(34.8,30.4,1,1,0,0,0,6.9,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(195));

	// monitor-01-05
	this.instance_2 = new lib.monitor0105();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.9,25.2,1,1,0,0,0,12.9,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(195));

	// monitor-01-04
	this.instance_3 = new lib.monitor0104();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.9,19.7,1,1,0,0,0,19.4,6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(195));

	// monitor-01-02
	this.instance_4 = new lib.monitor0102();
	this.instance_4.parent = this;
	this.instance_4.setTransform(41,8.3,1,1,0,0,0,5.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195));

	// monitor-01-01
	this.instance_5 = new lib.monitor0101();
	this.instance_5.parent = this;
	this.instance_5.setTransform(23.2,4.1,1,1,0,0,0,9.9,4.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(195));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.6,33.3);


(lib.mldotsHOLDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.rangeArr = [30, 40, 60, 70, 50, 90, 35, 80, 60, 55];
		this.alfaStepArr = [1, 2, 3, 4, 3, 2, 5, 1, 2, 3];
		this.alfaArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		
		this.stepUpArr = [-1, -2, -3, -4, -2, -3, -1, -4, -2, -3, -4];
		
		this.alfa = 0;
		
		
		this.randomIt = function(what) {
			
			this.stepUpArr[what] = -1 - (Math.random()*1.5);
			
			this.rangeArr[what] = Math.round ( Math.random()*90 );
			
			this.alfaArr[what] =  Math.round ( Math.random()*360 );
			
		}.bind(this);
		
		
		for (var i=0; i<=9; i++) {
			
			/*
			this.stepUpArr[i] = -1 - (Math.random()*4);	
			this.rangeArr[i] = Math.round ( Math.random()*90 );	
			this.alfaArr[i] =  Math.round ( Math.random()*90 );
			*/
			
			this.randomIt(i);
		
			/*
			this.stepUpArr[i] = this.random
			this.rangeArr[i] = Math.round ( Math.random()*90 );	
			this.alfaArr[i] =  Math.round ( Math.random()*90 );
			*/
			
		}
	}
	this.frame_1 = function() {
		for (var i=0; i<=9; i++) {
			
			var rf = this["d"+i];
		
			if (i%2) {
		
				var px = Math.sin(Math.PI*this.alfaArr[i]/180)*40;//this.rangeArr[i];//30;
				
			} else {
				
				var px = Math.cos(Math.PI*this.alfaArr[i]/180)*40;//this.rangeArr[i];//*30;
				
			}
			
			
			rf.x = px;// + this.alfaArr[i];
			
		
			this.alfaArr[i] = this.alfaArr[i] + this.alfaStepArr[i];
			
			
			rf.y = rf.y + this.stepUpArr[i];
			
			if (rf.y<-200) {
		
				var ratio = Math.abs(rf.y + 200);
				ratio = ratio/100;
				
				rf.alpha = 1-ratio;
				
				if (i%2) {
				rf.x+=(140*ratio)*ratio;
				} else {
				rf.x-=(140*ratio)*ratio;	
				}
				
			}
			
			if (rf.y<-300) {
				
				rf.y = 0;
				rf.x = 0;
				rf.alpha = 1;
				
				this.alfaArr[i] = 0;
				
				this.randomIt(i);
				
				rf.reload();
				
			}
			
			////////////////////////////////
			
			
			if (rf.y<-100) {
		
				var ratio = Math.abs(rf.y + 100);
				ratio = ratio/100;
				
				var maxsp = 30*(ratio*1.5);//(10*ratio)*ratio;
				
				if (i%2) {
				rf.x+= maxsp; //(50*ratio)*ratio;
				} else {
				rf.x-= maxsp; //(50*ratio)*ratio;	
				}
				
			}
				
			
			
			
		}
	}
	this.frame_2 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(5));

	// d2 copy 7
	this.d9 = new lib.mcdotsholder();
	this.d9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.d9).wait(7));

	// d2 copy 6
	this.d8 = new lib.mcdotsholder();
	this.d8.parent = this;
	this.d8.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d8).wait(7));

	// d2 copy 5
	this.d7 = new lib.mcdotsholder();
	this.d7.parent = this;
	this.d7.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d7).wait(7));

	// d2 copy 4
	this.d6 = new lib.mcdotsholder();
	this.d6.parent = this;
	this.d6.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d6).wait(7));

	// d2 copy 3
	this.d5 = new lib.mcdotsholder();
	this.d5.parent = this;
	this.d5.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d5).wait(7));

	// d2 copy 2
	this.d4 = new lib.mcdotsholder();
	this.d4.parent = this;
	this.d4.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d4).wait(7));

	// d2 copy
	this.d3 = new lib.mcdotsholder();
	this.d3.parent = this;
	this.d3.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d3).wait(7));

	// d2
	this.d2 = new lib.mcdotsholder();
	this.d2.parent = this;
	this.d2.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d2).wait(7));

	// d1
	this.d1 = new lib.mcdotsholder();
	this.d1.parent = this;
	this.d1.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d1).wait(7));

	// d0
	this.d0 = new lib.mcdotsholder();
	this.d0.parent = this;
	this.d0.setTransform(6.5,6.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.d0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-401,14,414);


(lib.mldotTEXTS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		
		
		if (window.txtCount == undefined) window.txtCount = 0;
		
		window.txtCount++;
		if (window.txtCount==4) window.txtCount = 1
		
		
		
			if (window.heroTextAlign=="L") {
		
				this.gotoAndStop(window.txtCount);
				
			} else {
		
				this.gotoAndStop(window.txtCount+3);
				
			}
		
		
		
		this.stop();
		
		*/
		
		
		
		if (window.txtCount == undefined) window.txtCount = 0;
		
		window.txtCount++;
		if (window.txtCount==4) window.txtCount = 1
		
		
		
		
			this.mcContent.removeAllChildren();
		
		
			var txt = new createjs.Text();
			txt.lineWidth = 160;
			txt.color = "#ffffff"; //"#00b4ff";	
			txt.textBaseline = "top";
			txt.alpha = 0.8;
		
			if (window.heroTextAlign=="R") {
				
			txt.textAlign = "right"; // center	
			txt.x = 160;
				
			} else {
				
			txt.textAlign = "left"; // center	
				
				txt.x = 5;
				
			}
			
			txt.font = "800 12px brandon-grotesque";
			txt.lineHeight = 17;
			
			var tx = "";
			
			switch(window.txtCount) {
				case 1:
					tx = window.heroAnimation_text1;
					break;
				case 2:
					tx = window.heroAnimation_text2;
					break;
				case 3:
					tx = window.heroAnimation_text3;
					break;
			}	
			
			txt.text = tx;
			
			this.mcContent.addChild(txt);
			
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// Layer 3
	this.mcContent = new lib._MC_DUMMY();
	this.mcContent.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcContent).to({_off:true},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mldocbody2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhRAkQgEgBgCgCQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIAEgDQAHgDAKAAQAJgBAIADQAHACAAAEQABAEgGADQgHADgJAAIgEABQgIAAgFgDgAgzALIARgHIAKgCIALgCIAfAAIAPgBQAHgBAGgDQAIgDAAgFQAAgEgKgEQgFgCgGAAQgFgBgHAAIgLACIgJADIgYgLQALgEAMgCIAXgCQALAAAMACIAWAFQAJAEAGAEQAGAEABAFQACAFgEAEQgDAEgKAEIgNAFIgNACIgPABIgmACIgIACIgIADIgFADg");
	this.shape.setTransform(32.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// Layer 7
	this.instance = new lib.mldocbody2fill("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.7,38.4,1,1,0,0,0,102.7,38.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},59).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,180,255,0.451)").s().p("Ak/AeIFeiiIEhBnIldCig");
	this.shape_1.setTransform(32,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.5,27);


(lib.mldocbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.mldocbodcheck("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(28,18.1,1,1,0,0,0,9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 1
	this.instance_1 = new lib.ml_doc_body();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64,27);


(lib.mlchairmanHOLDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chair element
	this.instance = new lib.mlcharelement();
	this.instance.parent = this;
	this.instance.setTransform(52,33,1,1,0,0,0,14,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:14.1,rotation:-8,x:46.5,y:33.5},19,cjs.Ease.get(1)).wait(10).to({regX:14,rotation:0,x:52,y:33},19).wait(14));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AAlFiQAEg3gCgaQgEhLgmgjIgRgOQgJgIgGgDIgNgFIgMgFQgRgHAAgNQAAgFgBgBIAAgCQABgIgDgUQgEgTAEgKIAFgPQACgIgBgKQgBgmAHg7IAKhhIAEg0QADhGABgvIIiAAIAALDg");
	var mask_graphics_1 = new cjs.Graphics().p("AAjFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_2 = new cjs.Graphics().p("AAhFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_3 = new cjs.Graphics().p("AAeFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_4 = new cjs.Graphics().p("AAdFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_5 = new cjs.Graphics().p("AAbFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_6 = new cjs.Graphics().p("AAZFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_7 = new cjs.Graphics().p("AAXFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_8 = new cjs.Graphics().p("AAWFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_9 = new cjs.Graphics().p("AAVFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_10 = new cjs.Graphics().p("AAUFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_11 = new cjs.Graphics().p("AASFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_12 = new cjs.Graphics().p("AASFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_13 = new cjs.Graphics().p("AARFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_14 = new cjs.Graphics().p("AAQFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_15 = new cjs.Graphics().p("AAPFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIAEg0QADhGAAgvIIiAAIAALDg");
	var mask_graphics_16 = new cjs.Graphics().p("AAPFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_17 = new cjs.Graphics().p("AAPFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_18 = new cjs.Graphics().p("AAPFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_19 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_20 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_21 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_22 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_23 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_24 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_25 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_26 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_27 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_28 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_29 = new cjs.Graphics().p("AAOFiQAFg3gCgaQgEhLgmgjIgRgOQgKgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAGgPQACgIgBgKQgCgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_30 = new cjs.Graphics().p("AAQFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_31 = new cjs.Graphics().p("AARFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_32 = new cjs.Graphics().p("AASFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_33 = new cjs.Graphics().p("AATFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_34 = new cjs.Graphics().p("AAUFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_35 = new cjs.Graphics().p("AAWFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_36 = new cjs.Graphics().p("AAXFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_37 = new cjs.Graphics().p("AAYFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_38 = new cjs.Graphics().p("AAZFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_39 = new cjs.Graphics().p("AAaFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_40 = new cjs.Graphics().p("AAcFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_41 = new cjs.Graphics().p("AAdFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_42 = new cjs.Graphics().p("AAeFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_43 = new cjs.Graphics().p("AAfFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_44 = new cjs.Graphics().p("AAgFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_45 = new cjs.Graphics().p("AAhFiQAEg3gBgaQgFhLgmgjIgRgOQgJgIgGgDIgMgFIgNgFQgQgHAAgNQAAgFgCgBIAAgCQABgIgDgUQgDgTADgKIAFgPQACgIgBgKQgBgmAHg7IALhhIADg0QAEhGAAgvIIiAAIAALDg");
	var mask_graphics_46 = new cjs.Graphics().p("AAjFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_47 = new cjs.Graphics().p("AAkFiQAEg3gCgaQgEhLgmgjIgRgOQgKgIgFgDIgNgFIgMgFQgRgHAAgNQAAgFgCgBIABgCQABgIgEgUQgDgTADgKIAGgPQACgIgBgKQgBgmAGg7IALhhIAEg0QADhGAAgvIIjAAIAALDg");
	var mask_graphics_48 = new cjs.Graphics().p("AAlFiQAEg3gCgaQgEhLgmgjIgRgOQgJgIgGgDIgNgFIgMgFQgRgHAAgNQAAgFgBgBIAAgCQABgIgDgUQgEgTAEgKIAFgPQACgIgBgKQgBgmAHg7IAKhhIAEg0QADhGABgvIIiAAIAALDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:49.6,y:17.8}).wait(1).to({graphics:mask_graphics_1,x:49.4,y:18}).wait(1).to({graphics:mask_graphics_2,x:49.2,y:18.2}).wait(1).to({graphics:mask_graphics_3,x:48.9,y:18.4}).wait(1).to({graphics:mask_graphics_4,x:48.8,y:18.6}).wait(1).to({graphics:mask_graphics_5,x:48.6,y:18.7}).wait(1).to({graphics:mask_graphics_6,x:48.4,y:18.9}).wait(1).to({graphics:mask_graphics_7,x:48.2,y:19}).wait(1).to({graphics:mask_graphics_8,x:48.1,y:19.2}).wait(1).to({graphics:mask_graphics_9,x:48,y:19.3}).wait(1).to({graphics:mask_graphics_10,x:47.9,y:19.4}).wait(1).to({graphics:mask_graphics_11,x:47.7,y:19.5}).wait(1).to({graphics:mask_graphics_12,x:47.7,y:19.6}).wait(1).to({graphics:mask_graphics_13,x:47.6,y:19.6}).wait(1).to({graphics:mask_graphics_14,x:47.5,y:19.7}).wait(1).to({graphics:mask_graphics_15,x:47.4,y:19.7}).wait(1).to({graphics:mask_graphics_16,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_17,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_18,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_19,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_20,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_21,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_22,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_23,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_24,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_25,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_26,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_27,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_28,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_29,x:47.4,y:19.8}).wait(1).to({graphics:mask_graphics_30,x:47.5,y:19.7}).wait(1).to({graphics:mask_graphics_31,x:47.6,y:19.6}).wait(1).to({graphics:mask_graphics_32,x:47.7,y:19.5}).wait(1).to({graphics:mask_graphics_33,x:47.8,y:19.4}).wait(1).to({graphics:mask_graphics_34,x:47.9,y:19.3}).wait(1).to({graphics:mask_graphics_35,x:48.1,y:19.2}).wait(1).to({graphics:mask_graphics_36,x:48.2,y:19.1}).wait(1).to({graphics:mask_graphics_37,x:48.3,y:19}).wait(1).to({graphics:mask_graphics_38,x:48.4,y:18.9}).wait(1).to({graphics:mask_graphics_39,x:48.5,y:18.8}).wait(1).to({graphics:mask_graphics_40,x:48.7,y:18.7}).wait(1).to({graphics:mask_graphics_41,x:48.8,y:18.6}).wait(1).to({graphics:mask_graphics_42,x:48.9,y:18.5}).wait(1).to({graphics:mask_graphics_43,x:49,y:18.4}).wait(1).to({graphics:mask_graphics_44,x:49.1,y:18.2}).wait(1).to({graphics:mask_graphics_45,x:49.2,y:18.1}).wait(1).to({graphics:mask_graphics_46,x:49.4,y:18}).wait(1).to({graphics:mask_graphics_47,x:49.5,y:17.9}).wait(1).to({graphics:mask_graphics_48,x:49.6,y:17.8}).wait(14));

	// legs
	this.instance_1 = new lib.mlchairlegs();
	this.instance_1.parent = this;
	this.instance_1.setTransform(63,16.8,1,1,0,0,0,26,30.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:58.5,y:18.8},19,cjs.Ease.get(1)).wait(10).to({x:63,y:16.8},19).wait(14));

	// chair man
	this.instance_2 = new lib.mlchairman();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.8,66.3,1,1,0,0,0,55.8,66.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7,x:55.9},19,cjs.Ease.get(1)).wait(10).to({rotation:0,x:55.8},19).wait(14));

	// shadow
	this.instance_3 = new lib.mlchairshadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(43,63.8,1,1,0,0,0,34.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:40,y:65.8},19,cjs.Ease.get(1)).wait(10).to({x:43,y:63.8},19).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13.5,89,92);


(lib.mlbeamsingle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer 1
	this.instance = new lib.mlbeamsingleel();
	this.instance.parent = this;
	this.instance.setTransform(1.3,28.5,1,1,0,0,0,1.3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.5,57);


(lib.mlbeamlinesANIM_V2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.bb.gotoAndStop(0);
	}
	this.frame_24 = function() {
		this.bb.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(23).call(this.frame_24).wait(26));

	// Layer 1
	this.bb = new lib.mlbeamsingle();
	this.bb.parent = this;
	this.bb.setTransform(1.3,242,1,1,0,0,0,1.3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.bb).to({y:28.5},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,213.5,2.5,57);


(lib.mlbeamlinesANIM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.bb.gotoAndStop(0);
	}
	this.frame_43 = function() {
		this.bb.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(42).call(this.frame_43).wait(27));

	// Layer 1
	this.bb = new lib.mlbeamsingle();
	this.bb.parent = this;
	this.bb.setTransform(1.3,242,1,1,0,0,0,1.3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.bb).to({y:28.5},69).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,213.5,2.5,57);


(lib.mcmonitorcircleholder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mcmonitorcircl2();
	this.instance.parent = this;
	this.instance.setTransform(26.4,26.5,0.189,0.189,0,0,0,26.4,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:26.4,alpha:1},19,cjs.Ease.get(1)).wait(93).to({regX:26.3,scaleX:1.21,scaleY:1.21,y:26.5,alpha:0},11,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mcdotstexts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.pauze = function(czas) {
			this.stop();
			setTimeout(this.contPlay.bind(this), czas);	
		}
		
		this.pauze2 = function(czas,_what) {
			_what.stop();
			setTimeout(this.contPlay.bind(_what), czas);	
		}
		
		this.pauzeFrames = function(frames) {	
			this.stop();
			var tar = this;
			createjs.Tween.get(tar, { useTicks:true }).to({ }, frames, createjs.Ease.linear).call(this.contPlay.bind(this));;	
		}
		
		this.pauzeFrames2 = function(frames,_what) {	
			_what.stop();
			var tar = _what;
			createjs.Tween.get(tar, { useTicks:true }).to({ }, frames, createjs.Ease.linear).call(this.contPlay.bind(_what));;	
		}
		
		this.contPlay = function() { this.play(); }
		//console.log(this.mcContent.numChildren);
		
			if (this.parent.switchCount == undefined) this.parent.switchCount = 0;
			
			var dot;
			
			if (this.parent.switchCount %2) {
		
				window.heroTextAlign = "L";
				dot = new lib.desc2();
				
			} else {
				
				window.heroTextAlign = "R";
				dot = new lib.desc1();
			}
		
			this.parent.switchCount++;
			
			this.mcContent.addChild(dot);
		
			
			this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.mcContent = new lib._MC_DUMMY();
	this.mcContent.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcContent).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.2,328.2,7.9,7.9);


(lib.mcdot2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mcdot2glow();
	this.instance.parent = this;
	this.instance.setTransform(7,7,0.333,0.333,0,0,0,11.7,11.7);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:0.9},19,cjs.Ease.get(1)).to({scaleX:0.8,scaleY:0.8,x:6.9,y:6.9},5,cjs.Ease.get(-1)).to({scaleX:0.33,scaleY:0.33,x:7,y:7},20,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AgbAbQgLgLAAgQQAAgPALgMQAMgLAPAAQAQAAALALQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgMgMg");
	this.shape.setTransform(6.9,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,3,7.9,7.9);


(lib.mlmachine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// monitor left circle
	this.instance = new lib.monitor01copy();
	this.instance.parent = this;
	this.instance.setTransform(82.4,112.9,1,1,0,0,0,23.3,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// circle monitor
	this.instance_1 = new lib.mcmonitorcircleholder();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.1,119.8,0.5,0.5,0,0,0,26.4,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// monitor right circle
	this.instance_2 = new lib.monitor04copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(194,114.3,1,1,0,0,0,39.1,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// top left monitor
	this.instance_3 = new lib.monitor03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(20,75.6,1,1,0,0,0,14.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// right monitor
	this.instance_4 = new lib.monitor02();
	this.instance_4.parent = this;
	this.instance_4.setTransform(279.7,75.9,1,1,0,0,0,16.9,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer 2
	this.instance_5 = new lib.ml_mach_body();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlmachine, new cjs.Rectangle(0,0,312.3,178), null);


(lib.mlDOCSanim_v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":3});

	// timeline functions:
	this.frame_51 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// Layer 2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg0pAg0IAA5cQDqAREtACIG3AEQD6AEC7APQA/AEEWAeQDSAWCDAFQBPADCAAAQCfAAAwABQA/ABCTAHQCGAFBLABQCKABD8gNICegHIgEgMIASAAIAQkSQAxgHAvgRQBqglBngtQBLggBDgvIAMgJIALACQAYAGAtAMIApAIQAXAGAQAGQAXAJAfAXQApAgALAGIAXAOIAWgiQATggAJgdIAIgkQAFgXAFgNQAHgSANgZIAYgqQAbg2gMgoQgDgKgIgNIgNgXQgZgygPgXQgRgXgTgNIgBgDQgEgKgIgGQhnhRhQgwQhohBhigfQgYgIgzgOQgzgNgagKQgagJg5gYQg2gWgdgKQg1gRhdgRQhtgTglgKQgzgNhygpQhqgng8gNIhhgRQg5gLgkgSIglgUQgXgNgPgGQgxgUghASQgHAEgBAEIAAAFIjzBHQh+Akg8AbQhjAqiJBfQjHCKgbARQhxBBg2AkQhaBAgsBFIgcAzQgQAegPARQgTAVgyAiQhsBKhCBDIggAfQgSASgPAKQgbARg5AVQlIBxkqA2QiiAdiaANMAAAgmvMBpTAAAMAAABBngAMrExIACgCIgDgCIABAEg");
	mask.setTransform(312,92);

	// ml-doc-body
	this.r0 = new lib.mldocbody();
	this.r0.parent = this;
	this.r0.setTransform(330,114,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.r0];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.r0).wait(3).to({x:370,y:129},20).wait(29));

	// ml-doc-body
	this.r1 = new lib.mldocbody();
	this.r1.parent = this;
	this.r1.setTransform(370,129,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.r1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.r1).wait(3).to({x:410,y:146},20).wait(29));

	// ml-doc-body
	this.instance = new lib.mldocbody();
	this.instance.parent = this;
	this.instance.setTransform(410,146,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:458,y:162},20).wait(29));

	// ml-doc-body
	this.instance_1 = new lib.mldocbody();
	this.instance_1.parent = this;
	this.instance_1.setTransform(458,162,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:504,y:178},20).wait(29));

	// ml-doc-body
	this.instance_2 = new lib.mldocbody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(504,178,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({x:551.5,y:196,alpha:0},20).wait(29));

	// Layer 27 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A1UNKIAAqJIA7gJIgFgJIgHgNQBPgBBPgHQCngMCmgdQBcgRBZgaQAtgOAsgRQAjgEAhgPQAQgHAcgRIAFAAQALAAAOgKIAYgOIAUgIQAOgHAZgRIAcgMQAOgHASgOIAKgDQAWgJAXgSQAOgMAagZIALgMIACgFQAcgZAWgeQAog1Ajg4IhLiGQA1g/ArhHIAbgwIAGABQA1AFAoAVQA1hpAzhrISsAAIAAHWMgmFAS+gA2AACIAOgBIAAAXIgOgWg");
	mask_1.setTransform(407,167.7);

	// ml-doc-body copy
	this.r1_1 = new lib.mldocshadow();
	this.r1_1.parent = this;
	this.r1_1.setTransform(370,159,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.r1_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.r1_1).wait(3).to({x:410,y:176},20).wait(29));

	// ml-doc-body copy 2
	this.instance_3 = new lib.mldocshadow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(410,176,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({x:458,y:192},20).wait(29));

	// ml-doc-body copy 3
	this.instance_4 = new lib.mldocshadow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(458,192,1,1,0,0,0,64,27);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({x:504,y:208},20).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266,87,238,108.5);


(lib.mlDOCSanim_v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":3});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay("loop");
		//this.parent.pauzeFrames2(24, this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(21));

	// Layer 2 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg0pAg0IAA5cQDqAREtACIG3AEQD6AEC7APQA/AEEWAeQDSAWCDAFQBPADCAAAQCfAAAwABQA/ABCTAHQCGAFBLABQCKABD8gNICegHIgEgMIASAAIAQkSQAxgHAvgRQBqglBngtQBLggBDgvIAMgJIALACQAYAGAtAMIApAIQAXAGAQAGQAXAJAfAXQApAgALAGIAXAOIAWgiQATggAJgdIAIgkQAFgXAFgNQAHgSANgZIAYgqQAbg2gMgoQgDgKgIgNIgNgXQgZgygPgXQgRgXgTgNIgBgDQgEgKgIgGQhnhRhQgwQhohBhigfQgYgIgzgOQgzgNgagKQgagJg5gYQg2gWgdgKQg1gRhdgRQhtgTglgKQgzgNhygpQhqgng8gNIhhgRQg5gLgkgSIglgUQgXgNgPgGQgxgUghASQgHAEgBAEIAAAFIjzBHQh+Akg8AbQhjAqiJBfQjHCKgbARQhxBBg2AkQhaBAgsBFIgcAzQgQAegPARQgTAVgyAiQhsBKhCBDIggAfQgSASgPAKQgbARg5AVQlIBxkqA2QiiAdiaANMAAAgmvMBpTAAAMAAABBngAMrExIACgCIgDgCIABAEg");
	mask.setTransform(312,92);

	// Layer 11
	this.l0 = new lib.mldocbody2();
	this.l0.parent = this;
	this.l0.setTransform(-11.7,-3.5,1,1,0,0,0,32.3,13.5);
	this.l0.alpha = 0;

	var maskedShapeInstanceList = [this.l0];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.l0).wait(3).to({x:32.3,y:13.5,alpha:0.301},20).wait(21));

	// ml-doc-body-2
	this.l1 = new lib.mldocbody2();
	this.l1.parent = this;
	this.l1.setTransform(32.3,13.5,1,1,0,0,0,32.3,13.5);
	this.l1.alpha = 0.301;

	var maskedShapeInstanceList = [this.l1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(3).to({x:81.3,y:31.5,alpha:0.602},20).wait(21));

	// ml-doc-body-2
	this.l2 = new lib.mldocbody2();
	this.l2.parent = this;
	this.l2.setTransform(81.3,31.5,1,1,0,0,0,32.3,13.5);
	this.l2.alpha = 0.602;

	var maskedShapeInstanceList = [this.l2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(3).to({x:127.3,y:47.5,alpha:1},20).wait(21));

	// ml-doc-body-2
	this.l3 = new lib.mldocbody2();
	this.l3.parent = this;
	this.l3.setTransform(127.3,47.5,1,1,0,0,0,32.3,13.5);

	var maskedShapeInstanceList = [this.l3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.l3).wait(3).to({x:177.3,y:67.5},20).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-17,184,77.6);


(lib.mlbeamlinesANIMwrap_V2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_70 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(64));

	// Layer 1 copy 3
	this.instance = new lib.mlbeamlinesANIM_V2();
	this.instance.parent = this;
	this.instance.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).wait(60));

	// Layer 1 copy 2
	this.instance_1 = new lib.mlbeamlinesANIM_V2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(85));

	// Layer 1 copy
	this.instance_2 = new lib.mlbeamlinesANIM_V2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(110));

	// Layer 1
	this.instance_3 = new lib.mlbeamlinesANIM_V2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,243.5,2.5,57);


(lib.mlbeamlinesANIMwrap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(40));

	// Layer 1 copy 3
	this.instance = new lib.mlbeamlinesANIM();
	this.instance.parent = this;
	this.instance.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({_off:false},0).wait(30));

	// Layer 1 copy 2
	this.instance_1 = new lib.mlbeamlinesANIM();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).wait(65));

	// Layer 1 copy
	this.instance_2 = new lib.mlbeamlinesANIM();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).wait(100));

	// Layer 1
	this.instance_3 = new lib.mlbeamlinesANIM();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.3,58.5,1,1,0,0,0,1.3,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,243.5,2.5,57);


(lib.desc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.parent.parent.play();
		
		this.parent.parent.pauzeFrames2(48+24,this);
	}
	this.frame_112 = function() {
		this.parent.removeChild(this);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(9).call(this.frame_112).wait(1));

	// Layer 4
	this.instance = new lib.mldotTEXTS();
	this.instance.parent = this;
	this.instance.setTransform(426.5,98.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({alpha:1},8).to({alpha:0},8).wait(2));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("AbEMtIAAkTIEdAAIAAETg");
	var mask_graphics_88 = new cjs.Graphics().p("AbSMfIAAkTIEdAAIAAETg");
	var mask_graphics_89 = new cjs.Graphics().p("AbgMSIAAkTIEdAAIAAETg");
	var mask_graphics_90 = new cjs.Graphics().p("AbtMGIAAkTIEdAAIAAETg");
	var mask_graphics_91 = new cjs.Graphics().p("Ab4L8IAAkUIEdAAIAAEUg");
	var mask_graphics_92 = new cjs.Graphics().p("AcDLxIAAkTIEdAAIAAETg");
	var mask_graphics_93 = new cjs.Graphics().p("AcNLoIAAkTIEdAAIAAETg");
	var mask_graphics_94 = new cjs.Graphics().p("AcWLgIAAkTIEdAAIAAETg");
	var mask_graphics_95 = new cjs.Graphics().p("AceLZIAAkUIEdAAIAAEUg");
	var mask_graphics_96 = new cjs.Graphics().p("AclLSIAAkTIEdAAIAAETg");
	var mask_graphics_97 = new cjs.Graphics().p("AcrLMIAAkTIEdAAIAAETg");
	var mask_graphics_98 = new cjs.Graphics().p("AcwLHIAAkTIEdAAIAAETg");
	var mask_graphics_99 = new cjs.Graphics().p("Ac1LDIAAkSIEdAAIAAESg");
	var mask_graphics_100 = new cjs.Graphics().p("Ac4LAIAAkTIEdAAIAAETg");
	var mask_graphics_101 = new cjs.Graphics().p("Ac6K+IAAkTIEdAAIAAETg");
	var mask_graphics_102 = new cjs.Graphics().p("Ac8K9IAAkTIEdAAIAAETg");
	var mask_graphics_103 = new cjs.Graphics().p("Ac8K9IAAkUIEdAAIAAEUg");
	var mask_graphics_104 = new cjs.Graphics().p("ActLLIAAkUIEdAAIAAEUg");
	var mask_graphics_105 = new cjs.Graphics().p("AceLZIAAkUIEdAAIAAEUg");
	var mask_graphics_106 = new cjs.Graphics().p("AcPLnIAAkUIEdAAIAAEUg");
	var mask_graphics_107 = new cjs.Graphics().p("AcAL0IAAkSIEdAAIAAESg");
	var mask_graphics_108 = new cjs.Graphics().p("AbxMCIAAkSIEdAAIAAESg");
	var mask_graphics_109 = new cjs.Graphics().p("AbiMQIAAkSIEdAAIAAESg");
	var mask_graphics_110 = new cjs.Graphics().p("AbTMeIAAkSIEdAAIAAESg");
	var mask_graphics_111 = new cjs.Graphics().p("AbEMtIAAkTIEdAAIAAETg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:201.7,y:81.3}).wait(1).to({graphics:mask_graphics_88,x:203.1,y:79.9}).wait(1).to({graphics:mask_graphics_89,x:204.5,y:78.6}).wait(1).to({graphics:mask_graphics_90,x:205.8,y:77.4}).wait(1).to({graphics:mask_graphics_91,x:206.9,y:76.4}).wait(1).to({graphics:mask_graphics_92,x:208,y:75.3}).wait(1).to({graphics:mask_graphics_93,x:209,y:74.4}).wait(1).to({graphics:mask_graphics_94,x:209.9,y:73.6}).wait(1).to({graphics:mask_graphics_95,x:210.7,y:72.9}).wait(1).to({graphics:mask_graphics_96,x:211.4,y:72.2}).wait(1).to({graphics:mask_graphics_97,x:212,y:71.6}).wait(1).to({graphics:mask_graphics_98,x:212.5,y:71.1}).wait(1).to({graphics:mask_graphics_99,x:213,y:70.8}).wait(1).to({graphics:mask_graphics_100,x:213.3,y:70.4}).wait(1).to({graphics:mask_graphics_101,x:213.5,y:70.2}).wait(1).to({graphics:mask_graphics_102,x:213.7,y:70.1}).wait(1).to({graphics:mask_graphics_103,x:213.7,y:70.1}).wait(1).to({graphics:mask_graphics_104,x:212.2,y:71.5}).wait(1).to({graphics:mask_graphics_105,x:210.7,y:72.9}).wait(1).to({graphics:mask_graphics_106,x:209.2,y:74.3}).wait(1).to({graphics:mask_graphics_107,x:207.7,y:75.7}).wait(1).to({graphics:mask_graphics_108,x:206.2,y:77.1}).wait(1).to({graphics:mask_graphics_109,x:204.7,y:78.5}).wait(1).to({graphics:mask_graphics_110,x:203.2,y:79.9}).wait(1).to({graphics:mask_graphics_111,x:201.7,y:81.3}).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("ABNhEIiZCJ");
	this.shape.setTransform(413.4,127.1);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(87).to({_off:false},0).wait(26));

	// Layer 1
	this.instance_1 = new lib.mcdot2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(323.7,300.5,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[323.8,300.5,326.3,291.6,325.2,279,324.1,268.4,318.7,245.4,313.3,222.4,312.3,211.9,310.6,194.2,316.1,183.8,321.6,173.3,337.1,164.7,338.7,163.8,340.6,162.8]}},42).to({guide:{path:[340.7,162.9,350.2,158.1,368.5,151.1,390.5,142.5,399.8,137.3,401.2,136.6,402.5,135.8]}},45,cjs.Ease.get(1)).wait(16).to({alpha:0},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320.2,297,7.9,7.9);


(lib.desc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.parent.parent.play();
		
		this.parent.parent.pauzeFrames2(48+24,this);
	}
	this.frame_112 = function() {
		this.parent.removeChild(this);
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(9).call(this.frame_112).wait(1));

	// Layer 4
	this.instance = new lib.mldotTEXTS();
	this.instance.parent = this;
	this.instance.setTransform(14.7,85.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({alpha:1},8).to({alpha:0},8).wait(2));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_87 = new cjs.Graphics().p("ANULlIAAkTIEdAAIAAETg");
	var mask_graphics_88 = new cjs.Graphics().p("ANILZIAAkTIEdAAIAAETg");
	var mask_graphics_89 = new cjs.Graphics().p("AM9LOIAAkTIEdAAIAAETg");
	var mask_graphics_90 = new cjs.Graphics().p("AMyLDIAAkTIEdAAIAAETg");
	var mask_graphics_91 = new cjs.Graphics().p("AMoK6IAAkUIEdAAIAAEUg");
	var mask_graphics_92 = new cjs.Graphics().p("AMfKxIAAkTIEdAAIAAETg");
	var mask_graphics_93 = new cjs.Graphics().p("AMXKoIAAkTIEdAAIAAETg");
	var mask_graphics_94 = new cjs.Graphics().p("AMQKhIAAkTIEdAAIAAETg");
	var mask_graphics_95 = new cjs.Graphics().p("AMJKaIAAkTIEdAAIAAETg");
	var mask_graphics_96 = new cjs.Graphics().p("AMDKUIAAkTIEdAAIAAETg");
	var mask_graphics_97 = new cjs.Graphics().p("AL+KPIAAkTIEdAAIAAETg");
	var mask_graphics_98 = new cjs.Graphics().p("AL6KLIAAkTIEdAAIAAETg");
	var mask_graphics_99 = new cjs.Graphics().p("AL2KIIAAkUIEdAAIAAEUg");
	var mask_graphics_100 = new cjs.Graphics().p("AL0KFIAAkTIEdAAIAAETg");
	var mask_graphics_101 = new cjs.Graphics().p("ALyKDIAAkTIEdAAIAAETg");
	var mask_graphics_102 = new cjs.Graphics().p("ALwKCIAAkTIEdAAIAAETg");
	var mask_graphics_103 = new cjs.Graphics().p("ALwKBIAAkTIEdAAIAAETg");
	var mask_graphics_104 = new cjs.Graphics().p("AL9KOIAAkTIEcAAIAAETg");
	var mask_graphics_105 = new cjs.Graphics().p("AMJKaIAAkTIEdAAIAAETg");
	var mask_graphics_106 = new cjs.Graphics().p("AMVKnIAAkTIEeAAIAAETg");
	var mask_graphics_107 = new cjs.Graphics().p("AMiKzIAAkTIEdAAIAAETg");
	var mask_graphics_108 = new cjs.Graphics().p("AMvLAIAAkTIEcAAIAAETg");
	var mask_graphics_109 = new cjs.Graphics().p("AM7LMIAAkTIEdAAIAAETg");
	var mask_graphics_110 = new cjs.Graphics().p("ANHLZIAAkTIEeAAIAAETg");
	var mask_graphics_111 = new cjs.Graphics().p("ANULlIAAkTIEdAAIAAETg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(87).to({graphics:mask_graphics_87,x:113.7,y:74.1}).wait(1).to({graphics:mask_graphics_88,x:112.5,y:72.9}).wait(1).to({graphics:mask_graphics_89,x:111.4,y:71.8}).wait(1).to({graphics:mask_graphics_90,x:110.3,y:70.7}).wait(1).to({graphics:mask_graphics_91,x:109.3,y:69.8}).wait(1).to({graphics:mask_graphics_92,x:108.4,y:68.9}).wait(1).to({graphics:mask_graphics_93,x:107.6,y:68}).wait(1).to({graphics:mask_graphics_94,x:106.9,y:67.3}).wait(1).to({graphics:mask_graphics_95,x:106.2,y:66.6}).wait(1).to({graphics:mask_graphics_96,x:105.6,y:66}).wait(1).to({graphics:mask_graphics_97,x:105.1,y:65.5}).wait(1).to({graphics:mask_graphics_98,x:104.7,y:65.1}).wait(1).to({graphics:mask_graphics_99,x:104.3,y:64.8}).wait(1).to({graphics:mask_graphics_100,x:104.1,y:64.5}).wait(1).to({graphics:mask_graphics_101,x:103.9,y:64.3}).wait(1).to({graphics:mask_graphics_102,x:103.7,y:64.2}).wait(1).to({graphics:mask_graphics_103,x:103.7,y:64.1}).wait(1).to({graphics:mask_graphics_104,x:105,y:65.4}).wait(1).to({graphics:mask_graphics_105,x:106.2,y:66.6}).wait(1).to({graphics:mask_graphics_106,x:107.5,y:67.9}).wait(1).to({graphics:mask_graphics_107,x:108.7,y:69.1}).wait(1).to({graphics:mask_graphics_108,x:110,y:70.4}).wait(1).to({graphics:mask_graphics_109,x:111.2,y:71.6}).wait(1).to({graphics:mask_graphics_110,x:112.5,y:72.9}).wait(1).to({graphics:mask_graphics_111,x:113.7,y:74.1}).wait(2));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("ABNBFIiZiJ");
	this.shape.setTransform(195.2,112.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(87).to({_off:false},0).wait(26));

	// Layer 1
	this.instance_1 = new lib.mcdot2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(296.7,331.7,1,1,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({guide:{path:[296,331,311.2,317.4,315.1,304.3,319.3,289.6,323.9,266.4,328.4,243.3,325.7,229.6,323,216,317.1,205.7,311.1,195.5,295.3,187.5,285.9,182.7,263.5,175.1,251.8,171,243.6,167.8]}},45).to({guide:{path:[243.6,167.8,236.2,164.8,231.7,162.5,215.9,154.6,210,144.3,205,135.7,204.9,121.7]}},42,cjs.Ease.get(1)).wait(16).to({alpha:0},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293.2,328.2,7.9,7.9);


(lib.mlmachinedatacontent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(56).call(this.frame_56).wait(59));

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqyBFQkUhlgKiOIFzAAQAKBlCnBIQCyBLD6AAQD6AACxhLQCnhIAKhlIF1AAQgLCOkSBlQkgBqmUAAQmUAAkehqg");
	this.shape.setTransform(61.4,251.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},91).wait(24));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("ApxW6MAAAgtzITiAAMAAAAtzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:56,y:115.1}).wait(109));

	// Layer 10 copy 4
	this.instance = new lib.mlbeamlinesANIMwrap();
	this.instance.parent = this;
	this.instance.setTransform(108.3,75.8,1,1,0,0,0,1.3,29.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({_off:true},77).wait(32));

	// Layer 10 copy 3
	this.instance_1 = new lib.mlbeamlinesANIM_V2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.3,75.8,1,1,0,0,0,1.3,29.3);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({_off:true},75).wait(32));

	// Layer 10 copy 2
	this.instance_2 = new lib.mlbeamlinesANIMwrap();
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.3,75.8,1,1,0,0,0,1.3,29.3);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({_off:true},72).wait(32));

	// Layer 10 copy
	this.instance_3 = new lib.mlbeamlinesANIM_V2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(60.3,75.8,1,1,0,0,0,1.3,29.3);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},0).to({_off:true},66).wait(32));

	// Layer 10
	this.instance_4 = new lib.mlbeamlinesANIMwrap();
	this.instance_4.parent = this;
	this.instance_4.setTransform(45.3,75.8,1,1,0,0,0,1.3,29.3);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({_off:true},72).wait(32));

	// Layer 11
	this.instance_5 = new lib.mlbeamlinesANIMwrap_V2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(30.3,65.3,1,1,0,0,0,1.3,29.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({_off:true},75).wait(32));

	// Layer 8
	this.instance_6 = new lib.mlbeamlinesANIMwrap();
	this.instance_6.parent = this;
	this.instance_6.setTransform(12.3,65.3,1,1,0,0,0,1.3,29.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},77).wait(32));

	// ml-beam-lines
	this.instance_7 = new lib.mlbeamlines();
	this.instance_7.parent = this;
	this.instance_7.setTransform(60.3,247.6,1,0.022,0,0,0,49.3,247.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({regY:247.5,scaleY:1,y:247.5,alpha:1},29,cjs.Ease.get(0.99)).wait(77));

	// ml-beam-small
	this.instance_8 = new lib.mlbeamsmall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(59.5,248.1,1,0.04,0,0,0,31,187.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regY:187.5,scaleY:0.52},24,cjs.Ease.get(-1)).to({scaleY:1,y:248},25,cjs.Ease.get(1)).to({_off:true},56).wait(10));

	// ml-beam-big
	this.instance_9 = new lib.mlbeambig();
	this.instance_9.parent = this;
	this.instance_9.setTransform(61,246,1,0.05,0,0,0,61,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleY:0.5,y:256},9,cjs.Ease.get(-1)).to({scaleY:1,y:259},10,cjs.Ease.get(1)).to({_off:true},46).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.3,185.9,195.5,83);


// stage content:
(lib.Animation_600x500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.startTime==undefined) window.startTime = new Date().getTime();
		
		//	var end = new Date().getTime();	
		//	var all = end - window.startTime;
		//	console.log(all/1000);
		
		///////////////
		
		this.pauze = function(czas) {
			this.stop();
			setTimeout(this.contPlay.bind(this), czas);	
		}
		
		this.pauze2 = function(czas,_what) {
			_what.stop();
			setTimeout(this.contPlay.bind(_what), czas);	
		}
		
		this.pauzeFrames = function(frames) {	
			this.stop();
			var tar = this;
			createjs.Tween.get(tar, { useTicks:true }).to({ }, frames, createjs.Ease.linear).call(this.contPlay.bind(this));;	
		}
		
		this.pauzeFrames2 = function(frames,_what) {	
			_what.stop();
			var tar = _what;
			createjs.Tween.get(tar, { useTicks:true }).to({ }, frames, createjs.Ease.linear).call(this.contPlay.bind(_what));;	
		}
		
		this.contPlay = function() { this.play(); }
		
		
		/////////////////////
	}
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(56).call(this.frame_56).wait(38));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("Egu3AnEMAAAhOHMBdvAAAMAAABOHgAmjUOQFZAEEGAyQFEA9D2CJQAgASAXAGQAhAGAUgQQALgIAHgRQAEgKAFgVQAUhogDiNQAAgogMjPQgWl+AimTQADghgPgIQADgNABgNIl1AAQgJBlioBIQiyBMj5ABQj7gBiwhMQiphIgJhlIlzAAQACAXAIAWQgIAFgCAJQgEAKADAYQAIBHAEBYQADAxACBwIADD+QAFD7ABC0IgFAGQgGAJAEARIAJAdQAAAEgCAdQgDATAIAKQALAMAfgGQA2gJBtgfQBqgfA5gKQA1gJA/gDQAfgBAqAAIAtABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:300,y:250}).wait(82));

	// dots texts
	this.instance = new lib.mcdotstexts();
	this.instance.parent = this;
	this.instance.setTransform(166,151.7,1,1,0,0,0,166,151.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true},73).wait(9));

	// dots particles
	this.instance_1 = new lib.mldotsHOLDER();
	this.instance_1.parent = this;
	this.instance_1.setTransform(294.5,305,1,1,0,0,0,6.5,6.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({_off:true},73).wait(9));

	// light
	this.instance_2 = new lib.mlmachinedatacontent();
	this.instance_2.parent = this;
	this.instance_2.setTransform(293,157.3,1,1,0,0,0,61,125.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({_off:true},71).wait(2));

	// docs in-out copy
	this.instance_3 = new lib.mlDOCSanim_v2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(286,294,1,1,0,0,0,252,89);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({alpha:1},16).to({_off:true},24).wait(21));

	// docs in-out
	this.instance_4 = new lib.mlDOCSanim_v1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(286,294,1,1,0,0,0,252,89);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).to({alpha:1},16).to({_off:true},24).wait(21));

	// girl hand
	this.instance_5 = new lib.mlgirlhand("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(427,258.6,1,1,0,0,0,10.5,7.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:1},12).to({_off:true},33).wait(28));

	// girl
	this.instance_6 = new lib.mlgirl("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(464.3,270.3,1,1,0,0,0,46.3,40.3);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({alpha:1},12).to({_off:true},33).wait(28));

	// chair man
	this.instance_7 = new lib.mlchairmanHOLDER();
	this.instance_7.parent = this;
	this.instance_7.setTransform(153.3,379.3,1,1,0,0,0,37.3,37.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({x:176.3,y:368.3,alpha:1},12,cjs.Ease.get(1)).to({_off:true},33).wait(28));

	// machine
	this.instance_8 = new lib.mlmachine();
	this.instance_8.parent = this;
	this.instance_8.setTransform(293.3,340.3,0.041,0.07,0,0,0,152.5,85.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({regX:151.3,regY:85.1,scaleX:0.44,scaleY:0.44,y:320.4},6,cjs.Ease.get(-1)).to({regY:84.3,scaleX:1,scaleY:1,y:300.3},9,cjs.Ease.get(1)).wait(73));

	// platform
	this.instance_9 = new lib.mlplatform();
	this.instance_9.parent = this;
	this.instance_9.setTransform(299.4,354.4,0.048,0.048,0,0,0,295.3,126.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.45,scaleY:0.45,x:299.8,y:349.3},6,cjs.Ease.get(-1)).to({regX:294.3,regY:126.3,scaleX:1,scaleY:1,x:300.3,y:342.3},9,cjs.Ease.get(1)).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,600,500);
// library properties:
lib.properties = {
	width: 600,
	height: 500,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"Animation_600x500_atlas_.png?1493243218218", id:"Animation_600x500_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;