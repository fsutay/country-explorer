import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { Provider } from 'react-redux';
import { store } from './store/store';


const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 
      <ApolloProvider client={client}>
        <Provider store={store}>
        <App />
        </Provider>
      </ApolloProvider>

);

reportWebVitals();
