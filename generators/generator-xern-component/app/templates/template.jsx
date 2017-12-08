// =======================
//  XERN Component
// 	name: <%= fullname %>
//  	  <%= description %>
//
// 	author: <%= author %>
// =======================

import React from 'react';
import PropTypes from 'prop-types';

const Template = function(props) {
  return <div className="<%= fullname %>">{props.children}</div>;
}

Template.propTypes = {
  children: PropTypes.node
};

Template.defaultProps = {
  children: null 
};

export default Template;
