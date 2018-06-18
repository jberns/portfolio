import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
});

function Chips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Chip label={props.chipContent} className={classes.chip} />
    </div>
  );
}

Chips.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Chips);
