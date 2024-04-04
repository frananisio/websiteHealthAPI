import React from 'react';

function WellnessTips({ tips }) {
    return (
      <div className='s-b-text'>
        <h3>Wellness Tips</h3>
        <p>Provides practical tips for improving physical and mental health.</p>
        <h4>Example:</h4>
        {tips && tips.map(tip => (
          <div key={tip.id}>
            <h4>{tip.title}</h4>
                 <div className='message-content'>
                     <p>{tip.description}</p>
                </div>
          </div>
        ))}
      </div>
    );
  }
  
function RelaxationTips({ tips }) {
    return (
      <div className='s-b-text'>
        <h3>Relaxation Tips</h3>
        <p>It presents relaxation activities to relieve stress and promote tranquility.</p>
        <h4>Example:</h4>
        {tips && tips.map(tip => (
          <div key={tip.id}>
            <h4>{tip.name}</h4>
                <div className='message-content'>
                     <p>{tip.description}</p>
                </div>
          </div>
        ))}
      </div>
    );
}

function PositiveMessages({ messages }) {
    return (
      <div className='s-b-text'>
        <h3>Positive Messages</h3>
        <p>Offers positive messages to inspire and motivate users.</p>
        <h4>Example:</h4>
        {messages && messages.map(message => (
          <div key={message.id} className='message-content'>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
    );
}

function PresentationBox({ type, data, title }) {
    const renderContent = () => {
        switch(type) {
            case 'wellness':
                return <WellnessTips tips={data} />;
            case 'relaxation':
                return <RelaxationTips tips={data} />;
            case 'positive':
                return <PositiveMessages messages={data} />;
            default:
                return null;
        }
    }

    return (
        <div className='a-box'>
                <h2> {title} </h2>
                {renderContent()}
        </div>
    )
}

export default PresentationBox;