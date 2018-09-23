import { injectGlobal, css } from 'emotion';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import Footer from './footer';
import Header from './header';
import './layout.css';

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
        <main
          className={css({
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 'var(--header-height)',
            minHeight: '100vh',
          })}
        >
          <div
            className={css({
              flex: 1,
            })}
          >
            {children}
          </div>
          <Footer />
        </main>
      </>
    )}
  />
);

export default Layout;
