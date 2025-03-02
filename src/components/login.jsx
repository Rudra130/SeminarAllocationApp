import React from "react";
import { 
  Container,
  Card, 
  Typography,
  TextField,
  Button, 
  Box, 
  Link,
  Grid 
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";

const LoginPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt:10 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#222", color: "#fff", p: 1, borderRadius: "8px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>ABES ENGINEERING COLLEGE</Typography>
          <Typography variant="h6">Campus Hall Booking</Typography>
        </Box>

        <Card sx={{ mt: 3, boxShadow: 3 }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
                Login
              </Typography>

              <TextField 
                fullWidth 
                label="Email ID" 
                variant="outlined" 
                margin="normal" 
                InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }} 
              />
              <TextField 
                fullWidth 
                label="Password" 
                type="password" 
                variant="outlined" 
                margin="normal" 
                InputProps={{ startAdornment: <Lock sx={{ mr: 1 }} /> }} 
              />

              <Button 
                fullWidth 
                variant="contained" 
                color="primary" 
                sx={{ mt: 2, fontSize: "16px", textTransform: "none" }}
              >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{ bgcolor: "#f5f5f5", p: 4 }}>
              <Typography variant="h6" fontWeight="bold">📌 Instructions:</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>  
                • If you have already registered using your student email ID, you can log in and book halls.  
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                • If you haven’t registered yet, <Link href="#">click here</Link> to register through your student email ID.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                • If you face any issues logging in, please contact us at <Link href="mailto:studenthelp@gmail.com">studenthelp@gmail.com</Link>.
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Box sx={{ textAlign: "center", mt: 2, color: "#555" }}>
          <Typography variant="body2">© 2025 Campus Hall Booking System | Developed by ❤️ Cherry Team</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;

