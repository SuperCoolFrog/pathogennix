import React from 'react';
import { Router } from 'react-router-dom';
import './App.scss';
import Layout from '../Layout/Layout';
import history from '../../routes/history';
import Routes from '../../routes';
// import SignInWatcher from '../../components/SignInWatcher/SignInWatcher';
import ModalCollection from '../../components/ModalCollection/ModalCollection';

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Routes />
        <ModalCollection />
      </Layout>
    </Router>
  );
}

export default App;
