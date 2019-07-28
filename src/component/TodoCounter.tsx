import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import okImage from './images/ok.jpg';
import busyImage from './images/busy.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    counterCard: {
      width: 280,
      marginTop: 10,
      marginRight: 20
    },
    counterMedia: {
      height: 200,
      margin: 0,
      marginTop: 10,
      marginBottom: 10
    }
  })
);

interface TodoCounterProps {
  count: number;
}

export default function TodoCounter(props: TodoCounterProps) {
  const count = props.count;
  const cardColor = count <= 3 ? green['100'] : red['A100'];
  const cardImage = count <= 3 ? okImage : busyImage;
  const classes = useStyles({});

  return (
    <Card className={classes.counterCard}>
      <CardContent style={{ backgroundColor: cardColor }}>
        <Typography variant="h6" gutterBottom>
          {count}個のタスクが残っています
        </Typography>
      </CardContent>
      <CardMedia className={classes.counterMedia} image={cardImage} />
    </Card>
  );
}
