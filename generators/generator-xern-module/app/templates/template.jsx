// =======================
//  XERN Module
//   name: <%= fullname %>
//      <%= description %>
//
//   author: <%= author %>
// =======================

import React from 'react';
import PropTypes from 'prop-types';

const Template = function (props) {
  return (
    <div className="xern-module" id="<%= fullname %>">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <%= fullname %>
          </div>
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  app: PropTypes.object,
  children: PropTypes.node
};

Template.defaultProps = {
  app: {},
  children: null
};

export default Template;
