import gql from "graphql-tag";
const GET_POKEMON_INFO = gql`
{
    pokemons(first: 50) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }`;
const GET_POKEMON = gql`
{
    pokemons(first:1) {
      id
      number
      name,
      image,
      evolutions {
        id,
        number,
        name,
        image
      }
    }
  }`
export {GET_POKEMON_INFO,GET_POKEMON}