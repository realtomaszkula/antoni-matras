import { css } from 'emotion';
import * as React from 'react';
import BannerImage from '../components/banner-image';
import Container, {
  AccentContainer,
  PrimaryContainer,
} from '../components/container';
import Layout from '../components/layout';
import Tile, {
  TileAccent,
  TileAccentTitle,
  TilePrimary,
  TilePrimaryTitle,
  TileTitle,
} from '../components/tile';
import Antek from '../images/antek-mami.jpg';

const Banner: React.StatelessComponent = () => {
  return (
    <Container>
      <div
        className={css`
          padding-top: 4rem;
          display: flex;
        `}
      >
        <img
          src={Antek}
          className={css`
            display: block;
            height: 400px;
            width: auto;
          `}
        />
        <div
          className={css`
            color: white;
            padding: 1rem 5rem;
          `}
        >
          <h1>Antoni Matras</h1>
          <h3>
            Absolwent wydziału prawa i administracji Uniwersytetu
            Jagiellońskiego.
          </h3>
        </div>
      </div>
    </Container>
  );
};

const Bullet: React.StatelessComponent = () => {
  return <div>Bullet</div>;
};

const Bullets: React.StatelessComponent = () => {
  return <div>Bullets</div>;
};

class AboutMe extends React.Component {
  render() {
    const bullets = [
      'Wieloletnie doświadczenie zawodowe zarówno korporacyjne oraz w organie administracji państwowej pozwala mi na skuteczną pomoc  drugiemu człowiekowi.',
      'Jestem zaangażowany również  w działalność społeczno - wolontaryjną .',
      'W swojej działalności kieruje się zawsze zasadami etyki zawodowej dbając o zachowanie wysokich standardów w każdym aspekcie wykonywania zadań.',
      'Poprzez dotychczasowe zaangażowanie zawodowo-społeczne jestem otwarty na potrzeby każdego mieszkańca Krakowa',
    ];

    return (
      <Layout>
        <div
          className={css`
            background: linear-gradient(
              var(--primary-dark) 25%,
              var(--white) 25%
            );
            min-height: 100vh;
          `}
        >
          <Banner />
          <Bullets>
            {bullets.map((bullet, i) => (
              <Bullet key={i}/>
            ))}
          </Bullets>
        </div>
      </Layout>
    );
  }
}

export default AboutMe;
