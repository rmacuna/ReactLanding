import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';

const App = asyncComponent({
    resolve: () => import('./App')
});

const PerfomanceTest = asyncComponent({
    resolve: () => import('./pages/PerfomanceTest')
});

class AppRouter extends PureComponent {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/perfomance' component={PerfomanceTest} />
                </Switch>
            </Router>

        );
    }
}

export default AppRouter;
