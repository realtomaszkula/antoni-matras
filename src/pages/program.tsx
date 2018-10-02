import { css } from 'emotion';
import * as React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import Categories from '../components/program/categories';
import Tasks from '../components/program/tasks';
import { TitlePrimary } from '../components/title';

class Program extends React.Component {
  render() {
    return (
      <Layout>
        <Container
          className={css`
            padding: 1rem 0;
          `}
        >
          <TitlePrimary>
            Nowa Jakość w postrzeganiu spraw miejskich
          </TitlePrimary>
          <Categories />

          <TitlePrimary>
            Szanowni Mieszkańcy - jako radny deklaruję podjęcie działań celem
            wykonania
          </TitlePrimary>
          <Tasks />
        </Container>
      </Layout>
    );
  }
}

export default Program;
