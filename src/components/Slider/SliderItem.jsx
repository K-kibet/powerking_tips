import React from 'react'

export default function SliderItem({data}) {
  function truncateItem(input, value) {
    if (input.length > value) {
       return input.substring(0, value) + '...';
    }
    return input;
 };
  return (
  <div className="slider-item">
    <h4 className="title">{truncateItem(data.title, 45)}</h4>
    <p>{truncateItem(data.title, 115)}</p>
    <span className="tag">
        {data.category}
    </span>
  </div>
  )
}
