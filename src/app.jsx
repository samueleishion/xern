import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HashRouter, Switch, Route } from 'react-router-dom';
import request from 'request';
import Cookie from 'react-cookie';
import autobind from 'react-autobind';

import Intro from 'Intro';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: [],
      showModal: false
    };
    autobind(this);
  }

  handleModal(value, content) {
    this.setState({
      showModal: value,
      modalContent: value ? content : null
    });
  }

  startLoad(load) {
    let copy = JSON.parse(JSON.stringify(this.state.loading));
    if (copy.indexOf(load) >= 0) return;
    copy.push(load);
    this.setState(
      {
        loading: copy
      },
      () => {
        // console.log("app.startLoad",this.state.loading.length);
      }
    );
  }

  endLoad(load, callback) {
    let copy = load === undefined ? [] : JSON.parse(JSON.stringify(this.state.loading));
    if (load !== undefined) {
      copy.splice(copy.indexOf(load));
    }
    this.setState(
      {
        loading: copy
      },
      () => {
        // console.log("app.endLoad",this.state.loading.length);
        if (callback && typeof callback == 'function') callback();
      }
    );
  }

  render() {
    const appObj = {
      api: this.state.api,
      userId: this.state.userId,
      accountId: this.state.accountId,
      showModal: this.state.showModal,
      handleModal: this.handleModal,
      handleToast: this.handleToast,
      startLoad: this.startLoad,
      endLoad: this.endLoad
    };

    return (
      <div>
        <div className={'xern-app' + (this.state.showModal ? ' xern-state--modal' : '')}>
          <HashRouter>
            <Switch>
              <Route exact path="/" render={() => <Intro app={appObj} />} />
              <Route path="/" render={() => <Intro app={appObj} />} />
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
