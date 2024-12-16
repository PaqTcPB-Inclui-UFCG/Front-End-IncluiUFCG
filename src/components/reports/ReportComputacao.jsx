import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import * as XLSX from 'xlsx';
import {Button } from '@mui/material';

const ReportComputacao = () => {
  const [data, setData] = useState([]);
  const [chartsData, setChartsData] = useState({
    alunosPorCota: [],
    alunosDeficienciaPorCota: [],
    ingressantesGenero: [],
    ingressantesRaca: [],
    deficientesPorGenero: [],
    deficientesPorRaca: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/dados.csv'); 
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setData(jsonData);
      processChartsData(jsonData);
    };

    fetchData();
  }, []);

  const processChartsData = (data) => {
    if (data.length < 2) return;

    const headers = data[0];
    const rows = data.slice(1);

    const cotaIndex = headers.indexOf('politica_afirmativa');
    const alunosPorCota = aggregateData(rows, cotaIndex);

    const deficienciaIndex = headers.indexOf('prac_deficiente');
    const alunosDeficienciaPorCota = rows
      .filter(row => row[deficienciaIndex] === 'Sim')
      .map(row => row[cotaIndex])
      .reduce((acc, cota) => {
        acc[cota] = (acc[cota] || 0) + 1;
        return acc;
      }, {});

    const generoIndex = headers.indexOf('genero');
    const ingressantesGenero = aggregateData(rows, generoIndex);

    const deficientesPorGenero = rows
      .filter(row => row[deficienciaIndex] === 'Sim')
      .reduce((acc, row) => {
        const key = row[generoIndex];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

    const racaIndex = headers.indexOf('cor');
    const ingressantesRaca = aggregateData(rows, racaIndex);

    const deficientesPorRaca = rows
      .filter(row => row[deficienciaIndex] === 'Sim')
      .reduce((acc, row) => {
        const key = row[racaIndex];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

    setChartsData({
      alunosPorCota: [['Cota', 'Quantidade'], ...Object.entries(alunosPorCota)],
      alunosDeficienciaPorCota: [['Cota', 'Quantidade'], ...Object.entries(alunosDeficienciaPorCota)],
      ingressantesGenero: [['Gênero', 'Quantidade'], ...Object.entries(ingressantesGenero)],
      ingressantesRaca: [['Raça', 'Quantidade'], ...Object.entries(ingressantesRaca)],
      deficientesPorGenero: [['Gênero', 'Quantidade'], ...Object.entries(deficientesPorGenero)],
      deficientesPorRaca: [['Raça', 'Quantidade'], ...Object.entries(deficientesPorRaca)],
    });
  };

  const aggregateData = (rows, index) => {
    return rows.reduce((acc, row) => {
      const key = row[index];
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Análise focada no curso de Ciência da Computação</h1>
      <Button  variant="contained" style={{marginLeft: '1rem'}}><a href="/analise_cc.pdf" download style={{textDecoration: 'none', color: 'inherit'}}>Relatório para o curso de Ciência da Computação</a></Button>

      {chartsData.alunosPorCota.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Quantidade de alunos por cota</h2>
          <Chart
            chartType="BarChart"
            data={chartsData.alunosPorCota}
            options={{
              title: 'Quantidade de Alunos por Cota',
              chartArea: { width: '50%' },
              hAxis: { title: 'Quantidade', minValue: 0 },
              vAxis: { title: 'Cota' }
            }}
            width="100%"
            height="400px"
          />
        </>
      )}

      {chartsData.alunosDeficienciaPorCota.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Quantidade de alunos com deficiência por cota</h2>
          <Chart
            chartType="PieChart"
            data={chartsData.alunosDeficienciaPorCota}
            options={{ title: 'Quantidade de Alunos com Deficiência por Cota' }}
            width="100%"
            height="400px"
          />
        </>
      )}

      {chartsData.ingressantesGenero.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Ingressantes por gênero</h2>
          <Chart
            chartType="PieChart"
            data={chartsData.ingressantesGenero}
            options={{ title: 'Ingressantes por Gênero' }}
            width="100%"
            height="400px"
          />
        </>
      )}

      {chartsData.deficientesPorGenero.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Quantidade de alunos com deficiência por gênero</h2>
          <Chart
            chartType="PieChart"
            data={chartsData.deficientesPorGenero}
            options={{ title: 'Deficientes por Gênero' }}
            width="100%"
            height="400px"
          />
        </>
      )}

      {chartsData.ingressantesRaca.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Ingressantes por raça</h2>
          <Chart
            chartType="BarChart"
            data={chartsData.ingressantesRaca}
            options={{
              title: 'Ingressantes por Raça',
              chartArea: { width: '50%' },
              hAxis: { title: 'Quantidade', minValue: 0 },
              vAxis: { title: 'Raça' }
            }}
            width="100%"
            height="400px"
          />
        </>
      )}

      {chartsData.deficientesPorRaca.length > 1 && (
        <>
          <h2 style={{color: 'inherit', fontWeight: "normal" }}>Quantidade de Alunos com deficiência por raça</h2>
          <Chart
            chartType="BarChart"
            data={chartsData.deficientesPorRaca}
            options={{
              title: 'Deficientes por Raça',
              chartArea: { width: '50%' },
              hAxis: { title: 'Quantidade', minValue: 0 },
              vAxis: { title: 'Raça' }
            }}
            width="100%"
            height="400px"
          />
        </>
      )}

    </div>
  );
};

export default ReportComputacao;
