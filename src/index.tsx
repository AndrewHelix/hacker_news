import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';

// Store
import { store } from './store';

// Components
import App from './components/App/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
