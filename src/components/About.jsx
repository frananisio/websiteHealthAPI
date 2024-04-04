import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p> The API was created with the aim of promoting health and well-being in a practical and effective way. Inspired by the growing need for balance in an increasingly fast-paced world, this API offers practical tips, relaxation activities and positive messages to make it easier to incorporate healthy habits into your everyday life. </p>
                <button> {props.button} </button>
            </div>
        </div>
    )
}

export default About;