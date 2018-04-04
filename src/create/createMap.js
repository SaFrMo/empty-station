export default game => {
    // build command center
	const map = game.add.tilemap('command-center')
	map.addTilesetImage('tileset')

    // background
	const bg = map.createLayer('Background')
	bg.resizeWorld()

    // collision
	map.setCollisionBetween(0, 511, true, 'Blocking', true)
	const collisionLayer = map.createLayer('Blocking')

	// interaction
	const interactionLayer = game.add.group()
	interactionLayer.enableBody = true
	map.createFromObjects('Interaction', 'computer', '', 0, true, false, interactionLayer)

	return {
		map,
		collisionLayer,
		interactionLayer
	}
}
