import logo from './logo.svg';
import photo from './no_name.jpg'
import './App.css';
const arr_headers=["Опыт работы","Образование","Курсы","О себе"]
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
      arr_headers.map((item,index) => {
      return <h1 style={header_css}>{item}</h1>
      })
  )
}

function App() {
  return (
    <>
    <Photo></Photo>
    <Header></Header>
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
