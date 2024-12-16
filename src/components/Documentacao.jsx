import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useHotkeys } from 'react-hotkeys-hook';
import {Typography, ThemeProvider, CssBaseline, createTheme, Button } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Marko One',
            'sans-serif',
        ].join(','),
    },
});


const Documentacao = () => {
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
                          Informações Úteis
                      </Typography>
                  </div>
            
                  <div className = 'body' ref={bodyRef} style={{color: highContrast? "FFFF":'',  backgroundColor: highContrast ? '#050834' : '', minHeight: '100vh', padding: '3rem' }}>
                    <Typography variant="h5" paragraph style={{ marginBottom: '1rem' }}>
                      <strong style={{color: highContrast? "white" : 'rgba(92, 105, 114, 0.9)'}}>REFERÊNCIAS UTILIZADAS</strong>
                    </Typography>
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                      Para a atualização do site foram utilizadas referências bibliográficas que serviram de base para continuação e aprimoramento das informações disponíveis. Elas estão disponíveis nos links abaixo para download e consulta.
                    </Typography > 

                    <Typography variant="h5" paragraph style={{ marginBottom: '1rem' }}>
                      <strong style={{color: highContrast? "white" : 'rgba(92, 105, 114, 0.9)'}}>LINKS PARA DOWNLOAD</strong>
                    </Typography>
                      
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                     Para a criação e reformulação do site, foi utilizado de base o TCC de Sonaly Katly Garcia Nunes, <strong>disponível em:</strong>
                    </Typography > 
                    <Button  variant="contained" style={{marginLeft: '1rem',  marginBottom: '1rem'}}><a href="/tcc.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Download TCC</a></Button>
                    
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                     A Smart Campus e a CPROJ foram parcerias essenciais para o mapeamento de pontos de acessibilidade e disponibilização de relatórios que foram utilizados, disponibilizados logo abaixo:
                    </Typography > 
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                        <strong>Mapa Geral da UFCG:</strong>
                    </Typography > 
                    <Button  variant="contained" style={{marginLeft: '1rem',  marginBottom: '1rem'}}><a href="/mapa_geral.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Download Mapa Geral</a></Button>
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                      <strong>Relatório Acessibilidade UFCG - 2023</strong>
                    </Typography > 
                    <Button  variant="contained" style={{marginLeft: '1rem',  marginBottom: '1rem'}}><a href="/relatorio_geral.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Download Relatório Geral</a></Button>
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                      <strong>Relatório Final: Avaliação de desempenho de edifícios públicos de ensino superior</strong>
                    </Typography > 
                    <Button  variant="contained" style={{marginLeft: '1rem', marginBottom: '1rem'}}><a href="relatorio.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Download Relatório Final</a></Button>
                    <Typography variant="body1" paragraph style={{ marginBottom: '1rem', color: highContrast ? "#FFFFFF" : 'inherit', fontWeight: highContrast ? "bold": "normal" }}>
                      <strong>Avaliação de Acessibilidade, 2023</strong>
                    </Typography > 
                    <Button  variant="contained" style={{marginLeft: '1rem'}}><a href="relatorio.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Download Avaliação</a></Button>
                  </div>
                 
                
        </div>
      <Footer highContrast={highContrast}/>
    </ThemeProvider>
  );
}

export default Documentacao;