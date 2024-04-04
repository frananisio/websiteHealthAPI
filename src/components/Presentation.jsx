import React, { useEffect, useState } from 'react';
import PresentationBox from './PresentationBox';
import axios from 'axios';

function Presentation() { 
    const [wellnessTips, setWellnessTips] = useState(null);
    const [relaxationTips, setRelaxationTips] = useState(null);
    const [positiveMessages, setPositiveMessages] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/wellness-tips')
      .then(response => {
        setWellnessTips(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados', error);
      });

    axios.get('http://localhost:5000/api/relaxation-activities')
      .then(response => {
        setRelaxationTips(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados', error);
      });

    axios.get('http://localhost:5000/api/positive-messages')
      .then(response => {
        setPositiveMessages(response.data);
      })
      .catch(error => {
        console.error('Houve um erro ao buscar os dados', error);
      });
  }, []);

    return (
         <>
            <div id='presentation'>
            <h1>Content</h1>
            <p>Right now, the API is integrated into the website and the messages/tips it offers appear below. <br /> Remember to <strong>initiate </strong>the API.</p>
            </div>

            <div id='features'>
                 <div className='a-container'>
                    <PresentationBox type='wellness' data={wellnessTips}/>
                    <PresentationBox type='relaxation' data={relaxationTips}/>
                    <PresentationBox type='positive' data={positiveMessages}/>
                 </div>
             </div>
          </>
    )
}

export default Presentation;