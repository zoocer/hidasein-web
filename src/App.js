import React from 'react'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './App.css'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'
import commonConfig from './utils/commonConfig'

import Welcome from './Welcome'
import CardList from './CardList'
import CardInput from './CardInput'
import CommonFooter from './components/CommonFooter'

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundColor: '#f9f9f9'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      talked: false,
      routeList: [
        {
          path: '/',
          commponent: Welcome
        }
      ]
    }
  }

  componentDidMount() {
    this.reqCheckTalkedApi();
  }

  // 请求判断是否发过talk接口
  reqCheckTalkedApi = () => {
    const apiUrl = `${commonConfig.apiDomain}/checkTalked`
    let { routeList } = this.state

    axios.get(apiUrl).then(res => {
      const { data } = res.data
      if (data.talked) {
        // 已发过
        routeList = [
          {
            path: '/',
            commponent: CardList
          }
        ]
      } else {
        // 没发过
        routeList = [
          {
            path: '/',
            commponent: CardInput
          },
          {
            path: '/cardList',
            commponent: CardList
          }
        ]
      }
      this.setState({
        routeList
      })
    })
  }

  render() {
    const { classes } = this.props
    const { routeList } = this.state

    return (
      <Router>
        <div className={classes.root}>
          <Switch>
            {
              routeList.map(item => (
                <Route key={item.path} path={item.path} exact component={item.commponent} />
              ))
            }
            {/* <Route path="/" exact component={Welcome} />
            <Route path="/cardInput" exact component={CardInput} />
            <Route path="/cardList" exact component={CardList} /> */}
            <Redirect from="*" to="/" />
          </Switch>
          <CommonFooter />
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
