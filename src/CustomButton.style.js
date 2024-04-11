import {Button} from '@mui/material'
import styled from '@emotion/styled'

export const CustomButton = styled(Button)(()=>({
  fontSize:'2rem', backgroundColor:'red', mt:'20px',
            "&:hover":{backgroundColor:'orange'},
            "@media (max-width:600px)": {
              background:"grey"
            }
}))