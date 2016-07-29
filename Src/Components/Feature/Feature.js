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
                        <h3>多种方式</h3>
                        <p>支持文字、图片、音频、视频等方式</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair" aria-hidden="true"></i>
                        <h3>自拍登陆</h3>
                        <p>爽一波自拍,自拍又登陆</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair-alt" aria-hidden="true"></i>
                        <h3>偷看别人</h3>
                        <p>尝试人旁观者进入你的内心</p>
                    </li>
                    <li>
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <h3>建立群组</h3>
                        <p>知己分享,只让特殊的好友了解自己</p>
                    </li>
                    <li>
                        <i className="fa fa-plane" aria-hidden="true"></i>
                        <h3>长期保存</h3>
                        <p>在Journey发送的任何内容,承诺长期保存</p>
                    </li>
                    <li>
                        <i className="fa fa-rocket" aria-hidden="true"></i>
                        <h3>承诺安全</h3>
                        <p>你的内心独白,你想保密,就没人能看到</p>
                    </li>
                </ul>
            </article>
        )
    }
}
