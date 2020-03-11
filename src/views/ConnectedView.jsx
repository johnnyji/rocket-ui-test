import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';

const menu = Navigation();

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      return (
        <Layout {...layoutProps}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  const mapStateToProps = state => state;

  //normally we bind actions to dispatch here
  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
