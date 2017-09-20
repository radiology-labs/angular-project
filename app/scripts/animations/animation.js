function initHeroAnimation() {
    
    var canvas, stage, exportRoot;
    
    function init() {
	   canvas = document.getElementById("canvas");
	   createjs.MotionGuidePlugin.install();
	   images = images||{};
	   ss = ss||{};
       var loader = new createjs.LoadQueue(false, heroImageBasePath);
	   loader.addEventListener("fileload", handleFileLoad);
	   loader.addEventListener("complete", handleComplete);
	   loader.loadManifest(lib.properties.manifest);
    }
    
    function handleFileLoad(evt) {	
	   if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
    }
    
    function handleComplete(evt) { 
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.Animation_600x500();
        stage = new createjs.Stage(canvas);
        stage.scaleX = stage.scaleY = 1;
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
    }
    
    init();
    
}