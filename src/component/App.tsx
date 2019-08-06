import React, { useState, useEffect } from 'react';
import axiosbase from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import TabContainer from './TabContainer';
import Sidebar from './Sidebar';

export default function App() {
  const [screenNames, setScreenNames] = useState<string[]>([]);

  // constructor
  useEffect(() => {
    // 参考: https://t-kojima.github.io/2018/06/19/0016-xhr-fetch-to-axios/
    const axios = axiosbase.create({
      baseURL: 'http://localhost:4000',
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json'
    });

    axios
      .get('/api/v1/screens/index')
      .then(res => res.data.map(screen => screen.name))
      .then(names => setScreenNames(names));
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Sidebar screenNames={screenNames} />
      <TabContainer />
    </>
  );
}
