import React, { useState, useEffect } from 'react';
import {
  Button, CardActions, Grid, Typography, makeStyles, Container, Grow,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getNoTokenRequest } from '../../helper/ApiRequests';
import GameDetailDialog from '../../components/GameDetailDialog';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [originalGames, setOriginalGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getNoTokenRequest('/games/original');
      setOriginalGames(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator,
              etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {originalGames.map((game) => (
              <Grow
                key={game.id}
                in
                style={{ transformOrigin: '0 0 0' }}
                {...({ timeout: 2000 })}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/collection/board-game"
                      title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {game.title}
                      </Typography>
                      <Typography>
                        {game.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <GameDetailDialog item={game} />
                      {/* <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button> */}
                    </CardActions>
                  </Card>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default HomePage;
