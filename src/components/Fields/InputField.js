import React, {useState} from "react";
import Input from 'arui-feather/input';
import FormField from 'arui-feather/form-field';

const InputField = ({ type, name, numberFocusOut, stringFocusOut}) => {
    const [inputNumber, setNumber] = useState('');
    const [inputString, setString] = useState('');
    const [errorNumber, setErrorStatus] = useState(false);

    const checkNumberField = ( value ) =>{
        if( value[0] == 0 || value.length == 0) {
            console.log('число неверное: начинается с нуля');
            return true;
        } 
        return false;
    }

    const inputNumberChange = (value) => {
        setNumber(value);
        setErrorStatus(checkNumberField(value));
    }

    const numFocusOut = (event) => {
        numberFocusOut(event.target.name, inputNumber);
    }

    const inputStringChange = (value) => {
        setString(value);
    }

    const strFocusOut = (event) => {
        stringFocusOut(event.target.name, inputString);
    }

    const selectInput = (type) => {
        switch (type) {
            case 'NUMERIC':
                return (
                    <FormField>
                        <Input
                            size='m'
                            placeholder='Input number'
                            error={errorNumber ? 'Введите корректное число' : null}
                            name={name}
                            type='number'
                            onChange={inputNumberChange}
                            onBlur={numFocusOut}
                            value={inputNumber}
                        />
                    </FormField>
                )
                break;
            case 'TEXT':
                return (
                    <FormField>
                        <Input
                            size='m'
                            placeholder='Input string'
                            name={name}
                            type='text'
                            onChange={inputStringChange}
                            onBlur={strFocusOut}
                            value={inputString}
                        />
                    </FormField>
                )
                break;
            default:
                console.log('no input');
        }
    }

    return (
        <React.Fragment>
            {selectInput(type)}
        </React.Fragment>
    )
}

export default InputField;
