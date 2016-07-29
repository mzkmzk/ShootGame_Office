import React, { Component } from 'react'
import { render } from 'react-dom'

import  './Feature.scss'

export default class Feature extends Component {

    render() {
        return (
            <article className="feature">
                <section>
                    <h1>特色</h1>
                </section>
                <ul>
                    <li>
                        <i className="fa fa-blind" aria-hidden="true"></i>
                        <h3>多种弹道</h3>
                        <p>支持圆形、螺旋形、贝塞尔等方式</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair" aria-hidden="true"></i>
                        <h3>自定义弹道</h3>
                        <p>支持自定义方程式弹道</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair-alt" aria-hidden="true"></i>
                        <h3>声效</h3>
                        <p>每种子弹,都有啪啪啪的音效</p>
                    </li>
                </ul>
            </article>
        )
    }
}
