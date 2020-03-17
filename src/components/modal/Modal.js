import React from "react";
import Portal from '../Portal/Portal';
import './style.css';

const ModalAnswerWindow = ({ accept, fieldsData }) => {
    const fieldData = () => {
        let arr = [];
        for ( let key in fieldsData ) {
            arr.push(`${key}: ${fieldsData[key]}`);
        }
        return arr;
    }

    return (
        <Portal>
            <div className="modalOverlay">
                <div className="modalWindow">
                    <div className="modalHeader">
                        <div className="title">Результат отправки формы</div>
                    </div>

                    <div className="modalBody">тело ответа
                    {fieldData().map((elem) =>
                        <div key={Math.random(0, 1)}>{elem}</div>
                    )}
                    </div>

                    <div className="modalFooter">
                        <div className="acceptButton">
                            <button onClick={accept}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

export default ModalAnswerWindow;
