'use strict';

import {Promise, all} from 'rsvp';
import {request} from 'rsvp-ajax';

class CatalogService {

  getFoo(): Promise {
    return new Promise((resolve) => {
      resolve({bar: 42});
    });
  }

  getItems(): Promise {
    // makes multiple AJAX calls - one for item IDs and the others - for item content
    let promise = request('GET', '/rest/items.json');

    promise = promise.then((itemResponse) => {
      const itemIds = itemResponse.items;
      const itemPromises = itemIds.map((itemId) => request('GET', '/rest/item/' + itemId + '.json'));
      return all(itemPromises).then((items) => {
        return new Promise((resolve) => {
          resolve(items);
        });
      });
    });

    return promise;
  }
}

export default new CatalogService;
