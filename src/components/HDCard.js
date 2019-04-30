import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import FlagIcon from './FlagIcon'

const styles = {
  card: {
    minWidth: 200,
    margin: 20
  },
  title: {
    fontSize: 18
  }
}

function HDCard(props) {
  const { card } = props
  console.log('card: ', card)
  return (
    <Card>
      <CardContent>
        <p>
          <span>{card.date}</span>
          <FlagIcon code={card.code} size="lg" />
        </p>
        <span>{card.content}</span>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(HDCard)
