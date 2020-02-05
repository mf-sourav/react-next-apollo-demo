import React, {useState, useCallback} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery,useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import withApollo from './apollo-hoc'
import {GET_POKEMON_INFO} from '../src/gql-const'
import { Query } from '@apollo/react-components';
//
const APIKEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=c0e3bc1c'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
 //list component
function ShowList({results}){
  const classes = useStyles();
  return(
        <Grid
          container
          direction="row"
          spacing={3}
        >
          {results.map((data,i)=>(
            <Grid key={i}  item xs={6}>
              <Card className={classes.root}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={data.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.name}
                  </Typography>
                </CardContent>    
            </Card>
            </Grid>
          ))}         
        </Grid>
  )
 }
 //index main component
 function Index() {

  const classes = useStyles();
  
  const[val, setVal]= useState({
    str:'',
    results:[]
  });

  const handleInput = (e) => {
    let s = e.target.value;
    setVal(prevState => {
      return { ...prevState, str: s }
    });
  }

  //const { data, loading, error } =  useLazyQuery(GET_POKEMON_INFO);
  const [getPokemon, { loading, data }] = useLazyQuery(GET_POKEMON_INFO);
  return (
      <Container  maxWidth="sm">
      <Box my={4} >
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Grid
          container
          direction="row"
          spacing={3}
        >

          <Grid item xs={6}>
            <TextField id="outlined-basic" 
            label="Movie" 
            variant="outlined" 
            size="small" 
            onChange={handleInput}
            />
          </Grid>
          
          <Grid item xs={3}>
          <Button variant="contained" color="primary" onClick={() => getPokemon()} >
            submit
          </Button>
          </Grid>
         

        </Grid>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ShowList results={data ? data.pokemons : []} />      
      </Box>
    </Container>
    
  );
}
export default withApollo(Index)