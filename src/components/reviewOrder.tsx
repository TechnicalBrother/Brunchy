import React, { useEffect, useRef } from 'react'
import './styles/reviewOrder.scss'
import { Item } from '../App'
import OrderNowMenu from './orderNowMenu'

interface Props {
    items: Item[]
    closeModal: () => void
    orderNow: () => void
}

const ReviewOrder: React.FC<Props> = ({ items, orderNow, closeModal }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isClickedOutside = false
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                if (isClickedOutside === true) {
                    closeModal()
                }
                isClickedOutside = true
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const calculatePrice = () => {
        let price = 0
        items.forEach((item) => price += item.price)

        return price
    }

    return (
        <div className="modal-container">
            <div className='modal-wrapper' ref={ref}>
                <div className="modal-content">
                    {items.map((item) => (<div key={item.name} className='item-row'>
                        <p className='name'>{item.name}</p>
                        <p className='price'><span>$</span> {item.price}</p>
                    </div>))}
                    <div className='separating-line'></div>
                    <div className='item-row'>
                        <p className='name'>Total</p>
                        <p className='price'><span>$</span> {calculatePrice()}</p>
                    </div>
                </div>
                <OrderNowMenu price={calculatePrice()} orderNowClick={orderNow} />
            </div>
        </div>
    )
}

export default ReviewOrder