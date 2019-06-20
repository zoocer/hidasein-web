import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    cursor: 'pointer',
    '& .circle-bot': {
      backgroundColor: '#2D0806',
      width: '40px',
      height: '40px',
      margin: 0,
      borderRadius: '50%'
    },
    '& .circle-mid': {
      backgroundColor: '#fff',
      width: '26px',
      height: '26px',
      margin: '-33px 0 0 7px',
      borderRadius: '50%'
    },
    '& .circle-top': {
      backgroundColor: '#2D0806',
      width: '20px',
      height: '20px',
      margin: '-23px 0 0 10px',
      borderRadius: '50%'
    },
  },
})

class SendButton extends React.Component {
  // 默认props
  static propTypes = {
    handleClickCb: PropTypes.func,
  };
  static defaultProps = {
    // 点击回调
    handleClickCb: () => {},
  };

  onClickBtn = () => {
    this.props.handleClickCb();
  }

  render() {
    const { classes } = this.props

    return (
      <div
        onClick={() => this.onClickBtn()}
        className={classes.root}
      >
        <div className="circle-bot"></div>
        <div className="circle-mid"></div>
        <div className="circle-top"></div>
      </div>
    )
  }
}

export default withStyles(styles)(SendButton)
