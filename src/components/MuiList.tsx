import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#d1d1d1" }}>
      <List>
        {/* normal list item without icon */}
        <ListItem>
          <ListItemText primary="List item 1 - without icon" />
        </ListItem>
        <Divider />

        {/* with icon */}
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary="List item 2 - with icon" />
        </ListItem>
        <Divider />

        {/* with avatar icon */}
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3 - with Avatar" />
        </ListItem>
        <Divider />

        {/* List item as button */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 4 - with Avatar" />
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* with secondary text */}
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText
            primary="List item 5 - with secondary text"
            secondary="secondary text"
          />
        </ListItem>
      </List>
    </Box>
  );
};
