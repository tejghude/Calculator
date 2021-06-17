import React, { useState } from 'react';
import './App.css';
import {Button , Container,  Grid ,Row ,FlexboxGrid, Col ,Input} from "rsuite";



const App = () =>{

  const [result, setResult] = useState("");
  const handleClick = (e) => {
      setResult(result.concat(e.target.name));
  }
  const clear = () => {
      setResult("");
  }
  const backspace = () => {
      setResult(result.slice(0, -1)); 
  }
  const calculate = () => {
      try {
          setResult(eval(result).toString());
      } catch(err) {
          setResult("ERROR")
      }        
  }

  return (
    <div className="App">
     
     <Container >
   
     <FlexboxGrid justify="center">
     <div className="mainbody"  style={{maxWidth:430, borderRadius:10 + 'px', overflow: 'hidden'}}  >
        
     <Grid fluid  >
     <Row className="head"> CALCULATOR</Row>
     <Row>
     <Input style={{  height:80  }} placeholder="00" type="text" value={result} className="input" />
     </Row>
     <Row style={{paddingTop:5}}>
     <Col xs="12"><Button appearance="primary" className="btn" onClick={clear} id="clear" style={{backgroundColor:"#464646"}} block>CLEAR</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn"  onClick={backspace} id="backspace" block>C</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" name="+" onClick={handleClick} block>+</Button></Col>
     </Row>
     <Row>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{backgroundColor:'#ffffff',color:'#464646' }} name="7" onClick={handleClick} block>7</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="8" onClick={handleClick} block>8</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="9" onClick={handleClick} block>9</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" name="*" onClick={handleClick} block>&times;</Button></Col>
     </Row>
     <Row>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="4" onClick={handleClick} block>4</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="5" onClick={handleClick} block>5</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="6" onClick={handleClick} block>6</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" name="/" onClick={handleClick} block>&divide;</Button></Col>
     </Row><Row>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="1" onClick={handleClick} block>1</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="2" onClick={handleClick} block>2</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="3" onClick={handleClick} block>3</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" name="-" onClick={handleClick} block>&ndash;</Button></Col>
     </Row>
     <Row>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="." onClick={handleClick} block>.</Button></Col>
     <Col xs="6"><Button appearance="primary"  className="btn" style={{ backgroundColor:'#ffffff',color:'#464646' }} name="0" onClick={handleClick} block>0</Button></Col>
     <Col xs="12"><Button appearance="primary"  className="btn" onClick={calculate} id="result"  style={{backgroundColor:"#464646"}} block>ANSWER</Button></Col>
     </Row>

     </Grid>
 
      </div>
      </FlexboxGrid>
     </Container>

    </div>
  );
}

export default App;
