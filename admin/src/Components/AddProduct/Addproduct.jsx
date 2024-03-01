import React from 'react'
import './Addproduct.css'

const Addproduct = () => {
  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addProduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder='Type here' />   
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder='Type here' />   
        </div>
      </div>
    </div>
  )
}

export default Addproduct