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


const Iniciativa = () => {
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
                          backgroundColor: highContrast? 'FFFFF': 'rgba(92, 105, 114, 0.35)',  
                         
                        }}
                      />
            
                      <Typography variant="h3" gutterBottom sx={{ color: highContrast ? "#FFFF" : 'inherit', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', color:'white', fontSize:{ xs: '1.5rem', sm: '2rem', md: '3rem', lg: '3.5rem'}}}>
                          Sobre a Iniciativa
                      </Typography>
                  </div>
            
                  <div className = 'body' ref={bodyRef} style={{color: highContrast? "FFFF":'',  backgroundColor: highContrast ? '#050834' : '', minHeight: '100vh', padding: '3rem' }}>
                    <Typography variant="h5" paragraph style={{ marginBottom: '1rem' }}>
                        <strong style={{color: highContrast? "white" : 'rgba(92, 105, 114, 0.9)'}}>SOBRE O PROJETO</strong>
                    </Typography>
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                        O projeto IncluiUFCG foi desenvolvido, inicalmente, pela estudante de graduação do curso de Computação <strong>Sonaly Katly Garcia Nunes</strong>, intitulado: PROMOVENDO A INCLUSÃO EDUCACIONAL: UMA PLATAFORMA WEB
                        ACESSÍVEL PARA APOIO A ESTUDANTES DA UFCG., com a pesquisa, foi possível aprimorar e adicionar novas funcionalidades com a continuidade do projeto, desenvolvido pelas estudantes <strong>Aline Brito Maracajá</strong> e <strong>Daniele de Oliveira Sousa</strong>, orientadas pela professora <strong>Joseana Macêdo Fechine Regis</strong>.

                    </Typography > 
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                        Tendo por objetivo principal garantir a disseminação de informações sobre acessibilidade na UFCG, além de trazer dados disponíveis para a comunidade acadêmica, com informações específicas como mapa de acessibilidade da universidade e previsões baseadas em métricas.

                    </Typography >  

                    <Typography variant="h5" paragraph style={{ marginBottom: '1rem' }}>
                        <strong style={{color: highContrast? "white" : 'rgba(92, 105, 114, 0.9)'}}>REFERÊNCIA</strong>
                    </Typography> 

                    <Typography variant="h5" paragraph style={{ marginBottom: '1rem', fontSize: '1rem'}}>
                        SONALY KATLY GARCIA NUNES PROMOVENDO, A INCLUSÃO EDUCACIONAL: UMA PLATAFORMA WEB ACESSÍVEL PARA APOIO A ESTUDANTES DA UFCG. [s.l: s.n.]. Disponível em: <a href="http://dspace.sti.ufcg.edu.br:8080/jspui/bitstream/riufcg/38329/1/SONALY%20KATLY%20GARCIA%20NUNES-ARTIGO-CEEI-CI%C3%8ANCIA%20DA%20COMPUTA%C3%87%C3%83O%20%282024%29.pdf">Link do TCC</a>. 
                    </Typography>  
                     
                  </div>
                 
                
        </div>
      <Footer highContrast={highContrast}/>
    </ThemeProvider>
  );
}

export default Iniciativa;