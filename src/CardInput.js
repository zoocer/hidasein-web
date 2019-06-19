import React from 'react'
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import * as _ from 'lodash'
import axios from 'axios'

import { getCodes } from 'country-list'
import commonConfig from './utils/commonConfig'
import HDTextField from './components/HDTextField'

const styles = theme => ({
  root: {
    position: 'relative',
    top: '25vh'
  },
  title: {
    color: '#2D0706',
    fontFamily: 'STSongti-SC-Regular'
  },
  inputWrap: {
    marginTop: '150px',
    position: 'relative'
  },
  sendBtn: {
    position: 'absolute',
    right: 0,
    bottom: '15px'
  },
  loadingWrap: {
    width: '100%',
    textAlign: 'center'
  }
})

class CardInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 输入框
      currentInput: '',
      // loadding状态
      loaddingStatus: false
    }
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
    const { currentInput, loaddingStatus } = this.state
    if (currentInput === '' || loaddingStatus) {
      return
    }

    this.setState({
      loaddingStatus: true
    })
    const url = `${commonConfig.apiDomain}/talks`
    axios
      .post(url, {
        content: currentInput
      })
      .then(res => {
        this.setState({
          loaddingStatus: false
        })
        const { data } = res;
        if (data.code === 200) {
          this.setState({
            currentInput: ''
          })
          this.props.history.push('/cardList')
        } else {
          alert(data.msg || commonConfig.errMsg)
        }
      })
  }

  render() {
    const { classes } = this.props
    const { loaddingStatus } = this.state

    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.root}>
          <Typography className={classes.title} variant="h2">
            Hi Dasein:
          </Typography>

          <div className={classes.inputWrap}>
            <HDTextField
              value={this.state.currentInput}
              onChange={event => this.handleInput(event)}
            />
            <Button
              variant="contained"
              onClick={event => this.handleClickButton(event)}
              color="primary"
              className={classes.sendBtn}
            >
              <SendIcon />
            </Button>
          </div>
          {/* <Link className={classes.link} to="/cardList">
            Show All
          </Link> */}
        </Container>
        {
          loaddingStatus &&
          <div className={classes.loadingWrap}>
            <CircularProgress />
          </div>
        }
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CardInput)
