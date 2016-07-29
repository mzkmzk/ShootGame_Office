import React , { Component } from 'react'
import { render } from 'react-dom'

import Banner from '../../Components/Banner/Banner'
import Feature from '../../Components/Feature/Feature'
import Support from '../../Components/Support/Support'
import Footer from '../../Components/Footer/Footer'

import './Index.scss'

export default class Index extends Component {

    render() {
        return (
            <article>
                <Banner />
                <Feature />
                <Support />
                <Footer />
            </article>
        )
    }
}





