import { injectGlobal } from 'emotion';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import Footer from './footer';
import Header from './header';

injectGlobal`
  :root {
    --primary-light: #757de8;
    --primary: #3f51b5 ;
    --primary-dark: #26418f;
    --accent-light: #fff350;
    --accent: #e91e63;
    --accent-dark: #c79100;
    --grey: rgba(0, 0, 0, 0.6);
    --header-height: 54px;
  }
`;

const Content = styled('div')({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 'var(--header-height)',
  minHeight: 'calc(100vh - var(--header-height))',
});

const Layout: React.StatelessComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </>
    )}
  />
);

export default Layout;
