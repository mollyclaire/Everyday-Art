import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Redirect } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const renderRedirect = () => {
    
      return <Redirect to='/saved' />
    
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        console.log(event)
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
      <BottomNavigationAction label="Saved" icon={<FavoriteIcon />} />
      {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
    </BottomNavigation>
  );
}