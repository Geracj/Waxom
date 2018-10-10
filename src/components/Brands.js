import React, { Component } from 'react'
import '../styles/Brands.scss'

import brandsImg1 from '../assets/brandsImg1.png'
import brandsImg2 from '../assets/brandsImg2.png'
import brandsImg3 from '../assets/brandsImg3.png'
import brandsImg4 from '../assets/brandsImg4.png'

class Brands extends Component {
    constructor() {
        super()

        this.state = {
            images: [
                {
                    src: `${brandsImg1}`
                },
                {
                    src: `${brandsImg2}`
                },
                {
                    src: `${brandsImg3}`
                },
                {
                    src: `${brandsImg4}`
                }
            ]
        }
    }

    render() {
        const image = this.state.images.map( (item, index) => {
            return (
                <div className="brandsImage" key={index}>
                    <img src={item.src} />
                </div>
            )
        })
        return (
            <div className="brands">
                <div className="brandsWrap">
                    { image }
                </div>
            </div>
        )
    }
}

export default Brands