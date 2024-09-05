import { Box, Link, List, ListItem, Typography } from "@mui/material";
import photo from "../../assets/my_photo.jpg";

import { CiMail, CiPhone } from "react-icons/ci";

const MainInfo = () => {
  const myPhoto = photo;
  return (
    <Box
      sx={{
        py: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          pb: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "250px",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "24px", fontWeight: "700", mb: "10px" }}
          >
            Hello, I am <span className="span_name">Tania</span>
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: "18px", fontWeight: "400", mb: "10px" }}
          >
            Junior Frontend developer
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <List
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                p: 0,
                gap: "5px",
              }}
            >
              <ListItem sx={{ p: 0 }}>
                <Link
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  href="mailto:tania000sibiliova@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CiMail className="icon_footer" />
                  tania000sibiliova@gmail.com
                </Link>
              </ListItem>
              <ListItem sx={{ p: 0 }}>
                <Link
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  href="tel:+380968743973"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <CiPhone className="icon_footer" />
                  +38 (096) 87 43 973
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>

        <img className="my_photo" src={myPhoto} alt="MyPhoto" />
      </Box>
      <Typography variant="p" sx={{ fontSize: "16px", fontWeight: "400" }}>
        {" "}
        I am a Junior Frontend Developer, with knowledge of HTML, CSS,
        JavaScript, React and Vite. I have experience working on team projects,
        there were several of them and this is very good practice and
        experience. In both projects I was a developer, my task was to work on
        certain parts of the project. In the first one I improved my skills in
        HTML, CSS, and in another JavaScript. I learned to quickly correct my
        mistakes, as well as find solutions to technical problems that arose
        during work. This experience helped me not only improve my knowledge but
        also improve my communication skills. I like to study and learn new
        things.
      </Typography>
    </Box>
  );
};

export default MainInfo;
