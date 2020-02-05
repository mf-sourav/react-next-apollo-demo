import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import withApollo from './apollo-hoc'

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http3000s://graphql-pokemon.now.sh/',
//   fetch: fetch
// })
// const client = new ApolloClient({
//   cache,
//   link
// })

function results() {
    const { data, loading, error } = useQuery(GET_POKEMON_INFO);
    return (
        <div>
            hiii
              {console.log(data, 'data')}
              {console.log(error, 'error')}
        </div>
      

    )
}

export default withApollo(results);
