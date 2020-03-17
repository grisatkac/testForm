import React, { Component } from "react";
import Input from 'arui-feather/input';
import Select from 'arui-feather/select';
import FormField from 'arui-feather/form-field';

const options = [
    { value: '01', text: 'ИП Фридман М.М.' },
    { value: '02', text: 'ООО «Виктори»' },
    { value: '03', text: 'ФГУП НПП ВНИИЭМ', props: { disabled: true } }
];

class Field extends Component {
    
    inputNumberChange = ( value ) => {
        this.props.inputNumberChange( value );
    }

    inputStringChange = ( value ) => {
        this.props.inputStringChange( value );
    }

    listChange = ( value ) => {
        this.props.listChange( value );
    }

    numberFocusOut = (event) => {
        this.props.numberFocusOut(this.props.inputNumber, this.props.name);
    }

    stringFocusOut = () => {
        this.props.stringFocusOut(this.props.inputString, this.props.name);
        
    }

    listFocusOut = () => {
        this.props.listFocusOut(this.props.inputList, this.props.name);
        
    }

    selectRow = (type, name, inputNumber, inputString, inputList) => {
        switch (type) {
            case 'NUMERIC':
                return (
                    <FormField>
                        <Input
                            size='m'
                            placeholder='Input number'
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
                return (
                    <FormField>
                        <Select
                            mode='radio'
                            options={options}
                            name={name}
                            onChange={this.listChange}
                            onBlur={this.listFocusOut}
                            value={inputList}>
                        </Select>
                    </FormField>
                )
                break;
            default:
                console.log('no fields');
        }
    }
    render() {
        const {type, name, inputNumber, inputString, inputList} = this.props;
        return(
            <React.Fragment>
                {this.selectRow(type, name, inputNumber, inputString, inputList)}
            </React.Fragment>
        )
    }
}

export default Field;
