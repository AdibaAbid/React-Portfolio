import React from 'react';
import Loader from 'react-loader-spinner'



export default function PreLoader() {
    return(
     <Loader
      type="BallTriangle" color="#00BFFF" height={80} width={80}
        timeout={3000} //3 secs

     />
  
    );
   }
