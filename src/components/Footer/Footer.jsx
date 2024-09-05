import { Box, Link, List, ListItem, Toolbar } from "@mui/material";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import schoolLogo from "../../assets/hillel-_it_school.png";

const Footer = () => {
  const logo = schoolLogo;
  return (
    <footer className="footer">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} alt="logoItHillel" className="footer_logo" />

        <Box  sx={{ display: "flex", alignItems: "center"}}>
          <List sx={{ display: "flex", alignItems: "center", p:0}}>
            <ListItem >
              <Link
                href="https://www.linkedin.com/in/tania-sibilova-2826321a8/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="icon_footer" />
              </Link>
            </ListItem>
            <ListItem >
              <Link
                href="https://github.com/Tania66"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="icon_footer" />
              </Link>
            </ListItem>
            <ListItem >
              <Link
                href="https://t.me/v_e_n_i_n_i"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTelegram className="icon_footer" />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </footer>
  );
};

export default Footer;
