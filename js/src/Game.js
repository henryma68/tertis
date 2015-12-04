define(function() {
  
  var Game = Class.extend({
  
    
    tick: function() {
			console.warn("should overrided by childclass!");
		},//tick end
    
    
     run: function() {
		//	if (this._running) return;
		//	this._running = true;
     // console.log('run');
			var self = this;
			 
			function loop() {
				self._reqframe = window.requestAnimationFrame(loop);

				self.tick();

				//input.clearPressed();
				canvas.flip();
			}
			this._reqframe = window.requestAnimationFrame(loop);
			 
		}//run end
  
  
  });// var Game  end
  
  return Game;
  
});