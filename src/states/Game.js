/* globals __DEV__ */
import Phaser from 'phaser'
import createPlayer from '../create/createPlayer'

export default class extends Phaser.State {
	init () {}
	preload () {}

	create () {
		// game entry point!
		// start physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		// create player
		this.player = createPlayer(this.game)

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
