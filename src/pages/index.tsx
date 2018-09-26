import { css } from 'emotion';
import * as React from 'react';
import Container, {
  AccentContainer,
  PrimaryContainer,
  PrimaryDarkContainer,
} from '../components/container';
import Layout from '../components/layout';
import Tile, {
  TileAccent,
  TileAccentTitle,
  TileBody,
  TileCategory,
  TilePrimary,
  TilePrimaryTitle,
} from '../components/tile';
import Antek from '../images/cover.png';

const AboutMe: React.StatelessComponent = () => (
  <PrimaryContainer>
    <TilePrimary>
      <TileCategory>O mnie</TileCategory>
      <TileAccentTitle>
        Nowa Twarz - Nowoczesny Kraków
      </TileAccentTitle>
      <TileBody>
        Labore sit ullamco tempor amet aute sit esse. Laboris velit quis sit eu
        dolore id ut incididunt ea est reprehenderit. Voluptate cillum ea dolor
        voluptate. Consectetur magna adipisicing ipsum nostrud do duis mollit
        cupidatat est laboris Lorem aliqua. Occaecat nisi reprehenderit nulla
        pariatur laboris anim amet est magna nostrud do.
      </TileBody>
    </TilePrimary>
  </PrimaryContainer>
);

const News: React.StatelessComponent = () => (
  <Container>
    <Tile>
      <TileCategory>Aktualnosci</TileCategory>
      <TilePrimaryTitle>
        Możliwe jest dużo więcej, niż przyzwyczajono nas myśleć
      </TilePrimaryTitle>
      <TileBody>
        Labore sit ullamco tempor amet aute sit esse. Laboris velit quis sit eu
        dolore id ut incididunt ea est reprehenderit. Voluptate cillum ea dolor
        voluptate. Consectetur magna adipisicing ipsum nostrud do duis mollit
        cupidatat est laboris Lorem aliqua. Occaecat nisi reprehenderit nulla
        pariatur laboris anim amet est magna nostrud do.
      </TileBody>
    </Tile>
  </Container>
);

const Vision: React.StatelessComponent = () => (
  <AccentContainer>
    <TileAccent>
      <TileCategory>Program</TileCategory>
      <TilePrimaryTitle>Chcialbym zeby Krakow byl miastem</TilePrimaryTitle>
      <TileBody>
        Labore sit ullamco tempor amet aute sit esse. Laboris velit quis sit eu
        dolore id ut incididunt ea est reprehenderit. Voluptate cillum ea dolor
        voluptate. Consectetur magna adipisicing ipsum nostrud do duis mollit
        cupidatat est laboris Lorem aliqua. Occaecat nisi reprehenderit nulla
        pariatur laboris anim amet est magna nostrud do.
      </TileBody>
    </TileAccent>
  </AccentContainer>
);
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
      maxHeight: 600,
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
  </Layout>
);

export default IndexPage;
