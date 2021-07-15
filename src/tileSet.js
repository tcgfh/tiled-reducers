function defaultTileSet() {
  return ({
    columns: 6,
    firstgid: 1,
    image: '',
    imageheight: 192,
    imagewidth: 192,
    margin: 0,
    name: '',
    properties: {},
    spacing: 0,
    tilewidth: 32,
    tileheight: 32,
    tileproperties: {
    },
  });
}

module.exports.reducer = function tileSet(action, state = defaultTileSet()) {
  return state;
};
