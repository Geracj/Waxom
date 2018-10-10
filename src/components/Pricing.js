import React, { Component } from 'react'
import '../styles/Pricing.scss'

import priceImg from '../assets/priceIMG.jpg'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCoffee, faComment, faHeart, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'

library.add( faUsers, faCoffee, faComment, faHeart, faProjectDiagram )


class Pricing extends Component {
    constructor() {
        super()

        this.state = {
            numbers: [
                { 
                    icon: 'users',
                    num: '3587',
                    name: 'Satisfied Clients'
                },
                { 
                    icon: 'coffee',
                    num: '207',
                    name: 'Cups of coffee'
                },
                { 
                    icon: 'comment',
                    num: '2500',
                    name: 'Blog posts'
                },
                { 
                    icon: 'heart',
                    num: '873',
                    name: 'Likes'
                },
                { 
                    icon: 'project-diagram',
                    num: '900',
                    name: 'We launched'
                }
            ]
        }
    }
    
    render() {
        const num = this.state.numbers.map( (item, index) => {
            return (
                <div className="priceCard"  key={index} >
                    <FontAwesomeIcon icon={item.icon} className="priceCardIcon" />
                    <h6> {item.num} </h6>
                    <p> {item.name} </p>
                </div>
            )
        })
        return (
            <div>
                <div className="pricing">
                    <div className="priceContainer">
                        <div className="priceImg">
                            <img src={priceImg} />
                        </div>
                        <div className="priceTitle">
                            <h1>
                                Excellent for Mobile Devices.
                            </h1>
                            <p>
                                Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                            </p>
                            <ul>
                                <li> Nam liber tempor cum soluta nobis eleifend option </li>
                                <li> Option congue nihil imperdiet doming id quod mazim placerat facer </li>
                                <li> Eodem modo typi, qui nunc nobis videntur parum futurum; </li>
                                <li> Investigationes demonstraverunt lectores </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pricingNum">
                    <div className="priceNumWrap">
                        { num }
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing