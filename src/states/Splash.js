import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
	init () {}

	preload () {
		this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
		this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
		centerGameObjects([this.loaderBg, this.loaderBar])

		this.load.setPreloadSprite(this.loaderBar)

        // load images

		this.load.image('astronaut', 'assets/images/astronaut.png')
		this.load.image('tileset', 'assets/images/tileset.png')

		// load tilemaps
		this.load.tilemap('command-center', 'assets/tilemaps/command-center.json', null, Phaser.Tilemap.TILED_JSON)
	}

	create () {
		this.state.start('Game')
	}
}
