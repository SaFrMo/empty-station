export default game => {
    // build command center
	const map = game.add.tilemap('command-center')
	map.addTilesetImage('tileset')

    // background
	const bg = map.createLayer('Tile Layer 1')
	bg.resizeWorld()

    // collision
	map.setCollisionBetween(0, 511, true, 'Blocking', true)
	const collisionLayer = map.createLayer('Blocking')

	return {
		map,
		collisionLayer
	}
}
