import React, { Component } from "react";
import { connect } from "react-redux";
import './style.css'
import Table from '../Table/Table';
import Form from 'arui-feather/form';
import Button from 'arui-feather/button';
import Loading from '../Loading/Loading';
import ModalAnswerWindow from '../modal/Modal';

class FormArea extends Component {
    state = {
        formData: this.props.formData,
        fieldsData: {},
        loading: false,
        openModal: false,
    }
    
    requestObject = () => {
        const convertObj = {};
        this.props.fieldsValues.map((elem) =>{
            for( let key in elem ) {
                convertObj[key] = elem[key];
            }
        });
        const submitData = {
            "form": convertObj
        }
        return submitData;
    }

    sumbitData = async (e) => {
        e.preventDefault();
        this.setState({
            loading: true,
        });
        
        const response = await fetch('http://localhost:7000/test', {
            method: 'post',
            body: JSON.stringify(this.requestObject()),
            headers: {
                'content-type': 'application/json',
            }
        })

        const result = await response.json();

        setTimeout(() => {
            this.setState({
                loading: false,
                openModal: true,
                fieldsData: result,
            });
        }, 2000);
    }

    handleAccept = () => {
        this.setState({
            openModal: false
        });
    }

    render() {
        const { formData, loading, openModal } = this.state;
        const { title, image, fields } = formData;
        
        return (
            <Form theme="alfa-on-color"  >
                <div className="backgroundImage">
                    {openModal && <ModalAnswerWindow accept={this.handleAccept} fieldsData={this.state.fieldsData} />}
                    {loading && <Loading />}
                    <fieldset >
                        <legend>{title}</legend>
                        <Table formFields={fields} image={image} />
                        <Button name='hello' onClick={this.sumbitData} >
                            {'Перевести деньги'}
                        </Button>
                    </fieldset>
                </div>
            </Form>
        )
    }
}

export default connect(state =>({
    fieldsValues: state.fieldsData
}))(FormArea);
