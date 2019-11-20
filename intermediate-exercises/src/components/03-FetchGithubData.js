import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo, index) => <li key={index}>{repo}</li>)}
    </ul>
  );
}

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {

};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
      reqStatus: true,
      error: ''
    };
    this.getRepos = this.getRepos.bind(this);
  }

  getRepos() {
    if (this.state.username !== '') {
      axios.get(`https://api.github.com/users/${this.state.username}/repos`)
        .then(function (response) {
          const responseTxt = response.data;
          const repos = responseTxt.reduce((acc, current) => acc.concat(current.name), []);
          this.setState({ repos, error: '', reqStatus: true, });
        }.bind(this))
        .catch(function (error) {
          this.setState({ reqStatus: false, error: error.response.statusText, repos: [] });
        }.bind(this))
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={(event) => { this.setState({ username: event.target.value }) }}
        />
        <button onClick={this.getRepos}> Get Repos</button>
        <GithubRepos repos={this.state.repos} />
        {this.state.reqStatus ? '' : <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default UsernameForm;
