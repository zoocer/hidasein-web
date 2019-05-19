import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import HDTextField from './components/HDTextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Typography from '@material-ui/core/Typography'
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
    // width: '100%',
    // height: '100%'
    position: 'absolute',
    // padding: '20px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
    // margin: '-100px 0 0 -270px'
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
  },
  link: {
    margin: '50px'
  },
  title: {
    color: '#2D0706',
    fontFamily: 'Times New Roman'
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
      <Grid
        className={classes.wrapper}
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <Grid item xs />
        <Grid item xs>
          <Grid container direction="column" spacing={24}>
            <Grid container direction="row">
              <Grid item md={3} xs={2} />
              <Grid item md={3} xs={8}>
                <Typography className={classes.title} variant="h3">
                  Hi Dasein:
                </Typography>
              </Grid>
              <Grid item md={3} xs="auto" />
              <Grid item md={3} xs={2} />
            </Grid>
            <Grid container alignItems="flex-end" spacing={16}>
              <Grid item md={3} xs={2} />
              <Grid item md={4} xs={5}>
                <HDTextField
                  value={this.state.currentInput}
                  onChange={event => this.handleInput(event)}
                />
              </Grid>
              <Grid item md={2} xs={3}>
                <Button
                  variant="contained"
                  onClick={event => this.handleClickButton(event)}
                  color="primary"
                  className={classes.button}
                >
                  <SendIcon className={classes.rightIcon} />
                </Button>
              </Grid>
              <Grid item md={3} xs={2} />
            </Grid>
            <Grid item container justify="center">
              <Link className={classes.link} to="/cardList">
                Show All
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs />
      </Grid>
    )
  }
}

export default withStyles(styles)(CardInput)
