import React from "react";
import './informationImage.css'
import imageChair from '../../assets/images/silla_negra.png'
import imageTable from '../../assets/images/mesa_negra.png'
import imageSofa from '../../assets/images/sofa_blanco.png'
function InformationImage(){
    return(
        <img src={imageChair} alt="" />
        /* 
        <img src={imageTable} alt="" />
         */
    )
}

export default InformationImage;