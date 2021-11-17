import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import NavBar from '../components/NavBar';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const { onDrawerToggle } = props;

  return (
    <React.Fragment>
      {/* <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
           
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> */}
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <NavBar />
        {/* <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
            </Grid> */}
            {/* <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Log out
              </Button>
            </Grid> */}
            {/* <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid> */}
          {/* </Grid>
        </Toolbar> */}
        <NavBar />
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;