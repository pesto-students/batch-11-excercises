import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';
import { baseUrl, storage } from './shared/sharedItems';

class App extends Component {
  state = {
    posts: [],
  };

  fetchPosts = page => {
    return fetch(baseUrl + `posts/${page}`, {
      method: 'get',
      headers: {
        'pesto-password': 'darth vader'
      },
    })
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status} : ${response.statusText}`);
        error.response = response;
        throw error;
      }
    }, error => { throw new Error(error.message) })
    .then(response => response.json())
    .then(response => { 
      const data = response.data;
      if(data.length > 0) {
        this.setState({ posts: data });
      } else {
        this.setState({ posts: [] });
      }
    })
    .catch(error => { throw new Error(error.message) });
  };

  componentDidMount() {
    this.fetchPosts(storage.getItem('page'));
    const request = window.indexedDB.open('test', 1);
    let db;
    // event.target gives us the request object
    // request.onsuccess = event => db = event.target.result;
    request.onerror = event => console.log(event.target.error);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      const options = { keyPath: 'id' };
      const store = db.createObjectStore('products', options);
      options.autoIncrement = true;
      store.createIndex('products_id_unique', 'id', { unique: true });

    };
    request.onsuccess = event => {
      const products = [
        {id: 1, name: 'Red Men T-Shirt', price: '$3.99'},
        {id: 2, name: 'Pink Women Shorts', price: '$5.99'},
        {id: 3, name: 'Nike white Shoes', price: '$300'},
      ]
      const db = event.target.result;
      const transaction = db.transaction('products', 'readwrite');
      transaction.onsuccess = event => console.log('All transactions are done');
      const productStore = transaction.objectStore('products');
      products.forEach(product => productStore.add(product));
    };
  };

  handleNextClick = () => {
    const currentPage = storage.getItem('page');
    storage.setItem('page', parseInt(currentPage) + 1);
    this.fetchPosts(storage.getItem('page'));
  };

  handlePrevClick = () => {
    if(storage.getItem('page') > 1) {
      const currentPage = storage.getItem('page');
      storage.setItem('page', parseInt(currentPage) - 1);
      this.fetchPosts(storage.getItem('page'));
    }
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button disabled={storage.getItem('page') <= 1} onClick={this.handlePrevClick}>
          Previous
        </button>
        <button disabled={posts.length <= 0} onClick={this.handleNextClick}>
          Next
        </button>
        <div>
          {posts.map((post) => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
