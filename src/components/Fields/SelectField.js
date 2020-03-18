import React, {useState, useRef} from "react";
import Select from 'arui-feather/select';
import FormField from 'arui-feather/form-field';


const SelectField = ( { options, name, listFocusOut } ) => { 
    const selectInput = useRef();
    const [inputSelect, setSelect ] = useState('');

    const selectChange = (value) => {
        setSelect(value);
    }

    const selectFocusOut = () => {
        listFocusOut(selectInput.current.props.name, inputSelect);
    }

    return (
        <FormField>
            <Select
                mode='radio'
                options={options}
                name={name}
                onChange={selectChange}
                onBlur={selectFocusOut}
                value={inputSelect}
                ref={selectInput}>
            </Select>
        </FormField>
    )
}

export default SelectField;
