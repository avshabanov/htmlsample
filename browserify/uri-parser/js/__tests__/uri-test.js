jest.dontMock('../uri.js');

describe('parse query string', function () {
  let parseQueryString;

  beforeEach(() => {
    const uri = require('../uri.js');
    parseQueryString = uri.parseQueryString;
  });

  it('parses one parameter', function () {
    // Given:
    const url = "http://localhost/resource?debug=1";

    // When:
    const queryParam = parseQueryString(url);

    // Then:
    console.log("[1] queryParam", queryParam);
    //expect(1).toBe(1);
    expect(queryParam["debug"]).toEqual("1");
  });
});
