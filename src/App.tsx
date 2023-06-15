import React, { useState } from 'react';
import logo from './logo.svg';
import '../src/Apps.scss';
import Navbar from './components/navbar';
import Headers from './components/headers';
import ProductCardsList from './components/productCardsList';
import OrderNowMenu from './components/orderNowMenu';
import ReviewOrder from './components/reviewOrder';
import SuccessModal from './components/successModal';

export interface Item {
  image: string
  caption: string
  price: number
  name: string
}

const App = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [showReview, setShowReview] = useState<boolean>(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)

  const calculatePrice = () => {
    let price = 0
    selectedItems.forEach((item) => price += item.price)

    return price
  }

  const selectItem = (item: Item) => {
    if (!selectedItems.find((i) => i.name === item.name)) {
      setSelectedItems([...selectedItems, item])
    }
  }

  const orderNow = () => {
    setSelectedItems([])
    setShowReview(false)
    setShowSuccessModal(true)
  }

  return (
    <div className="app">
      <Navbar />
      <Headers />
      <ProductCardsList onItemClick={(item) => selectItem(item)}/>
      {(!showReview && !showSuccessModal) && <OrderNowMenu price={calculatePrice()} orderNowClick={() => setShowReview(() => selectedItems.length !== 0 ? true : false)}/>}
      
      {showReview && <ReviewOrder items={selectedItems} orderNow={orderNow} closeModal={() => setShowReview(false)}/> }
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)}/> }
    </div>
  );
}

export default App;
