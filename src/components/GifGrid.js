import React from "react";
import { useFetchGift } from "../hooks/useFetchGift";
import GiftGridItem from './GiftGridItem'
const GifGrid = ({ category }) => {

const { data: images, loading } = useFetchGift( category );


  // getGift();
  return (
    <>
        <h3 className='animate__animated animate__fadeIn' >{category}</h3>
        { loading && <p className= 'animate__animated animate__flash'>Loading</p> }
        <div className='card-grid'>
        {images.map( img => (
            <GiftGridItem key={ img.id } {...img} />
        ))}
        </div>
    </>
  );
};

export default GifGrid;
