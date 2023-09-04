import './form.css'
import { useState } from 'react'

const Form = () => {

    const [error, setError] = useState('');
    const [color, setColor] = useState('black');


    const handleOnBlur = (e) => {
        console.log(e.target.value)
        evaluateEmail(e)
    }


    const handleName = (e) => {
        console.log(e.target.value.trim())
    }

    

    const evaluateEmail =(e) => {
        const email = e.target.value
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if(regex.test(email)) {
            setError('Valid email')
            setColor('green')
        } else if (email === '') {
            setColor('red');
            setError('Email required');
        }
        
        else {
            console.log('invalid email');
            setError('Invalid email');
            setColor('red');
        }
    }
  return (
    <div>
    <input type="email" placeholder='email' onBlur={handleOnBlur} id='email'/>
    <input type="" placeholder='Name' onBlur={handleName} id='email'/>
    <p style={{color: color}}>{error}</p>
    </div>
  );
}

export default Form