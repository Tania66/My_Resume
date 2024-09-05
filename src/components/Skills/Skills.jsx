import React from "react";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import logovite from "../../assets/vite.svg";

import { Box, List, ListItem, Typography } from "@mui/material";
const Skills = () => {
  const vite = logovite;
  return (
    <Box sx={{ py: "25px" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          mb: "15px",
          textAlign: "center",
        }}
      >
        Skills
      </Typography>

      <List
        sx={{
          display: "flex",
          alignItems: "center",
          p: 0,
          justifyContent: "space-between",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <FaReact size={35} color="#03f0fc" />
          <Typography variant="p">React</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <FaGitAlt size={35} color="#fc0f03" />
          <Typography variant="p">Git</Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <IoLogoJavascript size={35} color="#fcfc1e" />
          <Typography variant="p">Javascript </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <SiMongodb size={35} color="#06bf66" />
          <Typography variant="p">Mongodb </Typography>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <img className="skill_vite_svg" src={vite} alt="logoes6" />
          <Typography variant="p">Vite </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Skills;
