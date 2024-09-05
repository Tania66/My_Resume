import { Box } from "@mui/material"
import TodosForm from "../components/TodosForm/TodosForm"
import TodosList from "../components/TodosLIst/TodosList"


const Todos = () => {
  return (
    <Box sx={{py:"25px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
<TodosForm/>
<TodosList/>
    </Box>
  )
}

export default Todos
