import './main.css';
import { useState } from 'react';

const Main=()=>{

    // --------------making useState for storing the changes inputs
    const[PasswordInput,setpasswordInput] = useState('');
    const[digits,setdigits] = useState(8);
    const[uperletter,setupperletter] = useState(false);
    const[lowerletter,setlowerletter] = useState(false);
    const[symbleletter,setsymbleletter] = useState(false);
    const[number,setnumber] = useState(false);

    // ----------------set the value--------------
    const uppercase = "ABCDEFGFIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "?)*&^%$#@!~<>{}(][";
    const numbers = "1234567890";

    function setnumfunction(e) {
        setdigits(e.target.value);
        // console.log(e.target.value)
    }


    function generatePassword() {
        let val = "";
        if ( uperletter === false && lowerletter === false && symbleletter === false && number === false) {
          alert("---All checkboxes are empty--");
          setpasswordInput('');
        } else {
          if (uperletter){
            val += uppercase;
          }
          if (lowerletter){
            val += lowercase;
          }
          if (symbleletter){
            val +=  symbols;
          }
          if (number){
            val += numbers;
          }
        //   console.log(val);
          displaypassword(val);
        }
    }

// ----------generate password funtion -----------

    function displaypassword(val){
        // console.log(val);
        let password="";
        if(digits>=8 && digits<50){
            for (let i = 0; i < digits; i++) {
                let randomPassword = Math.floor(Math.random() * val.length);
                password += val.charAt(randomPassword);
            }
            // console.log(password);
            setpasswordInput(password);
        }
        else{
            alert("length of password is lower than the mention");
            setpasswordInput('');
        }
    }

// -------------copy password function -----------

    function copyPassword(){
        if(PasswordInput===''){
            alert("Password field is empty,nothing to copy!");
        }
        else{
            navigator.clipboard.writeText(PasswordInput);
            alert("--Password copied--");
        }
    }

    return(
        <div className="Container">
            <h3>Select Password length(**8-50 characters**)</h3>
            <div className="showPassword">
                <div className='inputBtn'>
                    <input type="text" className='password' value={PasswordInput}></input>
                    <button onClick={copyPassword}>Copy</button>
                </div>
            <input type="number" className='numb' value={digits} onChange={setnumfunction}></input>
            </div>
            <div className="allCheckbox">
                <span><input type="checkbox" className='checkbox' checked={uperletter} onChange={(e)=>setupperletter(e.target.checked)}/>Include upper case</span>
                <span><input type="checkbox" className='checkbox' checked={lowerletter} onChange={(e)=>setlowerletter(e.target.checked)}/>Include lower case</span>
                <span><input type="checkbox" className='checkbox' checked={symbleletter} onChange={(e)=>setsymbleletter(e.target.checked)}/>Include symbole</span>
                <span><input type="checkbox" className='checkbox' checked={number} onChange={(e)=>setnumber(e.target.checked)}/>Include numbers</span>
                <button onClick={generatePassword}>Generate Password</button>
            </div>
        </div>
    )
}

export default Main;