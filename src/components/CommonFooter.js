import React from 'react'
import axios from 'axios'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import commonConfig from '../utils/commonConfig'
import getFlag from '../utils/getFlag'

const styles = theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 14,
    color: '#333333',
    '& .container': {
      position: 'relative',
      padding: '0 10%'
    },
    '& .text-version': {
      textAlign: 'center'
    },
    '& .country-info': {
      position: 'absolute',
      right: '10%',
      bottom: 0
    }
  }
})
class CommonFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clientGeoInfo: null,
    }
  }

  componentDidMount() {
    this.reqGeoApi()
  }

  reqGeoApi = () => {
    const apiUrl = `${commonConfig.apiDomain}/clientGeo`
    axios.get(apiUrl).then(res => {
      const { data } = res.data
      this.setState({
        clientGeoInfo: data
      })
    })
  }

  render() {
    const { classes } = this.props
    const { clientGeoInfo } = this.state
    const localCountryInfo = getFlag(clientGeoInfo && clientGeoInfo.country)

    return (
      <footer className={classes.footer}>
        <div className="container">
          <Typography variant="body1" className="text-version">
            © {new Date().getFullYear()} HiDasein.
          </Typography>
          <span className="country-info">
            <span role="img">{localCountryInfo.img}</span>
            <span>{localCountryInfo.name}</span>
          </span>
        </div>
      </footer>
    )
  }
}

export default withStyles(styles)(CommonFooter)
