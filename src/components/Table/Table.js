import React, { Component } from "react";
import Fields from '../Fields/Fields';

/*class Table extends Component {
    tableStyle = {
        width: "50%",
        margin: "0 auto",
        backgroundImage: `url(${this.props.image})`,
        backgroundAttachment: "fixed"
    }
    render() {
        return (
                <table style={this.tableStyle} >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Value</td>
                        </tr>
                    </thead>

                    <tbody>
                        <InputFields formFields={this.props.formFields} />
                    </tbody>
                </table>
        )
    }
}*/


const Table = ({ formFields, image }) => {
    const tableStyle = {
        width: "50%",
        margin: "0 auto",
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed"
    }

    return (
        <table style={tableStyle} >
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Value</td>
                </tr>
            </thead>

            <tbody>
                <Fields formFields={formFields} />
            </tbody>
        </table>
    )
}

export default Table;
