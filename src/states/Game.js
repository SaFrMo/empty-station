/* globals __DEV__ */
import Phaser from 'phaser'
import createPlayer from '../create/createPlayer'
import createMap from '../create/createMap'

export default class extends Phaser.State {
	init () {}
	preload () {}

	create () {
		// game entry point!
		// start physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		// create map
		this.map = createMap(this.game)
		console.log(this.map)

		// create player
		this.player = createPlayer(this.game)

		// create camera
		this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1)
		this.game.camera.bounds = null
	}

	render () {
		if (__DEV__) {
        // dev mode entry point!
		}

		// console.log(this.blockingLayer)
		this.game.physics.arcade.collide(this.player, this.map.layers[1])

		this.game.debug.body(this.map.layers[0])
	}
}
