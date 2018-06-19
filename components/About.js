import React from 'react'
import Slider from './Slider'

export default () => (
  <div className="resume">
    <div className="content">
      <div className="block-content mb-100">
        <div className="row">
          <div className="col-md-12 framed-image">
            <div className="frame">
              <img src="https://res.cloudinary.com/devhound/image/upload/v1529234899/service_hgbsmj.jpg" />
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '100px'}}>
          <div className="col-md-12">
            <div className="main-title">
              <h1 className="mb-20">About NextGen</h1>
              <h5 className="uppercase">We do things differently!</h5>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="col-md-12">
            <div className="mb-40">
              <h2 className="uppercase ng-lead-intro-fix">
                <i>"WE HELP OUR PARTNERS LEVERAGE TECHNOLOGY TO IMPROVE THEIR BUSINESS"</i>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <div className="block-content mb-100 pb-10">
        <div className="row">
          <div className="col-md-12">
            <div className="services mt-30">
              <div className="block-service clearfix">

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-server"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Full-Stack Development</h5>
                    <p>We do it all. Top to Bottom. Front to Back.</p>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-tools"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Easily Updatable</h5>
                    <p>We build with the future in mind by ensuring future updates are easy and quick</p>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-pencil-5"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Fabulous Design</h5>
                    <p>We focus a lot of effort on design. What looks good, feels good.</p>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-flash"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Performance</h5>
                    <p>We create light-weight, high-speed software</p>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-mobile-1"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Fully Responsive</h5>
                    <p>Mobile is the future... We design for it</p>
                  </div>
                </div>

                <div className="col-sm-6 text-center">
                  <div className="ico mb-15">
                    <i className="icon-phone-outline"></i>
                  </div>
                  <div className="det">
                    <h5 className="mb-10">Support</h5>
                    <p>We are always here for you 24/7</p>
                  </div>
                </div>

    
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block-content">
        <div className="row">
          <div className="col-md-12">
            <span class="page-number emph-1">- 2/5 -</span>
          </div>
          <p className="lead-intro">This document is not to be distributed to anyone outside of your organization.</p>
        </div>
      </div>
    </div>
  </div>
)