import React from 'react';
import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from '@apollo/client';
import { BrowserRouter} from 'react-router-dom'
import Recipient from './components/Recipient/Recipient';
import { cache } from './cache';

const client = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com/',
  cache: cache
});

function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
          <Recipient />
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
