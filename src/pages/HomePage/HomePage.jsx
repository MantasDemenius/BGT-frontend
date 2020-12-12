import React, { useState, useEffect } from 'react';
import {
  CardActions, Grid, Typography, makeStyles, Container, Grow, Snackbar, CircularProgress,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import { getNoTokenRequest, deleteRequest } from '../../helper/ApiRequests';
import GameDetailDialog from './GameDetailDialog';
import { removeItemFromArrayById } from '../../helper/HelperFunctions';

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
  loading: {
    display: 'flex',
    minHeight: '60vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [originalGames, setOriginalGames] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    async function fetchOriginalGames() {
      const response = await getNoTokenRequest('/games/original');
      setOriginalGames(response.data);
    }
    fetchOriginalGames();
  }, []);

  if (!originalGames) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleDeleteGame = (id) => {
    async function fetchDeleteGame() {
      const response = await deleteRequest(`/games/${id}`);
      if (response.status === 'OK') {
        setOriginalGames(removeItemFromArrayById(originalGames, id));
        handleSnackbarOpen('Game was successfully deleted');
      } else {
        handleSnackbarOpen('This game has translations, please delete the translations first!');
      }
    }
    fetchDeleteGame();
  };

  return (
    <>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={6000}
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
          />
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
                        {game.title.slice(0, 20)}
                      </Typography>
                      <Typography>
                        {game.description.slice(0, 70)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <GameDetailDialog item={game} handleDeleteGame={handleDeleteGame} />
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
