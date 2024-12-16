import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHotkeys } from 'react-hotkeys-hook';
import {Typography, ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Marko One',
            'sans-serif',
        ].join(','),
    },
});


const Mapa = () => {
    const bodyRef = useRef(null);


    useHotkeys('alt+1', () => {
        if (bodyRef.current) {
            const bodyTop = bodyRef.current.offsetTop;
            if (bodyTop !== undefined && bodyTop !== null) {
                window.scrollTo({ top: bodyTop, behavior: 'smooth' });
            }
        }
    });

    const [highContrast, setHighContrast] = useState();
   
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header highContrast={highContrast} setHighContrast={setHighContrast} />
        <div style={{position:'relative', width:'100%'}}>
                        
                <img
                    src="https://github.com/user-attachments/assets/dd860ef7-6fb5-4e32-8b4f-9b678e2b616f"
                    alt="Sobre a Iniciativa"
                    title="Pessoa lendo um livro"
                    style={{
                        width: '100%', 
                        height: '18vw', 
                        objectFit: 'cover', 
                        '@media (max-width: 600px)': { height: '60vw' },
                    }}
                />

                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(92, 105, 114, 0.35)',  
                            
                        }}
                />

                <Typography variant="h3" gutterBottom sx={{ color: highContrast ? "#FFFF00" : 'inherit', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:{ xs: '1.5rem', sm: '2rem', md: '3rem', lg: '3.5rem'}}}>
                    Mapa de acessibilidade
                </Typography>
        </div>
        <div className = 'body' ref={bodyRef} style={{   backgroundColor: highContrast ?  '#050834' : '', minHeight: '100vh', padding: '3rem' }}>
                <Typography variant="h5" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFF" : 'inherit' }}>
                        <strong style={{color: highContrast? "rgba(255,255,255, 0.9)" : 'rgba(92, 105, 114, 0.9)'}}>O mapa contém os principais pontos de acessibilidade presentes na UFCG.</strong>
                </Typography>
                <embed src="/mapa.pdf" type="application/pdf" width="100%" height="950px" />
                <Typography variant="h6" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFF" : 'inherit' }}>
                       Fonte: Smart Campus - UFCG, 2024.
                       Disponível em: <a href="https://front-end-inclui-ufcg.vercel.app/documentacao">Link do TCC</a>. 
                </Typography>
        </div>
      <Footer highContrast={highContrast}/>
    </ThemeProvider>
  );
}

export default Mapa;