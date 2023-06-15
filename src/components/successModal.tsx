import React from 'react'
import './styles/successModal.scss'
import Button from './button'

interface Props {
    onClose: () => void
}

const Success: React.FC<Props> = ({ onClose }) => {
    return (
        <div className="modal-container">
            <div className='modal-wrapper'>
                <div className="modal-content">
                    <h1 className='success-title'>Congratulations!</h1>
                    <h2 className='success-subtitle'>Your order it’s on its way.</h2>
                    <div className='button-container'>
                        <Button caption='Ok' onClick={onClose} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Success