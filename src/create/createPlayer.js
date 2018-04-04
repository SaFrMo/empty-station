import Link from 'phaser-link'

export default game => {
	const playerWidth = 49.6
	const playerHeight = 62.8

	const player = game.add.existing(new Link({
		game,
		key: 'astronaut',
		controls: true,
		width: playerWidth,
		height: playerHeight,
		collideWorldBounds: false,
		x: game.world.centerX,
		y: 64
	}))
	player.anchor.set(0.5)
	player.width = playerWidth
	player.height = playerHeight

	// enable physics
	game.physics.arcade.enable(player)
	player.body.setSize(496, 628, 0, 0)

	return player
}
