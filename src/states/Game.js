/* globals __DEV__ */
import Phaser from 'phaser'
import Link from 'phaser-link'

export default class extends Phaser.State {
	init () {}
	preload () {}

	create () {
		// game entry point!
		// start physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		// create player
		this.player = this.game.add.existing(new Link({
			game: this.game,
			key: 'astronaut',
			controls: true,
			width: 49.6,
			height: 62.8,
			collideWorldBounds: false,
			x: this.game.world.centerX,
			y: this.game.world.centerY
		}))
		this.player.anchor = new Phaser.PIXI.Point(0.5, 0.5)
		this.player.width = 49.6
		this.player.height = 62.8

		// create camera
		this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1)
		this.game.camera.bounds = null
	}

	render () {
		if (__DEV__) {
        // dev mode entry point!
		}
	}
}
