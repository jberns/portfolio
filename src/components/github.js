import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions/index';
import _ from 'lodash';
import Card from './Card';

class Github extends Component {
  componentDidMount() {
    this.props.fetchGithub();
  }

  renderGithub() {
    return _.map(this.props.github, hub => {
      console.log(hub);
      return (
        <Card
          key={hub.id}
          Title={hub.full_name}
          Description={hub.description}
          Url={hub.html_url}
          Languages={hub.language}
        />
      );
    });
  }

  render() {
    return <div>{this.renderGithub()}</div>;
  }
}

function mapStateToProps(state) {
  return { github: state.github };
}

export default connect(
  mapStateToProps,
  { fetchGithub }
)(Github);
