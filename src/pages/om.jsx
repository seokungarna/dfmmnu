import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Om'} />
    <Header title="Om">Hantverkarn tipsar</Header>
    <Container center={center}>
      <p>
        Danne Fredriksson var namnet. Har arbetat som snickare och takläggare sedan 80-talet och tänkte dela med mig av mina erfarenheter, förhoppnignsvis 
        är dessa till hjälp till er där ute som famlar i hantverkardjungeln.<br></br>
        Kört fast i något projekt? Frågor? Hör av er för bövelen! <a href="mailto:danne@dfmm.nu?Subject=Hjälp" target="_top">Maila mig</a>
      </p>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
