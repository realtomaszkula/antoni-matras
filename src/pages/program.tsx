import { css } from 'emotion';
import * as React from 'react';
import { BlockPrimary } from '../components/block';
import Container from '../components/container';
import Layout from '../components/layout';
import Categories from '../components/program/categories';
import Tasks from '../components/program/tasks';
import Title from '../components/program/title';

class Program extends React.Component {
  render() {
    return (
      <Layout>
        <Container
          className={css`
            padding: 1rem 0;
          `}
        >
          <Title>Nowa Jakość w postrzeganiu spraw miejskich</Title>
          <Categories />

          <Title>
            Szanowni Mieszkańcy - jako radny deklaruję podjęcie działań celem
            wykonania
          </Title>
          <Tasks />
        </Container>
      </Layout>
    );
  }
}

export default Program;
