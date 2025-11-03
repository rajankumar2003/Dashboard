import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";



const Header = ({ title, open, setOpen }) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <div style={{ display: "flex", flexDirection: "column", padding: "32px", gap: "16px", minWidth: "120px" }}>
        <Button
          component={Link}
          to="/profile"
          sx={{
            marginBottom: 2,
            backgroundColor: "#673ab7",
            color: "white",
            fontWeight: "bold",
            '&:hover': { backgroundColor: "#512da8" },
            borderRadius: 2
          }}
          variant="contained"
          fullWidth
        >
          Profile
        </Button>
        <Button
          component={Link}
          to="/"
          sx={{
            backgroundColor: "#2196f3",
            color: "white",
            fontWeight: "bold",
            '&:hover': { backgroundColor: "#1565c0" },
            borderRadius: 2
          }}
          variant="contained"
          fullWidth
        >
          Dashboard
        </Button>
      </div>
    </Drawer>
  </>
);

export default Header;
