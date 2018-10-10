import React, { Component } from 'react'
import '../styles/Navigation.scss'

import headLogo from '../assets/headLogo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingBasket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add( faSearch, faShoppingBasket, faBars, faTimes )

class Navigation extends Component {
    constructor() {
        super()

        this.state = {
            links: [ 'Home', 'About Us', 'Portfolio', ' Features', 'Blog', 'Pricing', 'Shortcodes', 'Contact'],
            menu: true,
            isTop: true
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 100;
          if (isTop !== this.state.isTop) {
              this.setState({ 
                  isTop: !this.state.isTop
                })
          }
        });
    }

    showMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
        const nav = document.querySelector(".navLinks")

        if (nav.className === 'navLinks') {
                nav.className += ' responsive'
            } else {
                nav.className = 'navLinks'
            }
    }

   
    render() {
        const link = this.state.links.map( ( item, index) => {
            return (
                <div 
                    className="navLink"
                    key={ index }
                >
                    <a href="#" > { item } </a>
                </div>
            )
        })

        const nav_class = this.state.menu  ? 'nav' : 'nav responsive'
        const nav_id = this.state.isTop ? '' : 'responsive'
        return (
            <div 
                className={nav_class} 
                id={nav_id}
            >
                <div className="navWrap">
                    <div className="navLogo">
                        <img src={ headLogo } />
                    </div>
                    <div className="navLinks">
                        { link }
                        <a href="#" className="linkIcon">
                            <FontAwesomeIcon className="" icon="shopping-basket" />
                        </a> 
                        <a href="#" className="linkIcon">
                            <FontAwesomeIcon icon="search" />
                        </a> 
                    </div>
                </div>
                <div className="headerMenu" onClick={this.showMenu.bind(this)}>
                    <a href="#" id="menu">
                        <FontAwesomeIcon 
                            icon={ this.state.menu ? 'bars' : 'times' }
                            style={{ transition: "0.3s ease-in-out" }}
                        />
                    </a>
                </div>
            </div>
        )
    }
}


export default Navigation
