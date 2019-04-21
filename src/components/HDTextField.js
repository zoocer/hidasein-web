import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRigh: theme.spacing.unit,
    width: 200
  }
})
class HDTextField extends React.Component {
  state = {
    multilined: 'Controlled'
  }

  handleChanged = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <TextField
        label="placeholder"
        placeholder="What do you want to say?"
        multiline
        className={classes.textField}
        margin="normal"
      />
    )
  }
}

HDTextField.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HDTextField)
