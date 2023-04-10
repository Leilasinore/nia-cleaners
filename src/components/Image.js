import React from 'react';
const Image =({src ,...rest})=>{
    return(
          <img src={src} alt='random' {...rest}/>
    )
}
export default Image
