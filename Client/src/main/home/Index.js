import React from 'react'
import Banner from './Banner';
import Counting from './Counting';
import Services from './Services';
import Awards from './Award';
import Projects from './Projects';
import Plans from './Plan';
import ContactUs from './Contact';
import Template from '../common/Template';

function Index() {
  return (
    <>
      <Template>
        <Banner />
        <Counting />
        <Services />
        <Awards />
        <Projects />
        <Plans />
        <ContactUs />
      </Template>
    </>
  )
}

export default Index
