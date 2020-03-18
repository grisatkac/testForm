import React, { Component } from "react";
import { connect } from "react-redux";
import { addNumberFied, addStringField, addListField } from '../../action/index';
import InputField from './InputField';
import SelectField from './SelectField';

class Fields extends Component {
   
    numberFocusOut = (name, value) => {
        this.props.addNumberFied(name, value);
    }

    stringFocusOut = (name, value) => {
        this.props.addStringField(name, value);
    }

    listFocusOut = (name, value) => {
        this.props.addListField(name, value);
    }

    selectRow = (type, name, values) => {
        switch (type) {
            case 'LIST':
                const options = [];
                for ( let key in values ) {
                    options.push({
                        value: key,
                        text: values[key],
                    })
                }

                return (
                    <SelectField 
                        options={options}
                        name={name}
                        listFocusOut={this.listFocusOut}
                    />
                )
                break;
            default:
                return (
                    <InputField 
                        type={type}
                        name={name}
                        numberFocusOut={this.numberFocusOut}
                        stringFocusOut={this.stringFocusOut}
                    />
                )
        }
    }

    render() {
        const fields = this.props.formFields;
        return (
            <React.Fragment>
                {fields.map(({ title, name, type, values }) => (
                    <tr key={name}>
                        <th>{title}</th>
                        <th>
                            {this.selectRow(type, name, values)}
                        </th>
                    </tr>
                ))}    
            </React.Fragment>
        )
    }
}

export default connect(state => ({
    fieldsData: state.fieldsData,
}), { addNumberFied, addStringField, addListField})(Fields);
