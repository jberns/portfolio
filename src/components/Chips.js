import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { connect } from 'react-redux';
import { fetchGithub } from '../actions/index';
import { bindActionCreators } from 'redux';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}

function SimpleChip(githubData, style, index) {
  const name = githubData;
  return <Chip label={name} className={style} key={index} />;
}

class Chips extends Component {
  componentDidMount() {
    console.log('mounting');
    this.props.fetchGithub();
    console.log('Console log: ', this.props.github);
  }

  renderGithub(githubData) {
    return <li key={githubData.id}>{githubData.id}</li>;
  }

  render() {
    const { classes } = this.props;
    console.log('Current Render State: ', this.props.github);
    return (
      <div className={classes.root}>
        <ul className="list-group">
          {!this.props.github
            ? this.props.github.map(this.renderGithub)
            : 'None'}
        </ul>
        <Chip
          avatar={<Avatar>MB</Avatar>}
          label="Clickable Chip"
          onClick={handleClick}
          className={classes.chip}
        />
        <Chip
          avatar={<Avatar src="/static/images/uxceo-128.jpg" />}
          label="Deletable Chip"
          onDelete={handleDelete}
          className={classes.chip}
        />
        <Chip
          avatar={
            <Avatar>
              <FaceIcon />
            </Avatar>
          }
          label="Clickable Deletable Chip"
          onClick={handleClick}
          onDelete={handleDelete}
          className={classes.chip}
        />
        <Chip
          label="Custom delete icon Chip"
          onClick={handleClick}
          onDelete={handleDelete}
          className={classes.chip}
          deleteIcon={<DoneIcon />}
        />
        <Chip
          label="Clickable Link Chip"
          className={classes.chip}
          component="a"
          href="#chip"
          clickable
        />
      </div>
    );
  }
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { github: state.github };
}

function mapDispatchToProps(dispatch) {
  console.log('mapping states');
  return bindActionCreators({ fetchGithub }, dispatch);
}

export default connect(
  mapStateToProps,
  { fetchGithub }
)(withStyles(styles)(Chips));
