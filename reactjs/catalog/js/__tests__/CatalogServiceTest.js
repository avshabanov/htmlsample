'use strict';

jest.mock('rsvp-ajax');
jest.unmock('rsvp');
jest.unmock('../service/CatalogService');

describe('catalog service test', () => {
  let ajax;

  beforeEach(() => { ajax = require('rsvp-ajax'); });

  it('gets foo', () => {
    // Given:
    const {default: CatalogService} = require('../service/CatalogService');

    // When:
    let actualVal = '<none>';
    CatalogService.getFoo().then(val => { actualVal = val; });
    jest.runAllTimers(); // run all promises

    // Then:
    expect(actualVal).toEqual({bar: 42});
  });

  it('get items', () => {
    // Given:
    const {default: CatalogService} = require('../service/CatalogService');
    let actualVal = '<none>';
    const items = [{
      "id": 1,
      "name": "First",
      "genres": ["genre1-1"],
      "authors": ["author1-1", "author1-2"]
    }, {
      "id": 2,
      "name": "Second",
      "genres": ["genre2-1", "genre2-2"],
      "authors": ["author2-1"]
    }];
    ajax.__putMockResponse('GET', '/rest/items.json', { "items": [1, 2] });
    ajax.__putMockResponse('GET', '/rest/item/1.json', items[0]);
    ajax.__putMockResponse('GET', '/rest/item/2.json', items[1]);

    // When:
    CatalogService.getItems().then(val => { actualVal = val; });
    jest.runAllTimers(); // run all promises

    // Then:
    expect(actualVal).toEqual(items);
  });
});
