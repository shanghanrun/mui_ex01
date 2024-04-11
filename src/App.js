
import './App.css';
import {Button} from '@mui/material'
import { CustomButton } from './CustomButton.style';


function App() {
  return (
    <div>
      <CustomButton variant="contained" disableRipple={true}
        border="blue"
      >Contained</CustomButton>
      <Button variant="contained" disableElevation
        color="secondary">Contained</Button>
      <Button id="text-buttons" color="success">Text</Button>
      <div style={{height:'1000px'}}></div>
      <Button variant="outlined" color="error">Outlined</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button onClick={()=>{alert('clicked')}} color="error">경고</Button>
    </div>
  );
}

export default App;
