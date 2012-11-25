var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
		ige.showStats(1);

		// Load our textures
		var self = this,
			gameTexture = [],
			overFunc, outFunc, i;

		this.obj = [];

		gameTexture[0] = new IgeTexture('../assets/textures/sprites/fairy.png');

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the scene
					self.scene1 = new IgeScene2d()
						.id('scene1');

					// Create the main viewport
					self.vp1 = new IgeViewport()
						.id('vp1')
						.autoSize(true)
						.scene(self.scene1)
						.drawBounds(true)
						.drawBoundsData(true)
						.mount(ige);

					self.obj[0] = new IgeEntity()
						.id('fairy0')
						.depth(0)
						.width(100)
						.height(100)
						.texture(gameTexture[0])
						.drawBounds(false)
						.drawBoundsData(false)
						.mount(self.scene1);

					self.obj[0]._translate.tween()
						.step({
							x: 100
						}, 2000, 'outElastic')
						.step({
							x: 0,
							y: -100
						}, 4000, 'inOutElastic')
						.step({
							x: -100,
							y: 100
						}, 1000, 'outElastic')
						.start();
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }