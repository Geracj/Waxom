import React, { Component } from 'react'
import '../styles/Home.scss'
import Slider from "react-slick"

class Home extends Component {
    constructor() {
        super()

        this.state = {
            isTop: true
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 200;
          if (isTop !== this.state.isTop) {
              this.setState({ 
                  isTop: !this.state.isTop
                })
          }
        });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            fade: true,
            autoplay: true,
            pauseOnDotsHover: true,
            pauseOnHover: true,
          }

        return (
            <div className="home">
                <div className="homeSlider">
                    <Slider {...settings}>
                        <div className="homeSlide">
                            <h6>
                                Unique and Modern Design
                            </h6>
                            <h1>
                                Portfolio PSD Template
                            </h1>
                            <p>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imper- <br /> diet doming id qoud mazim placerat facer possim assum.
                            </p>
                        </div>
                        <div className="homeSlide">
                            <h6>
                                 Portfolio PSD Template
                            </h6>
                            <h1>
                                 Unique and Modern Design
                            </h1>
                            <p>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imper- <br /> diet doming id qoud mazim placerat facer possim assum.
                            </p>
                        </div>
                        <div className="homeSlide">
                            <h6>
                                Unique and Modern Design
                            </h6>
                            <h1>
                                Portfolio PSD Template
                            </h1>
                            <p>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imper- <br /> diet doming id qoud mazim placerat facer possim assum.
                            </p>
                        </div>
                        <div className="homeSlide">
                            <h6>
                                 Portfolio PSD Template
                            </h6>
                            <h1>
                                 Unique and Modern Design
                            </h1>
                            <p>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imper- <br /> diet doming id qoud mazim placerat facer possim assum.
                            </p>
                        </div>
                        <div className="homeSlide">
                            <h6>
                                Unique and Modern Design
                            </h6>
                            <h1>
                                Portfolio PSD Template
                            </h1>
                            <p>
                                Nam liber tempor cum soluta nobis eleifend option congue nihil imper- <br /> diet doming id qoud mazim placerat facer possim assum.
                            </p>
                        </div>

                    </Slider>
                    <div className="sliderWrap">
                        <button id="sliderBtn">
                            Get starter
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Home
