// =======================
//  XERN Component
// 	name: xern-test
//  	  test component
//
// 	author: samueleishion
// =======================

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Template from "./template";
import autobind from "react-autobind";

class Component extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    return Template({
      children: this.props.children
    });
  }
}

export default Component;
