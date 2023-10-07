import React from 'react'
import Slider from "react-slick";

import img from '../../images/41nN4nvKaAL._AC_SY200_.jpg'
import img2 from '../../images/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg'
import img3 from '../../images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg'
import img4 from '../../images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg'
export default function Main() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return <>
  <div className="container">
    <div className="row">
        <div className="col-md-6">
        <Slider {...settings}>
      <div>
        <h3><img src={img} width={300} alt="" /></h3>
      </div>
      <div>
        <h3><img src={img2} width={300} alt="" /></h3>
      </div>
      
    </Slider>
        </div>
        <div className="col-md-6">
            <img src={img3} height={300} alt="" />
            <img src={img4} height={300} alt="" />
        </div>
    </div>
  </div>
  
  </>
}
