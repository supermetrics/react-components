/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Component } from 'react';
import PropTypes from 'prop-types';

export default class State extends Component {
  static propTypes = {
    children: PropTypes.func,
    initialState: PropTypes.object
  };

  static defaultProps = {
    initialState: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      ...props.initialState
    };
  }

  render() {
    const { children, initialState } = this.props;

    return children(this.state || initialState, this.setState.bind(this));
  }
}
