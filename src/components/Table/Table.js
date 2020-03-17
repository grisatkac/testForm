import React, { Component } from "react";
import InputFields from '../InputFields';

class Table extends Component {
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
}

export default Table;
