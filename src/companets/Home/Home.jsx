import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/main";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const { pathname } = useLocation();

  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Box
        sx={{ width: "12%", position: "absolute", right: "20px", top: "70px" }}
      >
        <Collapse in={open}>
          <Alert severity="success">Home Page</Alert>
        </Collapse>
      </Box>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
