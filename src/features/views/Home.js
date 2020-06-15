import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { SearchContainer, ResultContainer } from '../layout';

export class Home extends Component {
  static propTypes = {
    views: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    
    return (
      <React.Fragment>
        <SearchContainer></SearchContainer>
        <ResultContainer></ResultContainer>
      </React.Fragment>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    views: state.views,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
