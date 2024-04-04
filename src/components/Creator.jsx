import React from 'react';

function Creator(props) {
    return (
        <div id='creator'>
            <div className='creator-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='creator-text'>
                <h2> {props.title} </h2>
                <p> Hello, my name is Maria Francielly.<br/> I am currently a student at the Federal Institute of Pernambuco in the integrated technical course in Electronics. I have been passionate about technology since I had my first computer. Because of this, I am always trying to get more knowledge in the area in order to create and carry out projects that always interest me. Also, I'm currently a FullStack Development student in the Programmers of Tomorrow course. </p>
                <a href='https://github.com/frananisio' className='cv-btn'>GitHub</a>
            </div>
        </div>
    )
}

export default Creator;