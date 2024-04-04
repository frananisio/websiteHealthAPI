import React from 'react';
import Naybar from './Naybar';

function Header() {
    return (
        <div id='main'>
            <Naybar/>
            <div className='name'>
                <h1><span>HealthAPI</span><br></br>An API That Helps With Mental And Fisical Health</h1>
                <p className='details'>A platform developed to promote health and well-being. With practical tips, relaxation activities and positive messages, its goal is to make it easier to incorporate healthy habits into your daily life.</p>
                <a href='https://github.com/frananisio/websiteHealthAPI' className='cv-btn'>Repository</a>
            </div>
        </div>
    )
}  

export default Header;