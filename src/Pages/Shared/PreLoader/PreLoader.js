import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";


const PreLoader = () => {
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");    

  useEffect(() =>{
    setLoading(true);
    setTimeout(() =>
    {
      setLoading(false)
    },8000)
  },[])
    return (
        <div>
       
       <ClipLoader
        color={color}
        loading={loading}
        size={150}
        a
      />
        </div>
    );
};

export default PreLoader;