// =======================
//  XERN Component
// 	name: xern-test
//  	  test component
//
// 	author: samueleishion
// =======================

import React from "react";
import PropTypes from "prop-types";

const Template = function(props) {
  return (
    <div className="xern-test">
      {props.children}
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node
};

Template.defaultProps = {
  children: null
};

export default Template;
