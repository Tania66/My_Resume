import SwapiForm from "../components/SwapiForm/SwapiForm";
import { Box } from "@mui/material";
import ClearButtonSwapi from "../components/ClearButtonSwapi/ClearButtonSwapi";
import SwapiList from "../components/SwapiList/SwapiList";

const Swapi = () => {



  return (
    <Box sx={{py:"25px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <SwapiForm/>
      <SwapiList/>
 <ClearButtonSwapi/>
    </Box>
  )
}

export default Swapi
