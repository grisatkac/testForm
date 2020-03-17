import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumberFied, addStringField, addListField } from '../action/index';
import Input from 'arui-feather/input';
import Select from 'arui-feather/select';
import FormField from 'arui-feather/form-field';

class InputFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber: '',
            inputString: '',
            inputList: '',
            errorNumber: false,
        }
        this.selectInput = React.createRef();
    }

    checkNumberField = ( value ) => {
        if( value[0] == 0 || value.length == 0) {
            console.log('число неверное: начинается с нуля');
            return true;
        } 
        return false;
    }

    inputNumberChange = ( value ) => {
        this.setState({
            inputNumber: value,
            errorNumber: this.checkNumberField(value),
        });
    }

    inputStringChange = ( value ) => {
        this.setState({
            inputString: value,
        });
    }

    listChange = ( value ) => {
        this.setState({
            inputList: value,
            
        });
    }

    numberFocusOut = (event) => {
        if( !this.state.errorNumber ) {
            this.props.addNumberFied(event.target.name, this.state.inputNumber);
        };
    }

    stringFocusOut = (event) => {
        this.props.addStringField(event.target.name, this.state.inputString);
    }

    listFocusOut = (event) => {
        this.props.addListField(this.selectInput.current.props.name, this.state.inputList);
    }

    selectRow = (type, name, values, inputNumber, inputString, inputList) => {
        switch (type) {
            case 'NUMERIC':
                return (
                    <FormField>
                        <Input
                            size='m'
                            placeholder='Input number'
                            error={ this.state.errorNumber  ? 'Введите корректное число' : null }
                            name={name}
                            type='number'
                            onChange={this.inputNumberChange}
                            onBlur={this.numberFocusOut}
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
                            onChange={this.inputStringChange}
                            onBlur={this.stringFocusOut}
                            value={inputString}
                        />
                    </FormField>
                )
                break;
            case 'LIST':
                const option = [];
                for ( let key in values ) {
                    option.push({
                        value: key,
                        text: values[key],
                    })
                }

                return (
                    <FormField>
                        <Select
                            mode='radio'
                            options={option}
                            name={name}
                            onChange={this.listChange}
                            onBlur={this.listFocusOut}
                            value={inputList}
                            ref={this.selectInput}>
                            
                        </Select>
                    </FormField>
                )
                break;
            default:
                console.log('dont have input fields');
        }
    }

    render() {
        const { inputNumber, inputString, inputList } = this.state;
        const fields = this.props.formFields;
        return (
            <React.Fragment>
                {fields.map(({ title, name, type, values }) => (
                    <tr key={name}>
                        <th>{title}</th>
                        <th>
                            {this.selectRow(type, name, values, inputNumber, inputString, inputList)}
                        </th>
                    </tr>
                    
                ))}    
            </React.Fragment>
        )
    }
}

export default connect(state => ({
    fieldsData: state.fieldsData,
}), { addNumberFied, addStringField, addListField}
/*dispatch => ({
    addFieldsValues: (name, value) => {
        dispatch({type: 'ADD_FIELDS_VALUES', value, name});
    }
})*/
 )(InputFields) ;
