import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Wellness Tips' text='Provides practical tips for improving physical and mental health.'/>
                <FeatureBox image={featureimage1} title='Relaxation Tips' text='It presents relaxation activities to relieve stress and promote tranquility.'/>
                <FeatureBox image={featureimage2} title='Positive Messages' text=''/>
            </div>
        </div>
    )
}

export default Feature;