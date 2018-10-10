import React, { Component } from 'react'
import '../styles/Portfolio.scss'

import pfBGI from '../assets/pfBGI.jpg'

class Portfolio extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <div className="portfolio">
                <div className="pfContainer">
                    <div className='pfTitle'>
                        <h1> Waxom is Realization of your Ideas. </h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.                        
                        </p>
                    </div>
                    <div className="pfImg">
                        <img src={pfBGI} width="100%" />
                    </div>
                </div>
                <div className="pfTheme">
                    <div className="ThemeWrap">
                        <div className="ThemeText">
                            <h6>
                                <span> Waxom </span> Multipurpose WordPress Theme
                            </h6>
                            <p>
                                Don't Forget to Rate the Template. Thanks so much!
                            </p>
                        </div>
                        <button id="ThemeBtn">
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio