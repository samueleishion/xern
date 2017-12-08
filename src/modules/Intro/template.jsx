// =======================
//  XERN Module
//   name: Intro
//      XERN intro module
//
//   author: samueleishion
// =======================

import React from 'react';
import PropTypes from 'prop-types';
import XERNtest from 'xern-test';

const Template = function(props) {
  return (
    <div className="xern-module" id="Intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            Intro
            <XERNtest>Test component</XERNtest>
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
