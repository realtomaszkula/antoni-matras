import { css } from 'emotion';
import * as React from 'react';
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
import MugShot from '../images/mug-shot.png';
import planty from '../images/planty.jpg';
import BannerImage from '../components/banner-image';

const Portrait = () => (
  <Container>
    <div
      className={css({
        position: 'relative',
      })}
    >
      <img
        className={css({
          backgroundColor: 'white',
          border: '3px solid grey',
          borderRadius: '50%',
          position: 'absolute',
          right: '20%',
          top: '-90px',
          width: 180,
          height: 180,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        })}
        src={MugShot}
      />
    </div>
  </Container>
);

class AboutMe extends React.Component {
  render() {
    return (
      <Layout>
        <BannerImage src={planty} alt="Planty w Krakowie" />
        <Portrait />
        <Container>
          <Tile>
            <TileTitle>O mnie</TileTitle>
            Ex incididunt nisi aute ad aliquip excepteur ea reprehenderit
            nostrud ullamco ex minim. Minim culpa id magna labore nulla sunt
            nostrud duis voluptate veniam. Eu ipsum esse commodo anim nisi in.
            Fugiat aute et aute elit enim consequat adipisicing excepteur
            exercitation. Fugiat voluptate ullamco labore ullamco incididunt id
            commodo ad cillum do commodo cillum culpa. Duis amet sunt et est
            laborum ut sunt consectetur eu reprehenderit voluptate. Incididunt
            et id aliquip minim labore eiusmod qui dolore.
          </Tile>
        </Container>
        <AccentContainer>
          <TileAccent>
            <TilePrimaryTitle>Edukacja</TilePrimaryTitle>
            Ex incididunt nisi aute ad aliquip excepteur ea reprehenderit
            nostrud ullamco ex minim. Minim culpa id magna labore nulla sunt
            nostrud duis voluptate veniam. Eu ipsum esse commodo anim nisi in.
            Fugiat aute et aute elit enim consequat adipisicing excepteur
            exercitation. Fugiat voluptate ullamco labore ullamco incididunt id
            commodo ad cillum do commodo cillum culpa. Duis amet sunt et est
            laborum ut sunt consectetur eu reprehenderit voluptate. Incididunt
            et id aliquip minim labore eiusmod qui dolore.
          </TileAccent>
        </AccentContainer>
        <PrimaryContainer>
          <TilePrimary>
            <TileAccentTitle>Doswiadczenie Zawodowe</TileAccentTitle>
            Ex incididunt nisi aute ad aliquip excepteur ea reprehenderit
            nostrud ullamco ex minim. Minim culpa id magna labore nulla sunt
            nostrud duis voluptate veniam. Eu ipsum esse commodo anim nisi in.
            Fugiat aute et aute elit enim consequat adipisicing excepteur
            exercitation. Fugiat voluptate ullamco labore ullamco incididunt id
            commodo ad cillum do commodo cillum culpa. Duis amet sunt et est
            laborum ut sunt consectetur eu reprehenderit voluptate. Incididunt
            et id aliquip minim labore eiusmod qui dolore.
          </TilePrimary>
        </PrimaryContainer>
      </Layout>
    );
  }
}

export default AboutMe;
