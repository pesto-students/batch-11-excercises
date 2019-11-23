/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class Link extends Component {
  render() {
    const { address, hide } = this.props;
    if (!hide) {
      return <a href={address}> address </a>;
    }
    return null;
  }
}
