import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Technology from './Technology';
import Role from './Role';
import Features from './Features';
import TrueFirmReview from './TruefirmReview';
import ContactUs from './Contact';
import Template from '../common/Template';

function Index() {
  return (
    <div>
      <Template>
        <Banner />
        <Services />
        <Technology />
        <Role />
        <Features />
        <TrueFirmReview />
        <ContactUs />
      </Template>
    </div>
  )
}

export default Index
