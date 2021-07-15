function defaultTiledMap() {
  return ({
    backgroundcolor: '#ffffff',
    height: 24,
    orientation: 'orthogonal',
    properties: {},
    renderorder: 'right-down',
    tileheight: 32,
    tilewidth: 32,
    version: 1,
    width: 24,
    layers: [],
    tilesets: [],
  });
}

module.exports.reducer = function tiledMap(action, state = defaultTiledMap()) {
  return state;
};
