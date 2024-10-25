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
import photo from './oleg_mongol.jpg'
import mortarboard from './mortarboard.png'
import {ReactComponent as Briefcase} from "./briefcase.svg"
import './App.css';
const photo_css ={
  display:"block",
  minWidth:"1em",
  maxWidth:"10em"
}
const header_css={
  fontFamily:"Arial, Verdana, sans-serif",
  fontWeight:"100",
  margin:0
}

const nickname={
  fontFamily:"Arial, Verdana, sans-serif",
  fontSize:"50px"
}

const grey = {
  color:'grey', 
  fontSize:'1em'
}

const header_blue = {
  color:"blue", 
  fontSize:'1.2em', 
  verticalAlign:'top'
}

const icon = {
  display:"inline-block",
  height:"20px",
  width: "auto",
  marginRight:"20px", 
  marginLeft:"20px"
}

const hr_wd={
  textAlign:"left",
  width:"40%",
  margin: 0
}

function Photo(){
  return( 
    <div className="flex">
      <img src={photo} style={photo_css}></img>
      <dir style={nickname}>Олег Монгол Артурович</dir>
    </div>
  )
}

function Header1(){
    return( 
      <>
        <div className="flex">
        <Briefcase style={icon}></Briefcase>
          <h1 style={header_css}>Опыт работы</h1>
        </div>
        <hr style={hr_wd}></hr>
      </>
    )
}
function Header2(){
  return(
    <>
      <div className="flex">
        <img src={mortarboard} style={icon}></img>
        <h1 style={header_css}>Образование</h1>
      </div>
      <hr style={hr_wd}></hr>
    </>
  )
}
let freelancer_achievs = ["Освоил 3-D виртуализацию, расширил линейку предоставляемых услуг"]
let mesto_raboty = ["Фрилансер","Веб-агентство Spectr Design"]
let freelancer_arr = ["Создание сайтов \"с нуля \"","Разработка структуры сайта","Разработка дизайн-макетов","Переговоры с заказчиками","Составление брифа"]
let spectr_arr = ["Дизайн и редизайн сайтов","Дизайн макетов","Логотипы, фирменный стиль","Создание ТЗ","Координирование группы веб-разработчиков","Частичный документооборот"]
let period = ["2016-н.в.","2010-2016"]
let freelancer_arr_li = freelancer_arr.map(item => <li>{item}</li>)
let freelancer_achievs_li = freelancer_achievs.map(item => <li>{item}</li>)

let spectr_arr_li = spectr_arr.map(item => <li>{item}</li>)
const obj = new Map
obj.set(period[0],[mesto_raboty[0],freelancer_arr, freelancer_achievs ])
obj.set(period[1],[mesto_raboty[1],"Веб дизайнер",spectr_arr])
function Content1(){
  return(
    <article className="container">
      <div style={grey} >{period[0]}</div>
      <div> 
        <div style={header_blue}>{mesto_raboty[0]}</div>
        <ul style={{margin:0}}>{freelancer_arr_li}</ul>
        <b>Достижения (за 1-год)</b>
        <ul style={{margin:0}}>{freelancer_achievs_li}</ul>
      </div>
      <div style={grey}>{period[1]}</div>
        <div>
          <div style={{display:"inline-block"}}>  
            <div style={header_blue}>{mesto_raboty[1]}</div> 
            <div>Веб дизайнер</div>
          </div>
          <b style={{display:"block"}}>Обязанности</b>
          <ul>{spectr_arr_li}</ul>
        </div>

    </article>
  )
}
function Content2(){
  return (
    <article className="container">
    <div>2025</div>
    <div style={header_blue}>МКИТ</div>
  </article>
  )
}

function App() {
  return (
    <div className="main">
    <Photo></Photo>
    <Header1></Header1>
    <Content1></Content1>
    <Header2></Header2>
    <Content2></Content2>
    </div>
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
