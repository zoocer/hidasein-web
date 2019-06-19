import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CardContent, Card, Grid } from '@material-ui/core'
import emojiFlags from 'emoji-flags'
import moment from 'moment'

const styles = {
  card: {
    minWidth: 150,
    maxWidth: 300,
    fontFamily: 'Times New Roman'
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
  dateFormat(date) {
    return moment(date).format('YYYY·M·D  HH:mm')
  }
  render() {
    const { card } = this.props
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={9}>
              <span>{this.dateFormat(card.date)}</span>
            </Grid>
            <Grid item container xs={3} justify="flex-end">
              <span role="img">{this.flag(card.code)}</span>
            </Grid>
          </Grid>
          <Typography component="p">
            {card.content}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(HDCard)
