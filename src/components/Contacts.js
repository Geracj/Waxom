import React, { Component } from 'react'
import '../styles/Contacts.scss'

import headLogo from '../assets/headLogo.png'

import footerImg1 from '../assets/footerImg1.png'
import footerImg2 from '../assets/footerImg2.png'
import footerImg3 from '../assets/footerImg3.png'
import footerImg4 from '../assets/footerImg4.png'

class Contacts extends Component {
    constructor() {
        super()

        this.state = {
            posts: [
                { 
                    date: 'September 08, 2018',
                    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
                },
                { 
                    date: 'September 18, 2018',
                    text: 'Diam nonummy nibh euismod tincidunt ut laoreet dolore magna'
                }, 
                { 
                    date: 'October 10, 2018',
                    text: 'Claritas est etiam processus dynamicus, qui sequitur mutationem per seacula quarta decima'
                }
            ],
            twitter: [
                { 
                    text: ' @waxom Cum soluta nobis eleifend option congue nihil imperdiet doming',
                    date: '3 mins ago'
                },
                { 
                    text: 'Mirum est #envato notare quam littera gothica, quam nunc putamus parum anteposuerit litterarum',
                    date: '5 hours ago'
                }, 
                { 
                    text: 'Soluta nobis option bit.ly/1Hniso7',
                    date: '20 days ago'
                }
            ],
            images: [
                {
                    src: `${footerImg1}`
                },
                {
                    src: `${footerImg2}`
                },
                {
                    src: `${footerImg3}`
                },
                {
                    src: `${footerImg4}`
                }
            ]
        }
    }

    render() {

        const post = this.state.posts.map( ( item, index) => {
            return(
                    <div className="fttPost" key={index} >
                        <h6> {item.date} </h6>
                        <p> {item.text} </p>
                    </div>
            )
        })

        const twitter = this.state.twitter.map( ( item, index) => {
            return(
                    <div className="fttTwitter" key={index} >
                        <p> {item.text} </p>
                        <h6> {item.date} </h6>
                    </div>
            )
        })

        const image = this.state.images.map( ( item, index) => {
            return(
                    <div className="fttImage" key={index} >
                        <img src={item.src} />
                    </div>
            )
        })

        return (
            <div className="contacts">
                <div className="footerTop">
                    <div className="fttContainer">
                        <div className="fttLogo">
                            <img src={headLogo} />
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci suscipit lobortis claritatem.</p>
                            <button> Read More </button>
                        </div>
                        <div className='fttPosts'>
                            <h1> Recent Posts </h1>
                            { post }
                        </div>
                        <div className='fttTwitterWrap'>
                            <h1> Our Twitter </h1>
                            { twitter }
                        </div>
                        <div className='fttImages'>
                            <h1> Dribbble Widget </h1>
                            <div className="fttWrap">
                                { image }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerBot">
                    <div className="fbContainer">
                        <div className="fbLinks">
                            <h6> Copyright © 2015 <span id="fbWaxom"> Waxom</span> </h6>
                            <a> Privacy Policy </a>
                            <a id="fbFaq"> FAQ </a>
                            <a> Support </a>
                        </div>
                        <div className="fbText">
                            <a> Designed by <span> ThemeFire </span> </a>
                            <a> Only on <span> Envato Market </span> </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts