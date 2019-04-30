import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import HDTextField from './components/HDTextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import { getCodes } from 'country-list'
import * as _ from 'lodash'
import axios from 'axios'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'

const styles = theme => ({
  root: {
    flexGrow: 1
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
          currentInput: '',
          redirectToCardList: true
        })
      })
  }
  render() {
    const classes = styles
    const redirectToCardList = this.state.redirectToCardList
    if (redirectToCardList) {
      return <Redirect to="/cardList" />
    }
    return (
      <Grid container className={classes.root} justify="center" spacing={24}>
        <h1>Hi Dasein</h1>
        <Grid
          container
          className={classes.demo}
          justify="center"
          alignItems="flex-end"
          spacing={16}
        >
          <HDTextField
            value={this.state.currentInput}
            onChange={event => this.handleInput(event)}
          />
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
    )
  }
}

export default CardInput
