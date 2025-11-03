import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button, Typography, Container } from "@mui/material";
import Header from "../components/Header"; // import Header

const Profile = () => {
  const { email, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header title="Profile" open={open} setOpen={setOpen} />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Profile</Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {email ?? "Not loaded"}
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }} onClick={logout}>
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Profile;
