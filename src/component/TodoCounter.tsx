import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import okImage from './images/OK.jpg';
import busyImage from './images/busy.jpg';

const styles = {
  counterCard: {
    width: 250,
    marginTop: 10,
    marginRight: 20
  },
  counterMedia: {
    height: 200,
    margin: 0,
    marginTop: 10,
    marginBottom: 10
  }
};

interface TodoCounterProps {
  count: number;
  classes: any;
}

const TodoCounter = (props: TodoCounterProps) => {
  const { count, classes } = props;
  const cardColor = count <= 3 ? green['100'] : red['A100'];
  const cardImage = count <= 3 ? okImage : busyImage;

  return (
    <Card className={classes.counterCard}>
      <CardContent
        className={classes.counterContent}
        style={{ backgroundColor: cardColor }}
      >
        <Typography variant="headline" gutterBottom>
          {count}個のタスクが残っています
        </Typography>
      </CardContent>
      <CardMedia className={classes.counterMedia} image={cardImage} />
    </Card>
  );
};

export default withStyles(styles)(TodoCounter);
