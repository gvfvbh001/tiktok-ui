import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRouters } from '~/router';
import DefaultLayout from '~/layouts/DefaultLayout';
import { ValueContext } from '~/hooks/useEventContext';

function App() {
    return (
        <ValueContext>
            <Router>
                <Routes>
                    {PublicRouters.map((route, index) => {
                        const Pages = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element=<Layout>
                                    <Pages />
                                </Layout>
                            />
                        );
                    })}
                </Routes>
            </Router>
        </ValueContext>
    );
}

export default App;
