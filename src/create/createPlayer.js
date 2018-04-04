import Link from 'phaser-link'
import Phaser from 'phaser'

export default game => {
	const player = game.add.existing(new Link({
		game,
		key: 'astronaut',
		controls: true,
		width: 49.6,
		height: 62.8,
		collideWorldBounds: false,
		x: game.world.centerX,
		y: game.world.centerY
	}))
	player.anchor = new Phaser.PIXI.Point(0.5, 0.5)
	player.width = 49.6
	player.height = 62.8

	return player
}
