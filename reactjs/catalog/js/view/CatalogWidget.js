'use strict';

import React, {Component} from 'react';
import LoadingWidget from './LoadingWidget';
import CatalogService from '../service/CatalogService';

type Props = {
};

type State = {
  loading: boolean,
  items: ?object,
  error: ?string
};

export default class CatalogWidget extends Component<{}, Props, State> {

  state = {
    loading: true,
    error: null
  }

  componentDidMount(): void {
    CatalogService.getItems().then(this._onGetItems, this._onServiceError);
  }
  
  render(): ReactElement {
    if (this.state.error != null) {
      return (<div className="well"><p>{this.state.error}</p></div>);
    }

    if (this.state.loading) {
      return <LoadingWidget/>;
    }

    return this._renderItems();
  }

  _renderItems(): ReactElement {
    const catalogContents = this.state.items.map((item) => {
      const authors = item.authors.map((author) => {
        return (<span key={author}><span className="label label-default">{author}</span>&nbsp;</span>);
      });
      const genres = item.genres.map((genre) => {
        return (<span key={genre}><span className="label label-default">{genre}</span>&nbsp;</span>);
      });
      return (
        <div key={item.id}>
          <h3><span className="glyphicon glyphicon-folder-open" ariaHidden="true"></span>&nbsp;{item.name}</h3>
          <p>Authors: <span>{authors}</span></p>
          <p>Genres: <span>{genres}</span></p>
        </div>
      );
    });

    return (
      <div className="container">
        {catalogContents}
      </div>
    );
  }

  _onGetItems = (items) => {
    console.log("Got items", items);
    this.setState({loading: false, items});
  }

  _onServiceError = (e) => {
    console.error("Service error", e);
    this.setState({error: 'Error while getting items ' + JSON.stringify(e)})
  }
}

