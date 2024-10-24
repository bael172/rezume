import * as React from 'react'
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import logo from './logo.svg';
import photo from './no_name.jpg'
import './App.css';
const photo_css ={
  marginTop:"2%",
  marginLeft:"2%",
  width:"5em",
}
const header_css={
  fontFamily:"Arial, Verdana, sans-serif",
  fontSize:"2em",
  fontWeight:"700"
}

function Photo(){
  return( <img src={photo} style={photo_css}></img>)
}
function Header(){
    return( 
      <h1 style={header_css}>"Опыт работы"</h1>
    )
}
let freelancer_achievs = ["Освоил 3-D виртуализацию, расширил линейку предоставляемых услуг"]
let mesto_raboty = ["Фрилансер","Веб-агентство Spectr Design"]
let freelancer_arr = ["Создание сайтов \"с нуля \"","Разработка структуры сайта","Разработка дизайн-макетов","Переговоры с заказчиками","Составление брифа"]
let spectr_arr = ["Дизайн и редизайн сайтов","Дизайн макетов","Логотипы, фирменный стиль","Создание ТЗ","Координирование группы веб-разработчиков","Частичный документооборот"]
const obj = {
  "2016-н.в.": [mesto_raboty[0],<li>{freelancer_arr}</li>,<bold>Достижения (за 1-год)</bold>, <li>{freelancer_achievs}</li>],
  "2010-2016": [mesto_raboty[1]+"Веб-дизайнер",<bold>Обязанности:</bold>,<li>{spectr_arr}</li>]
}
function Content(){
      for(let index in obj){
        console.log(index)
        return(
          <div style={{color:'grey', fontSize:'0.8em'}}>{index}</div>
        )

      }
}

function App() {
  return (
    <>
    <Photo></Photo>
    <Header></Header>
    <Content></Content>
    </>
  );
}
/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/ 

export default App;
