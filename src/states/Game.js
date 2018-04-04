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
		const mapData = createMap(this.game)
		this.map = mapData.map
		this.collisionLayer = mapData.collisionLayer

		// create player
		this.player = createPlayer(this.game)

		// create camera
		this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 1, 1)
		this.game.camera.bounds = null
	}

	render () {

	}

	update () {
		if (__DEV__) {
        // dev mode entry point!
		}

		this.game.physics.arcade.collide(this.player, this.collisionLayer, () => console.log('collide'))
	}
}
