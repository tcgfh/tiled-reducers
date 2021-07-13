const tileSet = require('../src/tileSet').reducer;

describe('tileSet', () => {
  it('returns an empty tileset object when no state is provided', () => {
    const result = tileSet();
    expect(result).toEqual(
      {
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
      },
    );
  });

  it('returns a different empty tileset object each time when no state is provided', () => {
    const firstCall = tileSet();
    const secondCall = tileSet();
    expect(firstCall).toEqual(secondCall);
    expect(firstCall === secondCall).toBeFalse();
  });
});
