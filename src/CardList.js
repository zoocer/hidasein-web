import React from 'react'
import * as _ from 'lodash'
import axios from 'axios'

import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import commonConfig from './utils/commonConfig'

import InfiniteScroll from 'react-infinite-scroller'
import HDCard from './components/HDCard'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    padding: '5% 10%'
  },
  card: {
    whiteSpace: 'nowrap'
  },
})
class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      pageSize: 10,
      cards: [],
      hasMore: true,
      loadingStatus: false,
    }
  }

  loadNextPage = () => {
    const apiUrl = `${commonConfig.apiDomain}/talks`
    const { page, pageSize, cards, loadingStatus } = this.state

    if (loadingStatus) {
      return
    }

    this.setState({
      loadingStatus: true
    }, () => {
      const reqData = {
        page,
        pageSize
      }
      axios.get(apiUrl, {
        params: reqData,
      }).then(res => {
        const { data } = res.data
        this.setState({
          cards: _.concat(cards, data),
          page: page + 1,
          hasMore: data.length >= pageSize,
          loadingStatus: false
        })
      })
    })
  }

  render() {
    const { cards, hasMore } = this.state
    const { classes } = this.props
    const loader = (
      <CircularProgress key={0} />
    )
    const fade = true
    let time = 0
    return (
      <Grid className={classes.root}>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadNextPage}
          hasMore={hasMore}
          loader={loader}
        >
          <Grid
            container
            spacing={3}
          >
            {cards.map(card => {
              time += 200
              return (
                <Fade key={card._id} in={fade} timeout={time}>
                  <Grid item xs={12} md={3}>
                    <HDCard className={classes.card} card={card} />
                  </Grid>
                </Fade>
              )
            })}
          </Grid>
        </InfiniteScroll>
      </Grid>
    )
  }
}

export default withStyles(styles)(CardList)
