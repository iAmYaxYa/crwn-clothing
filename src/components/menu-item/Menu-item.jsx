import React from 'react';
import './menu-item.scss';

const MenuItem = ({title, imgUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-img' style={{
        backgroundImage: `url(${imgUrl})`
    }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)




export default MenuItem;