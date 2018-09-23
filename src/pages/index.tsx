import * as React from 'react';
import AboutMe from '../components/about-me';
import Layout from '../components/layout';
import News from '../components/news';
import Tweets from '../components/tweets';
import Vision from '../components/vision';
import Antek from '../images/antoni.jpg';
import { css } from 'emotion';
import { PrimaryDarkContainer } from '../components/container';

const MainImage: React.StatelessComponent<{
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
}> = ({ src, alt, srcSet, sizes }) => (
  <img
    alt={alt}
    src={src}
    srcSet={srcSet}
    sizes={sizes}
    className={css({
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      height: 'auto',
    })}
  />
);

const IndexPage = () => (
  <Layout>
    <PrimaryDarkContainer>
      <MainImage src={Antek} alt="Antoni Matras" />
    </PrimaryDarkContainer>
    <AboutMe />
    <News />
    <Vision />
    <Tweets />
  </Layout>
);

export default IndexPage;
