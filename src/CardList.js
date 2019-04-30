import Grid from '@material-ui/core/Grid'
import HDCard from './components/HDCard'
import React from 'react'
import * as _ from 'lodash'
import axios from 'axios'

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
      console.log('load cards: ', res)
      this.setState({
        cards: res.data
      })
    })
  }

  render() {
    let cards = this.state.cards

    return (
      <Grid container justify="center" alignItems="flex-start" spacing={32}>
        {cards.map(card => {
          return <HDCard card={card} />
        })}
      </Grid>
    )
  }
}

export default CardList
