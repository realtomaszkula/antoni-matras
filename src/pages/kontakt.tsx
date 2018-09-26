import * as React from 'react';
import { FaEnvelope, FaFacebook } from 'react-icons/fa';
import { BlockAccent } from '../components/block';
import Container from '../components/container';
import Layout from '../components/layout';
import {
  MediaBlock,
  MediaBlockContent,
  MediaBlockIcon,
} from '../components/media-block';
import Tile from '../components/tile';

class Contact extends React.Component {
  render() {
    const tiles = [
      { icon: <FaEnvelope />, body: 'antoni@example.com' },
      { icon: <FaFacebook />, body: 'facebook.com/antoni' },
    ];

    return (
      <Layout>
        <BlockAccent>
          <Container>
            <h1>Masz pytania? Skontaktuj się ze mną</h1>
          </Container>
        </BlockAccent>
        <Tile>
          {tiles.map(({ icon, body }, i) => (
            <MediaBlock key={i}>
              <MediaBlockIcon>{icon}</MediaBlockIcon>
              <MediaBlockContent>{body}</MediaBlockContent>
            </MediaBlock>
          ))}
        </Tile>
      </Layout>
    );
  }
}

export default Contact;
