import React from 'react'
import './styles/orderNowMenu.scss'
import Button from './button'

interface Props {
    price: number
    orderNowClick: () => void
}

const OrderNowMenu: React.FC<Props> = ({ price, orderNowClick }) => {

    return (
        <div className='menu-container'>
            <img src="shopping-basket.png" alt='' />
            <h5>{price}$</h5>
            <Button caption='Order Now' onClick={orderNowClick} />
        </div>
    )
}

export default OrderNowMenu