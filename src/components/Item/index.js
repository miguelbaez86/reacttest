import React from 'react'
import './styles.css'

const Item = ({item, compare}) =>
    <div key={item.id} className="col-sm-6 col-md-3">
        <div className={"product"} >
            <img src={item.thumbnail} alt={item.name} />
            <div className="image_overlay"/>
            <div className="view_details" onClick={() => compare(item)}>
              {item.compare ? "close detail" : "See more detail"}
            </div>
            <div className="stats">
                <div className="stats-container">
                    <span className="product_name">{item.name}</span>                
                </div>
            </div>
        </div>
    </div>;

export default Item
