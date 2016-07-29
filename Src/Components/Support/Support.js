import React, { Component } from 'react'
import { render } from 'react-dom'

import  './Support.scss'

export default class Support extends Component {

    render() {
        return (
            <article className="support">
                <section>
                    <h1>支持</h1>
                </section>
                <ul>
                    <li>
                        <i className="fa fa-blind" aria-hidden="true"></i>
                        <h3>文字</h3>
                        <p>想写啥就写啥,内心独白</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair" aria-hidden="true"></i>
                        <h3>图片</h3>
                        <p>发个照片,应景一下</p>
                    </li>
                    <li>
                        <i className="fa fa-wheelchair-alt" aria-hidden="true"></i>
                        <h3>语音</h3>
                        <p>语音的魅力,时光也挡不住</p>
                    </li>
                    <li>
                        <i className="fa fa-car" aria-hidden="true"></i>
                        <h3>视频</h3>
                        <p>动词哒词,动词哒词</p>
                    </li>

                </ul>
            </article>
        )
    }
}
