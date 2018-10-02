import * as React from 'react';
import { BlockAccent, BlockPrimary } from '../components/block';
import Layout from '../components/layout';
import { TitleAccent, TitlePrimary } from '../components/title';
import Container from '../components/container';

const Tile: React.StatelessComponent<{
  theme: 'accent' | 'primary';
  children: { content: string; title: string; category: string };
}> = ({ children, theme }) => {
  const [Block, Title] =
    theme === 'primary'
      ? [BlockPrimary, TitleAccent]
      : [BlockAccent, TitlePrimary];

  return (
    <Block>
      <Container>
        <h3>{children.category}</h3>
        <Title>{children.title}</Title>
        <p>{children.content}</p>
      </Container>
    </Block>
  );
};

const OMnie: React.StatelessComponent = () => (
  <Tile
    theme="primary"
    children={{
      category: `O mnie`,
      title: `Nowa Twarz nowoczesny Kraków`,
      content: `Zdobyte zawodowe doświadczenie mam zamiar wykorzystać dla rozwoju naszego miasta`,
    }}
  />
);

const Program: React.StatelessComponent = () => (
  <Tile
    theme="accent"
    children={{
      category: `Program`,
      title: `Nowe podejście do aktualnych problemów`,
      content: `Przedstawiam moje pomysły dla sprawnego funkcjonowania naszego miasta`,
    }}
  />
);

const IndexPage = () => (
  <Layout>
    <OMnie />
    <Program />
  </Layout>
);

export default IndexPage;
