import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

function Notes() {
  return (
    <form>
    <div class="form-box" style={{border: "dotted pink 2vw"}} variant="outlined" gutterBottom>
    <label for="desc">Child Note:</label>
    <input placeholder="Your Note" maxlength="28" type="text" />
    <button type="submit">Submit</button>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
    </ListItem>
    <Divider variant="inset" component="li" />
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={
          <React.Fragment>
            {"PREVIOUS NOTES"}
          </React.Fragment>
        }
      />
      <Divider variant="inset" component="li" />
    </ListItem>
  </List>
  </div>
  </form>
  );
}

export default Notes;
