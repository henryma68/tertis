'use strict';
window.addEventListener('DOMContentLoaded', function() {

	
	console.log('ya');
 
  requirejs.config({

	baseUrl: "js",

	paths: {
		src: "./src"
	}
});


require(["src/Game"], function(Game) {

	var App = Game.extend({

		init: function() {
			canvas.width = 480;
			canvas.height = 272;
			canvas.scale = 1;
						
			content.load("back", "res/back.png");
			content.load("blocks", "res/blocks.png");
			content.load("numbers", "res/numbers.png");
		},//init end
		
		
		
		tick: function() {

		/*	if (this.hasLoad) {

				this.tetris.update(input);
				this.tetris.draw(canvas.ctx);

			} else {

				this.hasLoad = content.progress() === 1;
				
				if (this.hasLoad) {
					this.tetris = new Tetris(10, 22);
				}
			}*/
		
		if(content.progress===1){
			canvas.ctx.drawImage(content.get("back"),0,0);
			
		}
			
		}// tick end
		
  
});//app end
  
  
  (function() {
		var game = new App();
		game.run();

	
  })();//game function
  
});//require end
  
});