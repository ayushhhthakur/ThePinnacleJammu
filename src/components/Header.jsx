import React from 'react';

const Header = () => {
    const smoothScroll = (target) => {
        // Implement your smooth scrolling logic here
        console.log(`Smooth scroll to ${target}`);
    };

    return (
        <header>
            <div className="header-area">
                <div className="header-top_area d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-md-6">
                                <div className="social_media_links">
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6">
                                <div className="short_contact_list">
                                    <ul>
                                        <li>
                                            <a href="mailto:info@tcbelico.pt" target="_blank">
                                                <i className="fa fa-envelope"></i> info@tcbelico.pt
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:233429093" target="_blank">
                                                <i className="fa fa-phone"></i>+91 9797574737
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sticky-header" className="main-header-area">
                    <div className="container">
                        <div className="header_bottom_border">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-2">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="img/logo/tcb_logo_header_small.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7">
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                    <a className="active" onClick={() => smoothScroll('home')}>
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a onClick={() => smoothScroll('about')}>About Us</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => smoothScroll('services')}>Services</a>
                                                </li>
                                                <li>
                                                    <a onClick={() => smoothScroll('contact')}>Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                    <div className="Appointment">
                                        <div className="book_btn d-none d-lg-block">
                                            <a className="popup-with-form" href="#test-form">
                                                Request Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
