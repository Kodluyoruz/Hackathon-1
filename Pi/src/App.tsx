import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import FetchData from './components/FetchData';

import './custom.css'
import HackathonDetail from './Pages/HackathonDetail';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/iletisim' component={Contact} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/hackathondetail' component={HackathonDetail} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
