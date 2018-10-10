import React, { Component } from 'react'
import '../styles/Features.scss'

import ft1 from '../assets/ft1.jpg'
import ft2 from '../assets/ft2.jpg'
import ft3 from '../assets/ft3.jpg'
import ft4 from '../assets/ft4.jpg'
import ft5 from '../assets/ft5.jpg'
import ft6 from '../assets/ft6.jpg'

class Features extends Component {
    constructor () {
        super()

        this.state = {
            isOpen: false,
            cards: [
                {
                    img: `${ft1}`,
                    title: 'Claritas Etiam Processus',
                    text: 'Photography, Nature'
                },
                {
                    img: `${ft2}`,
                    title: 'Quam Nutamus Farum',
                    text: 'Graphic Design, Mock-Up'
                },
                {
                    img: `${ft3}`,
                    title: 'Usus Legentis Videntur',
                    text: 'Photography, Holiday'
                },{
                    img: `${ft4}`,
                    title: 'Claritas Etiam Processus',
                    text: 'Photography, Nature'
                },
                {
                    img: `${ft5}`,
                    title: 'Quam Nutamus Farum',
                    text: 'Graphic Design, Mock-Up'
                },
                {
                    img: `${ft6}`,
                    title: 'Usus Legentis Videntur',
                    text: 'Photography, Holiday'
                }
            ]
        }
    }

    handleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleClick = () => {
        const modal = document.querySelectorAll('.ftModal')
        const modalImg = document.querySelectorAll(".ftModalContent")
        
        for (let i = 0; i < modal.length; i++) {
            modal[i].style.display = 'block'
        }

        for (let i = 0; i < modalImg.length; i++) {
             modalImg[i].src = this.src
        }
    }

    modalClose = () => {
        const modal = document.querySelectorAll('.ftModal')

        for (let i = 0; i < modal.length; i++) {
             modal[i].style.display = 'none'
        }
    }

    render() {
        const cards = this.state.cards.map(( item, index ) => {
            return (
                <div className="ftCard" key={index}>
                    <img 
                        src={item.img} 
                        className="ftImg" 
                        onClick={this.handleClick.bind(this)}
                    />
                    <div className='cardText'>
                        <h6> {item.title} </h6>
                        <p> { item.text} </p>
                    </div>
                    <div className="ftModal">
                        <span 
                            className="ftClose"
                            onClick={this.modalClose.bind(this)}
                        >
                            &times;
                        </span>
                        <img className="ftModalContent"  />
                    </div>
                </div>
            )
        })


        return (
            <div className='features'>
                <div className="ftContainer">
                    <div className="ftTitle">
                        <h1>
                            Our Latest Projects.
                        </h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii
                        </p>
                    </div>
                    <div className='ftCards'>
                        { cards }
                    </div> 
                    <div className='ftCards'>
                        {this.state.isOpen ? cards : ' '}
                    </div>
                    <div className='ftBtn'>
                        <button 
                            id="ftBtn"
                            onClick={this.handleOpen.bind(this)}
                        >
                            { this.state.isOpen ? 'Hide' : 'Load more'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features
