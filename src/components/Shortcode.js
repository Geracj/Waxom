import React, { Component } from 'react'
import '../styles/Shortcode.scss'
import Slider from "react-slick"

import scSlider1 from '../assets/scSlider1.jpg'
import scSlider2 from '../assets/scSlider2.jpg'
import scSlider3 from '../assets/scSlider3.jpg'

class Shortcode extends Component {
    constructor() {
        super()

        this.state = {
            cards: [
                {
                    img: `${scSlider1}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider2}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider3}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider2}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider3}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider1}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider3}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider2}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                },
                {
                    img: `${scSlider1}`,
                    title: 'Lorem ipsum dolor sit amet',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem',
                    btn: 'read more',
                    date: '30',
                    dateText: 'sep'
                }
            ]
        }
    }

    render() {
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            slidesPerRow: 3,
            fade: true,
            autoplay: true,
            pauseOnDotsHover: true,
            pauseOnHover: true,
            adaptiveHeight: true,
          }

          const card = this.state.cards.map( (item, index) => {
              return (
                  <div className="scSlide" key={index} >
                    <img src={item.img} />
                    <div className="scImgSpan">
                        <span className="topSpan"> {item.date} </span>
                        <span className="botSpan"> {item.dateText} </span>
                    </div>
                    <div className='scSlideText'>
                        <h6> {item.title} </h6>
                        <p> {item.text} </p>
                        <button> {item.btn} </button>
                    </div>
                  </div>
              )
          })

        return (
            <div className="shortcode">
                <div className="scContainer">
                    <div className="scTitle">
                        <h1> Recent Post. </h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
                        </p>
                    </div>
                    <div className="scSlideWrap">
                        <Slider {...settings}>
                            { card }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shortcode