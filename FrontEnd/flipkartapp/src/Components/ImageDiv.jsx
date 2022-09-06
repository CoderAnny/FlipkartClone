
import React from "react"
import CarouselBanner from "./CarouselBanner"

const ImageDiv = () =>{

    const imageArr = [

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png",

            imgText : "Top Offers"       
        },

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png",
            
            imgText : "Grocery"        
        },


        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png",
            imgText : "Mobile"
        },

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png",
            imgText : "Fashion"
        },

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png",
            imgText : "Electronics"

        }
        ,

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png",
            imgText : "Home" 
        },
        
        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png",
            imgText : "Appliances"
        },

        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png",
            imgText : "Travel"
        }
        ,
        {
            ImgLink:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png",
            imgText : "Beauty, Toys & More"

        }
    ]

    return (

        <>
            <div style={{display:"flex",justifyContent:"space-around",alignItmes:"center",padding:"20px 0px",background:"rgb(250,,250,,250)"}}>

                {

                imageArr.map(row =>{
                    
                    return(
                        <>
                            <div>
                                <img src={row.ImgLink} alt=""  style={{height:"80px"}}/>
                                <h5 style={{textAlign:"center",margin:0}}>{row.imgText}</h5>
                            </div>
                        </>
                    )
                })
            
                }
                
            </div>
            <CarouselBanner/>
        </>

    )

}

export default ImageDiv;