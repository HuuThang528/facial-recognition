import * as React from "react";
import * as ReactDOM from "react-dom";
import Dashboard from './Dashboard';
import './styles/index.scss';
import { ApolloProvider } from 'react-apollo'
import client from './modules/apolloClient'
class App extends React.Component {
  render() {
    return(
      <ApolloProvider client={client}>
        <Dashboard></Dashboard>
      </ApolloProvider>
    )
  }
}

export default App