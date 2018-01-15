// =======================
//  XERN Module
// 	name: Intro
//  	  XERN intro module
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
    app: PropTypes.object,
    children: PropTypes.node
  };

  static defaultProps = {
    app: {},
    children: null
  };

  constructor(props) {
    super(props);
    this.state = {};
    autobind(this);
  }

  render() {
    return Template({
      app: this.props.app,
      children: this.props.children
    });
  }
}

export default Component;
