import React from 'react';
import Modal from 'react-modal';

const TipModal = props => (
    <Modal 
        isOpen={!!props.totalBill} 
        contentLabel="Calculated Tip"
        onRequestClose={props.handleClearTotalBill}
        closeTimeoutMS={200}
        className='modal'
    >
        <div className="modal-body regular-text">
            <div className="modal-group justify-between">
                <p>Your Bill: </p>
                <p>{'$' + props.bill}</p>
            </div>
            <div className="modal-group justify-between">
                <p>Tip {'(' + props.percentage + '%)'} : </p>
                <p>{'$' + props.tip}</p>
            </div>
            <div className="modal-group justify-between green-frame">
                <p>Total Bill: </p>
                {props.totalBill && <p>{'$' + props.totalBill}</p>}
            </div>
            <div className="modal-group justify-end">
                {props.splitBill && <small className="small-text">{'$' + props.splitBill + ' each'}</small>}
            </div>
        </div>

        <div className="modal-footer">
            <button onClick={props.handleClearTotalBill} className="button button--white">
                OKEY
            </button>
        </div>
    </Modal>
);
    
export default TipModal;
