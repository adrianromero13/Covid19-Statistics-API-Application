import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import CountUp from 'react-countup';

// classnames
import cx from 'classnames';
// styling
import styles from './Card.module.css';

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitile }) => {
  <Grid item xs={12} md={3} component={Card} className={cx(styles.card, className)}>
    <CardContent>
      <Typography color='textSecondary' gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant='h5' component='h2'>
        <CountUp start={0} end={value} duration={3.5} separator=',' />
      </Typography>
      <Typography color='textSecondary'>
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant='body2' component='p'>
        {cardSubtitile}
      </Typography>
    </CardContent>
  </Grid>
};

export default CardComponent;