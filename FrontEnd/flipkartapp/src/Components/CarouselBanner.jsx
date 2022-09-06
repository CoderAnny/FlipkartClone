
import React from "react";

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import "./CauroselBanner.css";

const CarouselBanner = () =>{

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const items = [

        {ImgLink : "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg"},
        {ImgLink : "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg"},
        {ImgLink : "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg"},
        {ImgLink : "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg"}
    ]



    return (

        <>

        <div className="banner">

        <Carousel 
            responsive={responsive}
            infinite={true}
            swipeable={false}
            draggable={false}
            showDots={false}
            autoPlay={true}
            autoPlaySpeed={1500}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          
        >  
            {
                items.map(row=>{
                    return (
                    <img src={row.ImgLink} alt="imageLink"  style={{height:"300px",width:"100%"}}/>
                    )
                })
            }
            
        </Carousel>


        </div>
        
        </>

    )

}

export default CarouselBanner;