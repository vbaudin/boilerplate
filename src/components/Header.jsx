import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab, AppBar, Box, Toolbar } from "@mui/material"

import { selectTab } from '../selectors/app';
import { changeTab } from '../ducks/app'
import { HOMEPAGE, PAGE } from '../constants';

const Header = () => {
  const tab = useSelector(selectTab);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ }}>
        <Toolbar sx={{  }}>
          <Tabs
            value={tab}
            onChange={(_, tab) => dispatch(changeTab(tab))}
            textColor="white"
            indicatorColor="white"
          >
            <Tab 
              value={HOMEPAGE}
              label={HOMEPAGE}
            />
            <Tab 
              value={PAGE}
              label={PAGE}
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header