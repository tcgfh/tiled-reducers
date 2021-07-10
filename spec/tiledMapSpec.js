const tiledMap = require('../src/tiledMap').reducer;

describe('TiledMap reducer', () => {
  it('returns a default tiled map object when no state and action is passed', () => {
    const result = tiledMap();
    expect(result).toEqual({
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
  });
});
