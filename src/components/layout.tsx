import { ThemeProvider } from 'emotion-theming';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import Helmet from 'react-helmet';
import { theme, Theme } from '../utils/theme';
import Footer from './footer';
import Header from './header';
import './layout.css';

const Content: StyledComponent<any, any, Theme> = styled('main')`
  padding-top: ${props => props.theme.layout.headerHeight};
  min-height: 100vh;
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
        <ThemeProvider theme={theme}>
          <>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </>
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
