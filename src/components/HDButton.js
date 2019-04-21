import React from 'react'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

class IconLabelButton extends React.Component {
  // componentDidMount() {
  //   loadCSS(
  //     'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
  //     document.querySelector('#insertion-point-jss')
  //   )
  // }
  render() {
    const { classes } = this.props

    return (
      <div>
        <Button variant="contained" color="primary" className={classes.button}>
          Send
          <SendIcon className={classes.rightIcon} />
        </Button>
      </div>
    )
  }
}

IconLabelButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(IconLabelButton)
