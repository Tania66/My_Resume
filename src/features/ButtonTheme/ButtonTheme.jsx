import  { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext';
import { ImSun } from "react-icons/im";
import { LuMoon } from "react-icons/lu";
const ButtonTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button type='button' onClick={() => toggleTheme()}> {theme === 'darkTheme' ? (
     <LuMoon size={24} color='#7E8FDD' />
  
      ) : (
        <ImSun size={24} color='#535bf2'/>
      
      )}</button>
    </div>
  )
}

export default ButtonTheme
