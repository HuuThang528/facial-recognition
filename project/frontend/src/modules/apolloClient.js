import {
  ApolloClient,
  createBatchingNetworkInterface,
} from 'react-apollo'

const networkInterface = createBatchingNetworkInterface({
  uri: 'http://127.0.0.1:8000/gql',
  batchInterval: 10,
  opts: {
    credentials: 'same-origin',
  },
})

networkInterface.use([
  {
    applyBatchMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }

      const token = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null
      req.options.headers['authorization'] = `JWT ${token}`
      next()
    },
  },
])

export default new ApolloClient({
  networkInterface: networkInterface,
})