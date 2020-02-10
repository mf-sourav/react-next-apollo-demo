import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default withApollo(
  ({ initialState }) => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://graphql-pokemon.now.sh/',
      }),
      cache: new InMemoryCache()
    });
    return client;
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props}  />
        </ApolloProvider>
      );
    }
  }
);