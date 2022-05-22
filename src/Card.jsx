import React from 'react'
import './card.css'
import logo from './images/image-header-desktop.jpg'
const Card = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                <div className="mainContent">
                    <h1 className="heading">Get <span className='insights'>insights</span> that help your business grow.</h1>
                    <p className="para">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
                    <div className="numbers">
                        <div className="item">
                            10k+
                        </div>
                        <div className="item">
                            314
                        </div>
                        <div className="item">
                            12M+
                        </div>
                    </div>
                    <div className="words">
                        <div className="word one">
                            COMPANIES
                        </div>
                        <div className="word">
                            TEMPLATES
                        </div>
                        <div className="word">
                            QUERIES
                        </div>
                    </div>
                </div>
                <img src={logo} alt="" className="logo" />
                </div>
            </div>

        </>
    )
}

export default Card