function getDefaultTileLayer() {
  return ({
    data: [],
    height: 24,
    name: 'ground',
    opacity: 1,
    type: 'tilelayer',
    visible: true,
    width: 24,
    x: 0,
    y: 0,
  });
}

module.exports.reducer = function tileLayer(action, state = getDefaultTileLayer()) {
  return state;
};
