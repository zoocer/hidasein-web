import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { CardContent, Card, Grid } from '@material-ui/core'
import moment from 'moment'
import getFlag from '../utils/getFlag'

const styles = {
  card: {
    fontSize: 14,
    color: '#333',
    '& .text-time': {
      fontFamily: 'STSongti-SC-Bold'
    },
    '& .text-content': {
      fontFamily: 'STSongti-SC-Regular',
      wordBreak: 'break-word'
    }
  }
}

class HDCard extends React.Component {
  dateFormat(date) {
    return moment(date).format('YYYY·M·D HH:mm')
  }
  render() {
    const { card, classes } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={9}>
              <span className="text-time">{this.dateFormat(card.date)}</span>
            </Grid>
            <Grid item container xs={3} justify="flex-end">
              <span role="img">{getFlag(card.code).img}</span>
            </Grid>
          </Grid>
          <Typography component="p" className="text-content">
            {card.content}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(HDCard)
