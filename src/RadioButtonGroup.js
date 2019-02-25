import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 1,
  },
  group: {
    margin: `${theme.spacing.unit * 0.8}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 0,
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes, answers, bool, select } = this.props;
    if (bool) {
      return (
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup
              aria-label="answers"
              name="answers"
              className={classes.group + " animated fadeInLeft delay-1s"}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel 
                value="1" 
                control={<Radio color="primary" />} 
                label={answers[0]} 
                onChange={
                  () => select(1)
                } 
              />
              <FormControlLabel 
                value="2" 
                control={<Radio color="primary" />} 
                label={answers[1]} 
                onChange={
                  () => select(2)
                } 
              />
              <FormControlLabel 
                value="3" 
                control={<Radio color="primary" />} 
                label={answers[2]} 
                onChange={
                  () => select(3)
                } 
              />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
    return <span></span>
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
