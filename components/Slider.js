import React, { Component } from 'react'
import Slider from 'react-slick'

export default class MySlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }


    return (
      <div className="block-content mb-100">
      <div className="row">
        <div className="col-md-12">
          <div className="sub-title mb-40">
            <h2 className="uppercase">testimonials</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-10 col-md-offset-1">
          
            
              <div className="slider-container testi clearfix">
                <Slider {...settings}>

                  
                    <div className="block-quote t-left">
                      <blockquote>
                        “You guys really did an amazing job building TownWave. My dream would never have come true without the help of NextGen. Musicians everywhere are thankful for the amazing time and effort you've put into my project!”  
                      </blockquote>
                      <h6 className="block-profile mt-20">
                        Dalton Dellsperger
                        <span>TownWave Co-Founder</span>
                      </h6>
                    </div>
                  

                  
                    <div className="block-quote t-left">
                      <blockquote>
                        “I'm blown away by the rapid productivity of this team. Stunning designs, robust software, and a friendly team. Couldn't ask for better.” 
                      </blockquote>
                      <h6 className="block-profile mt-20">
                        Ivan Vasquez 2
                        <span>MPE</span>
                      </h6>
                    </div>
                  

                  
                    <div className="block-quote t-left">
                      <blockquote>
                        “These guys undercut the mom and pop shops and still provide quality better than anything I've ever seen. Absolutely recommend.” 
                      </blockquote>
                      <h6 className="block-profile mt-20">
                        Israel B.
                        <span> Icon Machine Shop</span>
                      </h6>
                    </div>
                  

                

                </Slider>
            </div>

          </div>
        </div>
      </div>
      </div>
    )
  }
}