
import { List,ListItem,Toolbar,Box} from '@mui/material';
import { NavLink } from "react-router-dom"
import ButtonTheme from "../../features/ButtonTheme/ButtonTheme"





const Header = () => {

  return (
    <>
        <header className="header">
        <Toolbar  >

          <Box sx={{ flexGrow: 1, display:'flex', alignItems:"center"}}>
          <List sx={{ display:'flex',alignItems:"center" }}>
            <ListItem>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/" end>Home</NavLink>
            </ListItem>
            <ListItem>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/todos">Todos</NavLink>
            </ListItem>
            <ListItem>
                <NavLink className={({ isActive }) => (isActive ? 'active' : 'header_nav_link')} to="/swapi">Swapi</NavLink>
            </ListItem>
        </List>
          </Box>



          <Box sx={{ flexGrow: 0, display:"flex", alignItems:"center"}}>
          <ButtonTheme/>
          </Box>
        </Toolbar>
    </header>
    </>
  )
}

export default Header
