import React from 'react'
import service1 from './img/icon/service_1.svg'
import service2 from './img/icon/service_2.svg'
import service3 from './img/icon/service_3.svg'
import service4 from './img/icon/service_4.svg'
import service5 from './img/icon/service_5.svg'
import service6 from './img/icon/service_6.svg'



function Services() {
  return (
    <>
         {/* <!-- breadcrumb start--> */}
        <section className="breadcrumb breadcrumb_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb_iner text-center">
                            <div className="breadcrumb_iner_item">
                                <h2>Our Service</h2>
                                <p>home <span>//</span>Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- breadcrumb start--> */}

        {/* <!-- servicing start--> */}
        <section className="single_service section_padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-sm-10">
                        <div className="section_tittle">
                            <h2>Practice Areas</h2>
                            <p>Over their the abundantly every midst place thing them them winged you're
                                beginning forth you. Fruit seas very does can after herb moved so was Kind </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service1} alt="#" />
                            <h4>Banking & Finance</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service2} alt="#" />
                            <h4>Family Law</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service3} alt="#" />
                            <h4>Insurance Law</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service4} alt="#" />
                            <h4>Ecommerce Law</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service5} alt="#" />
                            <h4>Crime Law</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single_single_service">
                            <img src={service6} alt="#" />
                            <h4>Banking & Finance</h4>
                            <p>After creeping two life sea green which face yielding gat ered was after
                                also upon blessed under whose abdantly one very to let his</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- servicing end--> */}
    </>
  )
}

export default Services