import React from 'react'
import logo from './img/footer-logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'

function Footer() {
    const year=new Date().getFullYear();
  return (
    <footer className="footer-area">
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-sm-6 col-xl-3">
                <div className="single-footer-widget footer_1">
                    <a href="">
                        <img src={logo} alt=""/></a>
                    <p>
                        Created. Image moving living fowl earth fruitful. Two hath first you're doesn you life above. Living give and earth light for appear moved their behold
                    </p>
                    <div className="social_icon">
                        <a href="#">
                            <i className="ti-facebook"><FaFacebookF/></i>
                        </a>
                        <a href="#">
                            <i className="ti-twitter-alt"><BsTwitter /></i>
                        </a>
                        <a href="#">
                            <i className="ti-instagram"><FiInstagram/></i>
                        </a>
                        <a href="#">
                            <i className="ti-skype"><AiFillLinkedin /></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-xl-3">
                <div className="single-footer-widget">
                    <h4>Our Service</h4>
                    <ul>
                        <li><a href="#">Car accident</a></li>
                        <li><a href="#">Personal injury</a></li>
                        <li><a href="#">Family law</a></li>
                        <li><a href="#">Bank and financial</a></li>
                        <li><a href="#">Capital market</a></li>
                        <li><a href="#">Employment Law</a></li>
                    </ul>

                </div>
            </div>
            <div className="col-sm-6 col-xl-3">
                <div className="single-footer-widget footer_icon">
                    <h4>Contact Info</h4>
                    <p>4361 Morningview Lane Artland
                                                                                                                                                                Latimer, IA 50452</p>
                    <ul>
                        <li><a href="#"><i className="ti-mobile"></i>+02 - 32 365 2654</a></li>
                        <li><a href="#"><i className="ti-email"></i>ariclaw@law.com</a></li>
                        <li><a href="#"><i className="ti-world"></i>ariclawyerfirm.com</a></li>
                    </ul>
                </div>
            </div>
            {/* <div className="col-sm-6 col-xl-3">
                <div className="single-footer-widget footer_3">
                    <h4>Instagram</h4>
                    <div className="footer_img"> */}
                        {/* <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_1.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div>
                        <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_2.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div>
                        <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_3.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div>
                        <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_4.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div>
                        <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_5.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div>
                        <div className="single_footer_img">
                            <img src="img/footer_img/footer_img_6.png" alt=""/>
                            <a href="#">
                                <i className="ti-instagram"></i>
                            </a>
                        </div> */}

                    {/* </div>
                </div>
            </div> */}
        </div>

    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="copyright_part_text text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <p className="footer-text m-0">
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                    Copyright &copy;
                                        {year}
                                   
                                   
                                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */} </p>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">Careers</a></li>
                                        <li><a href="#">Faq</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer