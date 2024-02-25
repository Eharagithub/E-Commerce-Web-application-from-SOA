import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod error quisquam itaque delectus fuga quam quidem qui facilis laborum magnam rerum voluptas corporis ipsam iure consequatur, tempora quia eveniet?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste esse sit illum ratione? Alias ad quidem dolores cupiditate delectus molestiae, velit molestias praesentium nobis quas consectetur aspernatur saepe repellendus hic.</p>
        </div>

    </div>
  )
}

export default DescriptionBox