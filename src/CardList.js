import Grid from '@material-ui/core/Grid'
import HDCard from './components/HDCard'
import React from 'react'
import * as _ from 'lodash'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9'
  },
  card: {
    height: 300,
    width: 200
  },
  link: {
    margin: '40px 0 0 20px'
  }
})
class CardList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      hasMore: true,
      cards: []
    }
  }

  componentWillMount() {
    this.loadNextPage()
  }

  loadNextPage() {
    let baseUrl = 'http://localhost:4141/talks'
    const page = this.state.page
    const requestUrl = baseUrl + '?page=' + page
    let cards = this.state.cards || []

    axios.get(requestUrl).then(res => {
      const { data } = res.data
      if (data.length === 0) {
        this.setState({
          hasMore: false
        })
      } else {
        this.setState({
          cards: _.concat(cards, data),
          page: page + 1
        })
      }
    })
  }

  render() {
    let cards = this.state.cards
    const { classes } = this.props
    // const loader = (
    //   <div>
    //     <span>Loading...</span>
    //   </div>
    // )
    const fade = true
    let time = 0
    return (
      <Grid className={classes.root}>
        <Link className={classes.link} to="/">
          Back
        </Link>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadNextPage.bind(this)}
          // loader={loader}
          hasMore={this.state.hasMore}
        >
          <Grid
            container
            className={classes.root}
            justify="center"
            alignItems="center"
            direction="row"
            spacing={6}
          >
            {cards.map(card => {
              time += 200
              return (
                <Fade key={card._id} in={fade} timeout={time}>
                  <Grid item>
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
