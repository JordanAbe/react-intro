import React, { useEffect } from 'react';
import useForm from './useForm';
import Nav from '../../layout/Nav';

const initialValues = {
    email: 'hello@hotmail.com',
    password: '123',
    isOk: false,
    gender: 'male',
}

function App(){

    const form = useForm(initialValues);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
    }

    // console.log(form);

    useEffect(() => {
        if(form.fields.gender === 'male'){
            form.addField('extra', '');
        } else {
            form.removeField('extra');
        }
    }, [form.fields.gender]);

    return (
        <div>
            <Nav />
            <form onSubmit={handleSubmit}>
                <span>Email</span>
                <br/>
                <input type="email" {...form.getInput('email')}/>
                <br/>
                <span>Password</span>
                <br/>
                <input type="password" {...form.getInput('password')}/>
                <br/>
                <input type="checkbox" {...form.getCheckbox('isOk')}/>
                <span>is ok</span>
                <br/>
                <input type="radio" {...form.getRadio('gender', 'male')}/>
                <span>Male</span>
                <br/>
                <input type="radio" {...form.getRadio('gender', 'female')}/>
                <span>Famale</span>
                <br/>
                <select {...form.getSelect('car')}>
                    <option value="audi">audi</option>
                    <option value="ford">ford</option>
                    <option value="mercedes">mercedes</option>
                </select>
                <br/>
                { form.fields.gender === 'male' &&
                    <input type="text" {...form.getInput('extra')}/>
                }
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App;