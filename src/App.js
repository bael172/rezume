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

import {ReactComponent as Briefcase} from "./briefcase.svg"
import './App.css';

import logo from './logo.svg';
import photo from './oleg_mongol.jpg'
import mortarboard from './mortarboard.png'
import account from './account.png'
import location from './location.png'
import info from './info.png'
import contact_mail from './contact-mail.png'
import phone from './phone.png'
import mail from './arroba.png'
import gmail from './gmail.png'
import whatsapp from "./whatsapp_1.png"
import telegram from "./telegram.png"
import translate from './translate.png'
import pencil from './pencil.png'

const photo_css ={
  display:"block",
  width:'auto',
  height:'auto',
  maxWidth:"10em",
  maxHeight:"10em",
  margin: "0 0 30px",
  border: "2px black solid"
}
const header_1={
  fontFamily:"Arial, Verdana, sans-serif",
  fontWeight:"100",
  margin:"0 0 5px 0"
}
const header_2 = {
  color:"blue", 
  fontSize:'1.2em', 
  verticalAlign:'top'
}
const text_1 = {
  color:"black",
  fontSize:"1em"
}
const text_2 = {
  color:"black",
  fontSize:"0.8em"
}
const nickname={
  fontFamily:"Arial, Verdana, sans-serif",
  fontSize:"50px",
  //verticalAlign:"top",
  //padding:"0",
  margin:"0",
  height:"auto"
}
const grey = {
  color:'grey', 
  fontSize:'1em'
}

const icon = {
  display:"inline-block",
  height:"20px",
  width: "auto",
  marginRight:"20px", 
  marginLeft:"20px"
}
const hr_wd={
  textAlign:"right",
  minWidth:"250px",
  maxWidth:"25%",
  margin:"0 0 20px 0",
  //marginDown:"20px"
}
const circle_css={

}

function Photo(){
  return( 
    <>
    <div className="flex">
      <img src={photo} style={photo_css} height="80" width="120"></img>
      <dir style={{display:"block", paddingLeft:"0", margin:"0"}}>
        <dir style={nickname}>Олег Монгол Артурович</dir>
        <dir style={{textAlign:"left", fontWeight:"600"}}>WEB-разработчик</dir>
      </dir>
    </div>
    <div style={{display:"inline-block", margin:"0 0 20px"}}>
      <img src={location} style={{width:"20px"}}></img>
      <div style={{display:"inline", margin:"0 5em 0 0"}}> г.Ош, Кыргызская республика</div>
      <img src={info} style={{width:"15px"}}></img>
      <div style={{display:"inline"}}> Возраст: 20 лет</div>
    </div>
    </>
  )
}

function Header_1({prop}){
    let header
    let img
    if(prop.name == "Опыт работы") header = <Briefcase style={icon}></Briefcase>
    if(prop.name != "Опыт работы") img = <img src={prop.icon_src} style={icon}></img>
    
  return(
  <>
      <div className="flex">
        {header}
        {img}
        <h1 style={header_1}>{prop.name}</h1>
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
        <div style={header_2}>{mesto_raboty[0]}</div>
        <ul style={{margin:0}}>{freelancer_arr_li}</ul>
        <b>Достижения (за 1-год)</b>
        <ul style={{margin:0}}>{freelancer_achievs_li}</ul>
      </div>
      <div style={grey}>{period[1]}</div>
        <div>
          <div style={{display:"inline-block"}}>  
            <div style={header_2}>{mesto_raboty[1]}<div style={{color:"black"}}>Веб дизайнер</div></div> 
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
    <div style={grey}>2021-2025</div>
    <div style={header_2}>МКИТ Колледж информационных технологий
      <div style={text_1}>
        09.02.07 Информационные системы и программирование
        <ul style={text_2}>
          <li>Умение создавать полноценные сайты</li>
          <li>Знания дизайна</li>
          <li>Работа с пакетом Adobe</li>
          <li>Составление документации на разработку/модернизации АИС</li>
          <li>Составление Анализа Предмнетной области</li>
          <li>Составление ТЗ, ТЭО, Технического Проекта</li>
          <li>Составление диаграмм UML, IDEF, ARIS Express</li>
          <li>Составление Руководства Пользователя, Администратора и Программиста</li>
        </ul>
        </div>
    </div>
    
  </article>
  )
}
function Content3(){
  return(
    <div style={text_1}>Я разработчик веб-мультимедийных приложений, специализируюсь
    на разработке веб-сайтов, дизайн-макетах сайтов, знаю backend и frontend разработку
    .Имею 11 классов образования а также Среднее специальное образование. Отличаюсь усидчивостью,
    умением масштабировать код, делать его гибким, а также вдумчиваостью. Умею находить общий язык с
    коллективом, умею составлять проектную документацию (Анализ, ТЗ, ТЭО, ТП и т.д.). Умею строить
    диаграммы IDEF, UML, ARIS. Берусь за задачи, с которыми смогу справиться</div>
  )
}
function Contacts(){
  let contacts = [
    {img:phone, text:"+7 xxx xxx 45 48"},
    {img:mail, text:"bael172@xmail.ru"},
    {img:gmail, text:"bael171104@gmail.com"},
    {img:whatsapp, text:"+7 xxx xxx 45 48"},
    {img:telegram, text:"@ierihon"}
  ]
  let result = contacts.map((item)=><li style={{margin:"15px 0", listStyleType:"none"}}><img src={item.img} width="25px" margin-right="15px"></img> {item.text}</li>)
  return (
    <ul style={{padding:""}}>{result}</ul>
  )
}
function Languages(){
  let langs=[
    {lang:"Английский",quantity:"3",quality:"B1 Средний"},
    {lang:"Немецкий",quantity:"1", quality:"A1 Начальный"}
  ]
  const LanguageLevelIndicator = (indicator)=>{
    const level = parseInt(indicator)
    const circles = []
    for(let i=0; i<6; i++){
      circles.push(
        <div key={i} style={{
          width:"10px",
          height:"10px",
          borderRadius:"50%",
          backgroundColor: i<level? '#1C7FBF' : '#DDDEDE',
          margin:'0 5px 0'
        }}></div>
      )
    }
    return (
      <div style={{display:"flex"}}>{circles}</div>
    )
  }
  let result_1 = langs.map(function(item,index){
    return <div id={index} style={{margin:"0 0 10px 0"}}>{item.lang}</div>

    })
  let result_2 = langs.map(function(item,index){
    return (<div margin="0 0 10px 0">
        {LanguageLevelIndicator(item.quantity)}
        {item.quality}
        </div>)
  })
  let collector = []
  for(let i=0;i<langs.length;i++){
    collector.push(<div>{result_1[i]}</div>)
    collector.push(<div>{result_2[i]}</div>)
  }
  return(
    <div className="container_languages" style={{margin:"0 0 20px 0"}}>
      {collector}
    </div>
  )
}
function Skills(){
  let skills = [
    "Работа с Node.js",
    "Работа с React",
    "Дизайн сайтов в Figme",
    "Photoshop",
    "Illustator",
    "Составление проектной документации",
    "Составление ТЗ",
    "Расчёт ТЭО",
    "Основы Экономики"
  ]
  let result = skills.map(item => <li>{item}</li>)
  return (
    <>
      {result}
    </>
  )
}

function App() {
  let half_width = window.innerWidth*0.5
  return (
    <div className="main">
      <div style={{display:"inline"}}>
        <Photo></Photo>
        <Header_1 prop={{name:"Опыт работы"}}></Header_1>
        <Content1></Content1>
        <Header_1 prop={{name:"Образование", icon_src:mortarboard}}></Header_1>
        <Content2></Content2>
        <Header_1 prop={{name:"О себе", icon_src:account}}></Header_1>
        <Content3></Content3>
      </div>
      <div style={{display:"inline"}}>
        <Header_1 prop={{name:"Контакты", icon_src:contact_mail}}></Header_1>
        <Contacts></Contacts>
        <Header_1 prop={{name:"Языки", icon_src:translate}}></Header_1>
        <Languages></Languages>
        <Header_1 prop={{name:"Навыки", icon_src:pencil}}></Header_1>
        <Skills></Skills>
      </div>
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
