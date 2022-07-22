/* eslint-disable */ 
import * as React from 'react';
import Button from '@mui/material/Button';
import {ThemeProvider} from '@mui/material/styles'
import theme from './temaConfig';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Portfolio from './components/portfolio/Portfolio'
import Music from './components/music/Music'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Typography } from '@mui/material';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Portfolio />
      <Music />
      <Contact />
      <Footer />
    </>
    
    /* <ThemeProvider theme={theme}>
      <Typography variant='h1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo quidem reprehenderit nisi. Quae repudiandae, pariatur magni eum facilis, quidem praesentium sunt consectetur laborum commodi saepe voluptas cumque placeat ullam?
      </Typography>
    </ThemeProvider> */
  );
}

export default App;
