import React from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa";

function Stars(props) {
    let remainStars = 5 - props.carStars;
    return (
        <>
            {
                Array.apply(null, Array(props.carStars)).map((x, i) => {
                  return  <FaStar key={i}/>
                })
            }
            {
                Array.apply(null, Array(remainStars)).map((x, i) => {
                    return  <FaStarHalfAlt key={i}/>
                  })
            }
        </>
    )
}

export default Stars
