import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { CardContent } from '@material-ui/core'
import emojiFlags from 'emoji-flags'

const styles = {
  card: {
    minWidth: 200,
    maxWidth: 300
    // margin: 20
  },
  title: {
    fontSize: 18
  }
}

class HDCard extends React.Component {
  // console.log('card: ', card)
  flag(code) {
    if (code) {
      return emojiFlags.countryCode(code).emoji
    }
    return '🌍'
  }
  render() {
    const { card } = this.props
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardContent>
          <p>
            <span>{card.date}</span>
            <span role="img">{this.flag(card.code)}</span>
          </p>
          <Typography inline component="p">
            {card.content}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(HDCard)
