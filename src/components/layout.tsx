import { css } from 'emotion';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';
import Footer from './footer';
import Header from './header';
import './layout.css';

import { ThemeProvider } from 'emotion-theming';
import { theme } from '../utils/theme';

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
        <ThemeProvider theme={theme}>
          <>
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
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
