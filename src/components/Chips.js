import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { connect } from 'react-redux';

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

function Chips(props) {
  const { classes } = props;
  console.log(props);

  return (
    <div className={classes.root}>
      {!props.github
        ? props.github.map((data, index) =>
            SimpleChip(data, classes.chip, index)
          )
        : ['1', '2', '3'].map((data, index) =>
            SimpleChip(data, classes.chip, index)
          )}
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

Chips.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps({ github }) {
  console.log('mapping states');
  return { github };
}

export default connect(mapStateToProps)(withStyles(styles)(Chips));
