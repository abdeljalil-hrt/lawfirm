import React from 'react'
import about_1 from './img/about_1.png'
import about_2 from './img/about_2.png'
import offer1 from './img/offer_img_1.png'
import offer2 from './img/offer_img_2.png'
import offer3 from './img/offer_img_3.png'
import teams1 from './img/team/team_member_1.png'
import teams2 from './img/team/team_member_2.png'
import teams3 from './img/team/team_member_3.png'
import blog1 from './img/blog/blog_1.png'
import blog2 from './img/blog/blog_2.png'
import blog3 from './img/blog/blog_3.png'



function Home() {
  return (
   <>
     <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Finest And <br />
                                Strongest Law <br />
                                Firm Win The World</h1>
                            <p>Subdue which man creeping was image you dry lesser every live our be gree male
                                may living beginning appear moveth beast </p>
                            <div className="banner_btn">
                                <a href="#" className="btn_1">More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

    {/* <!-- our_offer part start--> */}
    <section className="our_offer case_study section_padding">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-5 col-sm-10">
                    <div className="section_tittle">
                        <h2>Recent Case Study</h2>
                        <p>Over their the abundantly every midst place thing them them winged you're
                            beginning forth you. Fruit seas very does can after herb moved so was Kind </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={offer1} alt="offer_img_1" />
                            <div className="hover_text">
                                <h2>RBanking & Finance</h2>
                                <p>Bank Protected</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={offer2} alt="offer_img_1" />
                            <div className="hover_text">
                                <h2>RBanking & Finance</h2>
                                <p>Bank Protected</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={offer3} alt="offer_img_1" />
                            <div className="hover_text">
                                <h2>RBanking & Finance</h2>
                                <p>Bank Protected</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- our_offer part end--> */}

    {/* <!-- team_part part start--> */}
    <section className="team_part our_offer section_bg section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-10">
                    <div className="section_tittle">
                        <h2>Meet Our Attorneys</h2>
                        <p>Over their the abundantly every midst place thing them them winged you're
                            beginning forth you. Fruit seas very does can after herb moved so was Kind </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={teams1} alt="offer_img_1" />
                            <div className="hover_text">
                                <p>jevenmartyn@ariclaw.com</p>
                                <div className="team_social_icon">
                                    <a href="#"> <span className="ti-twitter"></span> </a>
                                    <a href="#"> <span className="ti-skype"></span> </a>
                                    <a href="#"> <span className="ti-instagram"></span> </a>
                                </div>
                            </div>

                        </div>
                        <div className="team_member_info">
                            <h4>Stephen Hockin</h4>
                            <p>Crime Lawyer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={teams2} alt="offer_img_1" />
                            <div className="hover_text">
                                <p>jevenmartyn@ariclaw.com</p>
                                <div className="team_social_icon">
                                    <a href="#"> <span className="ti-twitter"></span> </a>
                                    <a href="#"> <span className="ti-skype"></span> </a>
                                    <a href="#"> <span className="ti-instagram"></span> </a>
                                </div>
                            </div>
                        </div>
                        <div className="team_member_info">
                            <h4>Jeven Martyn</h4>
                            <p>Finance Lawyer</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={teams3} alt="offer_img_1" />
                            <div className="hover_text">
                                <p>jevenmartyn@ariclaw.com</p>
                                <div className="team_social_icon">
                                    <a href="#"> <span className="ti-twitter"></span> </a>
                                    <a href="#"> <span className="ti-skype"></span> </a>
                                    <a href="#"> <span className="ti-instagram"></span> </a>
                                </div>
                            </div>

                        </div>
                        <div className="team_member_info">
                            <h4>Donald Tisar</h4>
                            <p>Crime Lawyer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- team_part part end--> */}

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

    {/* <!-- blog_part part start--> */}
    <section className="blog_part section_padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-10">
                    <div className="section_tittle">
                        <h2>Latest From Blog</h2>
                        <p>Over their the abundantly every midst place thing them them winged you're beginning
                            forth you fruit seas very does can after herb moved so was kind </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={blog1} alt="offer_img_1" />
                            <div className="hover_text">
                                <div className="single-home-blog">
                                    <a href="blog.html"> <i className="ti-bookmark"></i> Finance</a>
                                    <a className="time"> <i className="ti-time"></i> March 30, 2019</a>
                                    <a href="blog.html">
                                        <h5 className="card-title">Day to fill you greater together
                                            life open set seed</h5>
                                    </a>
                                    <p>Created images moving living fowl earth freed two hath first you
                                        does you life above living a Give and earth light appear moved
                                        behold go day seasons it made you more so fifty tosand on board
                                        of the ready </p>
                                    <ul>
                                        <li> <span className="ti-heart"></span>0 Like</li>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={blog2} alt="offer_img_1" />
                            <div className="hover_text">
                                <div className="single-home-blog">
                                    <a href="blog.html"> <i className="ti-bookmark"></i> Finance</a>
                                    <a className="time"> <i className="ti-time"></i> March 30, 2019</a>
                                    <a href="blog.html">
                                        <h5 className="card-title">Day to fill you greater together
                                            life open set seed</h5>
                                    </a>
                                    <p>Created images moving living fowl earth freed two hath first you
                                        does you life above living a Give and earth light appear moved
                                        behold go day seasons it made you more so fifty tosand on board
                                        of the ready </p>
                                    <ul>
                                        <li> <span className="ti-heart"></span>0 Like</li>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_offer_part">
                        <div className="single_offer">
                            <img src={blog3} alt="offer_img_1" />
                            <div className="hover_text">
                                <div className="single-home-blog">
                                    <a href="blog.html"> <i className="ti-bookmark"></i> Finance</a>
                                    <a className="time"> <i className="ti-time"></i> March 30, 2019</a>
                                    <a href="blog.html">
                                        <h5 className="card-title">Day to fill you greater together
                                            life open set seed</h5>
                                    </a>
                                    <p>Created images moving living fowl earth freed two hath first you
                                        does you life above living a Give and earth light appear moved
                                        behold go day seasons it made you more so fifty tosand on board
                                        of the ready </p>
                                    <ul>
                                        <li> <span className="ti-heart"></span>0 Like</li>
                                        <li> <span className="ti-comments"></span>2 Comments</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- blog_part part end--> */}
   </>
  )
}

export default Home