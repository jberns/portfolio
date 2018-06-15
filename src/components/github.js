import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions/index';
import _ from 'lodash';

class Github extends Component {
  componentDidMount() {
    this.props.fetchGithub();
  }

  renderGithub() {
    return _.map(this.props.github, hub => {
      return <li key={hub.id}>{hub.id}</li>;
    });
  }

  render() {
    console.log('Current Render Props: ', this.props.github);
    return (
      <div>
        <ul className="list-group">{this.renderGithub()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { github: state.github };
}

export default connect(
  mapStateToProps,
  { fetchGithub }
)(Github);
