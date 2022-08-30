import React from 'react'
import FeatureBox from './FeatureBox'
import Featureimage1  from '../images/feature_1.png'
import Featureimage2 from '../images/feature_2.png'
import Featureimage3 from '../images/feature_3.png'

function Features() {
    return (
        <div id="featurs">
          <div className='a-container'>
              <FeatureBox image={Featureimage1} title="Development course"/>
              <FeatureBox image={Featureimage2} title="Development course"/>
              <FeatureBox image={Featureimage3} title="Development course"/>

          </div>
        </div>
    )
}

export default Features
