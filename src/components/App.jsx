import React from 'react';
import { useSelector } from 'react-redux';
import { selectTab } from '../selectors/app';
import { HOMEPAGE, PAGE } from '../constants';

import Container from "@mui/material/Container";
import Box from "@mui/material/Box"

import Header from './Header';
import Home from './Home'
import Page from './Page'

const App = () => {
  const tab = useSelector(selectTab);

  return (
    <Box sx={{ }}>
      <Container disableGutters maxWidth={false}>
        <Header />
        {
          (() => {
            switch (tab) {
              case HOMEPAGE:
                return <Home />
              case PAGE:
                return <Page />
              default:
                return null
            }
          })()
        }
      </Container>
    </ Box>
);
}

export default App;
