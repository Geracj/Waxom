import React, { Component } from 'react'
import '../styles/About.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faCog, faFolderOpen, faBrain } from '@fortawesome/free-solid-svg-icons'

library.add( faPencilAlt, faCog, faFolderOpen, faBrain )


class About extends Component {
    constructor() {
        super()

        this.state = {
            cards: [
                {
                    icon: 'pencil-alt',
                    title: 'Web & App Design',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error ullam blanditiis, deserunt atque architecto!'
                },
                {
                    icon: 'brain',
                    title: 'Development',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error ullam blanditiis, deserunt atque architecto!'
                },
                {
                    icon: 'cog',
                    title: 'Customization',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error ullam blanditiis, deserunt atque architecto!'
                },
                {
                    icon: 'folder-open',
                    title: 'Marketing',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error ullam blanditiis, deserunt atque architecto!'
                }
            ]
        }
    }

    render() {
        const card = this.state.cards.map( (item, index) => {
           return (
                <div key={index} className="aboutCard" >
                    <FontAwesomeIcon icon={item.icon} className="aboutIcons" />
                    <h1> {item.title} </h1>
                    <p> {item.text} </p>
                </div>
            )
        })
        return (
            <div className="about">
                <div className="aboutContainer">
                    { card }
                </div>    
            </div>
        )
    }
}

export default About
                 