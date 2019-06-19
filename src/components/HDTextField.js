import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: '100%',
    '& .MuiInputBase-root': {
      fontSize: '2.5rem',
      color: '#2D0706'
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid #F1F1F1'
    }
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
        multiline
        className={classes.textField}
        margin="normal"
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

HDTextField.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HDTextField)
