
import {Button} from '@mui/material'
import styles from "./App.module.css"

function App() {
  console.log('styles :', styles)
  console.log('styles.button: ', styles.button)
  return (
    <div>
      <Button className={styles['button']}>global</Button>

      <Button id="text-buttons" variant="outlined" color="success" sx={{ml:'100px'}}>Text</Button>


      <div style={{height:'1000px'}}></div>
      <Button variant="outlined" color="error">Outlined</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button onClick={()=>{alert('clicked')}} color="error">경고</Button>
    </div>
  );
}

export default App;
