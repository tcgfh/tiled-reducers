const tileLayer = require('../src/tileLayer').reducer;

describe('tileLayer', () => {
  it('returns an empty object when no initial state is provided', () => {
    const result = tileLayer();
    expect(result).toEqual({
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
  });
});
