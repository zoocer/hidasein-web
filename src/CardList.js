import Grid from '@material-ui/core/Grid'
import HDCard from './components/HDCard'
import React from 'react'
import * as _ from 'lodash'
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#e2e2e2'
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
      cards: []
    }
  }

  componentWillMount() {
    let url = 'http://localhost:4141/talks'
    axios.get(url).then(res => {
      this.setState({
        cards: res.data
      })
    })
  }

  render() {
    let cards = this.state.cards
    const { classes } = this.props

    const fade = true
    let time = 0
    return (
      <Grid>
        <Link className={classes.link} to="/">
          Back
        </Link>
        <Grid
          container
          className={classes.root}
          justify="center"
          alignItems="center"
          direction="row"
          spacing={32}
        >
          {cards.map(card => {
            time += 200
            return (
              <Fade in={fade} timeout={time}>
                <Grid item>
                  <HDCard className={classes.card} card={card} />
                </Grid>
              </Fade>
            )
          })}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(CardList)
