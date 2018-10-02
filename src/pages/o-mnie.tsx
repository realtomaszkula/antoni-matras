import { css } from 'emotion';
import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { BlockAccent, BlockPrimary } from '../components/block';
import Container from '../components/container';
import Layout from '../components/layout';
import Antek from '../images/antek-mami.jpg';
import CollegiumNovum from '../images/collegium-novum.jpg';
import { Theme } from '../utils/theme';

const Banner: React.StatelessComponent = () => (
  <BlockPrimary
    className={css`
      position: relative;
      height: 300px;
      padding: 0;
      margin: 1rem 0;
    `}
  >
    <img
      src={CollegiumNovum}
      className={css`
        opacity: 0.4;
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
      `}
    />
  </BlockPrimary>
);

const Title: React.StatelessComponent = () => (
  <BlockAccent
    className={css`
      margin-bottom: 1rem;
      @media (min-width: 786px) {
        margin-bottom: 0;
      }
    `}
  >
    <h1
      className={css`
        text-align: center;
        margin: 0;
      `}
    >
      Antoni Matras
    </h1>
  </BlockAccent>
);

const experience = [
  'Wieloletnie doświadczenie zawodowe zarówno korporacyjne oraz w organie administracji państwowej pozwala mi na skuteczną pomoc  drugiemu człowiekowi.',
  'Jestem zaangażowany również  w działalność społeczno - wolontaryjną .',
  'W swojej działalności kieruje się zawsze zasadami etyki zawodowej dbając o zachowanie wysokich standardów w każdym aspekcie wykonywania zadań.',
  'Poprzez dotychczasowe zaangażowanie zawodowo-społeczne jestem otwarty na potrzeby każdego mieszkańca Krakowa',
];

const Experience: React.StatelessComponent = () => (
  <ul>
    {experience.map((text, i) => (
      <li key={i}>{text}</li>
    ))}
  </ul>
);

const ProfilePic: React.StatelessComponent = () => (
  <img
    src={Antek}
    className={css`
      max-width: 354px;
      display: block;
      margin: 0 auto;
      @media (min-width: 768px) {
        position: absolute;
        width: 100%;
        top: -78px;
      }
    `}
  />
);

const Grid: StyledComponent<any, any, Theme> = styled('div')`
  @media (min-width: 768px) {
    padding: 0 2rem;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr 248px;
    grid-template-areas:
      'title image'
      'experience image'
      'experience image';
  }
`;
const GridItem: StyledComponent<
  { area: 'experience' | 'image' | 'title' },
  any,
  Theme
> = styled('div')`
  @media (min-width: 768px) {
    position: relative;
    grid-area: ${props => props.area};
  }
`;

class AboutMe extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Banner />
          <Grid>
            <GridItem area="title">
              <Title />
            </GridItem>
            <GridItem area="experience">
              <Experience />
            </GridItem>
            <GridItem area="image">
              <ProfilePic />
            </GridItem>
          </Grid>
        </Container>
      </Layout>
    );
  }
}

export default AboutMe;
