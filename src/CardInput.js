import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import HDTextField from './components/HDTextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { getCodes } from 'country-list'
import * as _ from 'lodash'
import axios from 'axios'
import { Redirect, withRouter, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'

const styles = theme => ({
  root: {
    // flexGrow: 1,
    backgroundColor: '#f9f9f9',
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'row',
    // alignItems: 'center',
    // flexWrap: 'wrap'
    position: 'relative'
  },
  wrapper: {
    width: '500px',
    height: '100px',
    position: 'absolute',
    padding: '20px',
    top: '30%',
    left: '50%',
    margin: '-100px 0 0 -270px'
    // display: 'table',
    // margin: '0 auto',
    // verticalAlign: 'middle'
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

class CardInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      currentInput: '',
      redirectToCardList: false
    }
    // this.handleInput = this.handleInput.bind(this)
    // this.handleClickButton = this.handleClickButton.bind(this)
  }

  componentDidUpdate() {
    console.log('component did update')
    console.log('card input location', this.props.history)
  }
  randomCode() {
    return _.sample(getCodes())
  }
  handleInput(event) {
    this.setState({
      currentInput: event.target.value
    })
  }
  handleClickButton = event => {
    let content = this.state.currentInput
    if (content === '') {
      return
    }
    let url = 'http://localhost:4141/talks'
    axios
      .post(url, {
        content: content
      })
      .then(res => {
        console.log('create talks res: ', res)
        this.setState({
          currentInput: ''
        })
        this.props.history.push('/cardList')
      })
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.wrapper}>
        <Grid
          container
          className={classes.wraper}
          justify="center"
          spacing={24}
        >
          <h1>Hi Dasein</h1>
          <Grid container justify="center" alignItems="flex-end" spacing={16}>
            <Grid item>
              <HDTextField
                value={this.state.currentInput}
                onChange={event => this.handleInput(event)}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={event => this.handleClickButton(event)}
                color="primary"
                className={classes.button}
              >
                Send
                <SendIcon className={classes.rightIcon} />
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Link to="/cardList">Show All</Link>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(CardInput)
