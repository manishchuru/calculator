import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Resturent = () => {
    const[result ,setResult] = useState('')
    const myfunction =(e)=>{
        setResult(result.concat(e.target.name));
    }
    const clear =()=>{
        setResult("")
    }
    const backspace =()=>{
        setResult(result.slice(0,-1));
    }
    const calculator =()=>{
        try{
           setResult(eval(result).toString());
        }catch(err){
            setResult(err);
        }
    }
    return (
        <> 
             
       <div className='calcu'> 
           <div className="div">
           <input type="text"  value={result}/><br />
          <button  onClick={clear} className='highlight btn1'>clear</button>
          <button onClick={backspace}  className='highlight'>c</button>
          <button name='+' onClick={myfunction}  className='highlight'>+</button><br />
          <button name='1' onClick={myfunction}  >1</button>
          <button name='2' onClick={myfunction}  >2</button>
          <button name='3' onClick={myfunction} >3</button>
          <button name='-' className='highlight'onClick={myfunction}>-</button><br />
          <button name='4' onClick={myfunction} >4</button>
          <button name='5' onClick={myfunction} >5</button>
          <button name='6' onClick={myfunction} >6</button>
          <button name='*' className='highlight'onClick={myfunction}>*</button><br />
          <button name='7' onClick={myfunction} >7</button>
          <button name='8' onClick={myfunction} >8</button>
          <button name='9' onClick={myfunction} >9</button>
          <button name='/' onClick={myfunction} className='highlight'>/</button><br />
          <button name='0' onClick={myfunction} >0</button>
          <button name='.' onClick={myfunction}  className='highlight'>.</button>
          <button  onClick={calculator} className='btn2 highlight'>=</button>
          </div>
       </div>
       </>
    );
}

export default Resturent;
