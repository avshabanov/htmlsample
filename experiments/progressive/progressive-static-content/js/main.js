
import {requestObject} from 'rsvp-ajax';

function setOnclickIfPresent(id, handler) {
  const element = document.getElementById(id);
  if (element != null) {
    element.onclick = handler;
  }
}

function setHandlers() {
  setOnclickIfPresent('btn-load-more', () => {
    const entries = document.getElementsByClassName('book-entry');
    console.log('cnt=' + entries.length);

    const bookContainerUi = document.getElementById('book-container');

    let promise = requestObject({
      method: 'GET',
      url: '/g/part/books?offset=' + entries.length,
      accept: 'text/html',
      responseType: 'text'
    });
    promise.then((data) => {
      console.log('Got data=', data);
      bookContainerUi.insertAdjacentHTML('beforeend', data);
    });
  });
}

window.onload = () => {
  console.log('Hello!');
  setHandlers();
}
