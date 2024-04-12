import {createTheme} from '@mui/material'
import { globalColors } from './globalColors'

export let theme = createTheme({
	palette:{
		primary:{
			main: globalColors.blue['100'],
			light:globalColors.blue.good,
			dark: 'black',
			contrastText:'red'
		}
	},
	components:{
			MuiButton:{
				defaultProps:{
					variant:'contained',
					size:'large',
					color:'primary',
					disableRipple:true
				},
				styleOverrides:{
					root:{
						fontSize:'20px',
						marginTop:"10px",
						// backgroundColor:"orange",
						// "&:hover":{backgroundColor:'#ff2600'},
						// "@media (max-width:600px)": {
						// 	background:"grey"
						// }
					}
				}
			}
		}

})