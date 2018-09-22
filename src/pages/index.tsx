import * as React from 'react';
import BannerImage from '../components/banner-image';
import Layout from '../components/layout';
import Tweets from '../components/tweets';
import AboutMe from '../components/about-me';
import Vision from '../components/vision';
import News from '../components/news';

const IndexPage = () => (
  <Layout>
    <BannerImage />
    <AboutMe />
    <News />
    <Vision />
    <Tweets />
  </Layout>
);

export default IndexPage;
