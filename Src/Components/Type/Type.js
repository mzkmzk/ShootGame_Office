import React, { Component } from 'react'
import { render } from 'react-dom'

import  './Type.scss'

export default class Type extends Component {

    render() {
        return (
            <article className="support">
                <section>
                    <h1>模式</h1>
                </section>
                <ul>
                    <li>
                        <i className="fa fa-blind" aria-hidden="true"></i>
                        <h3>闯关模式</h3>
                        <p>独特的障碍物和怪兽,我要拿高分</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair" aria-hidden="true"></i>
                        <h3>对战模式</h3>
                        <p>带上你的子弹,搞定你的敌人</p>
                    </li>
                </ul>
            </article>
        )
    }
}
