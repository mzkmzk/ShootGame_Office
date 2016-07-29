import React, { Component } from 'react'
import { render } from 'react-dom'

import  './Banner.scss'

export default class Banner extends Component {

    render() {
        return (
            <article className="banner" style={{height: document.body.scrollHeight}}>
                <section className="banner_text">
                    <h1>Journey</h1>
                </section>
            </article>
        )
    }
}
