import React, {useState, useEffect} from 'react'

import {createTheme, ThemeProvider} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from './Routes';

function App() {

  const getPaletteType = () => {
    return JSON.parse( localStorage.getItem('palette') || true ) ;
  }

  const [paletteType, setPaletteType] = useState(getPaletteType()); 

  useEffect(() => {
    localStorage.setItem('palette', paletteType); 
  }, [paletteType])

  const theme = createTheme({
    palette: {
      primary: {
        light: '#1E88F9', 
        main: '#0089E1',
        dark: '#245992'
      },
      error: {
        main: '#fff'
      },
      secondary: {  
        light: '#757575', 
        main: '#616161',
        dark: '#424242'
      }, 
      background: {
        default: paletteType? '#EEEEEE' : '#303030',
      },
      type: paletteType? 'light' : 'dark', 
    },
    typography: {
      fontFamily: 'Poppins', 
      fontWeightLight: 300, 
      fontWeightRegular: 400, 
      fontWeightMedium: 500, 
      fontWeightBold: 600
    }, 
    
  });


  return (
    <div>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
        <Routes paletteType={paletteType} setPaletteType={setPaletteType} />
      </ThemeProvider>
    </div>
  );
}

export default App;
