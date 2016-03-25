'use strict';

//jest.autoMockOff(); - even with this uncommented rsvp tests are failing

jest.unmock('../service/CatalogService');
jest.unmock('rsvp');

import CatalogService from '../service/CatalogService';

import rsvp from 'rsvp';

describe('catalog service test', () => {
//  pit('gets foo', () => {
//    // Given:
//
//    // When:
//    const promise = CatalogService.getFoo();
//
//    // Then:
//
//    //return new Promise((resolve) => { resol })
//    return promise.then((data) => {
//      expect(1).toBe(1);
//    });
//
//    //return new Promise((r) => {r("asdas");}).then(()=> { expect(1).toBe(1); });
//  });

  pit('testing rsvp promise', () => {
    return new rsvp.Promise((resolve) => {
      resolve("getting something");
    }).then(() => { expect(1).toBe(1); });
  });

  pit('testing pure promise', () => {
    return new Promise((resolve) => {
      resolve("getting something");
    }).then(() => { expect(1).toBe(1); });
  });
});
