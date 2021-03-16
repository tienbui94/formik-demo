import './styles/App.css';
import Layout from './layout/layout';
import routes from './routes';
import { Route } from 'react-router-dom';
function App() {
    return (
        <Layout>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} exact />
            ))}
        </Layout>
    );
}

export default App;
