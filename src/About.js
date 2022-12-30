import React from 'react'
import about_1 from './img/about_1.png'
import about_2 from './img/about_2.png'

function About() {
  return (
    <>
        {/* <!-- breadcrumb start--> */}
        <section className="breadcrumb breadcrumb_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb_iner text-center">
                            <div className="breadcrumb_iner_item">
                                <h2>about us</h2>
                                <p>home <span>//</span>about us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb start--> */}

        <section className="about_part section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section_tittle text-center">
                                <h2>
                                    The lawyers truth is not truth but consistency or a consistent expediency
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-sm-7">
                            <div className="about_part_img">
                                <img src={about_1}
                                    alt="#"/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-5">
                            <div className="about_part_img">
                                <img src={about_2}
                                    alt="#"/>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="about_text text-center">
                                <p>
                                    Fly seed a it hath own light deep our meat land bearing won bring you two were together divide set kind stars firmament evning from forth seas let air whales which of gathering be sixth. Seed won't. Creature she'd living said blessed. Rule plac also seasons was itself of for days subdue great own male itsel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="service_part section_padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-law"></span>
                            <h2>Get Law Advice</h2>
                            <p>Over their the abund every placed thing them them winged you beginning forth</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-scale"></span>
                            <h2>Review The Case</h2>
                            <p>Over their the abund every placed thing them them winged you beginning forth</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-siren"></span>
                            <h2>Winning Guarantee</h2>
                            <p>Over their the abund every placed thing them them winged you beginning forth</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single_service_part">
                        <div className="single_service_text">
                            <span className="flaticon-policeman"></span>
                            <h2>Fully Suppport</h2>
                            <p>Over their the abund every placed thing them them winged you beginning forth</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        {/* <!-- cta_part part start--> */}
        <section className="cta_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cta_text">
                            <h2>Their was of wherein darkness tree them own it firmament
                                fourth you whose void grass gree</h2>
                            <a href="#" className="cta_btn">Request Free Consultation</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- cta_part part end--> */}
    </>
  )
}

export default About