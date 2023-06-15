import React from 'react'
import './styles/productCardsList.scss'
import data from '../data.json'
import { Item } from '../App'

interface Props {
    onItemClick: (item: Item) => void
}

const ProductCardsList: React.FC<Props> = ({onItemClick}) => {
    return (
        <div className='list-container'>{data.items.map((item) => (<div className='card' key={item.image}>
            <img src={item.image} alt=''/>
            <h3>{item.name}</h3>
            <h4>{item.caption}</h4>
            <h5><span>$</span>{item.price}</h5>
            <div className='basket' onClick={() => onItemClick(item)}>
                <img src="shopping-basket.png" alt=''/>
            </div>
        </div>))}</div>
    )
}

export default ProductCardsList