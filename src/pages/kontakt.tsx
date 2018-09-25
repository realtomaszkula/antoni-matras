import { css } from 'emotion';
import * as React from 'react';
import { FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';
import Container, { AccentContainer } from '../components/container';
import Layout from '../components/layout';
import Tile, { TileSubtitle, TileTitle } from '../components/tile';
import Antek from '../images/image10.png';

const GridTileIcon: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      fontSize: '2rem',
      color: 'rgba(0, 0, 0, 0.7)',
    })}
  >
    {children}
  </div>
);

const GridTileContent: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      flex: 1,
      marginLeft: '1.5rem',
      display: 'flex',
      alignItems: 'center',
    })}
  >
    {children}
  </div>
);

const GridTile: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      backgroundColor: 'white',
      color: 'black',
      padding: '1rem',
      display: 'flex',
    })}
  >
    {children}
  </div>
);

const Grid: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: 32,
    })}
  >
    {children}
  </div>
);

class Contact extends React.Component {
  render() {
    const tiles = [
      { icon: <FaEnvelope />, body: 'antoni@example.com' },
      { icon: <FaFacebook />, body: 'facebook.com/antoni' },
    ];

    return (
      <Layout>
        <Container>
          <Tile>
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                '@media(min-width: 700px)': { flexDirection: 'row' },
              })}
            >
              <div
                className={css({
                  marginRight: 54,
                  display: 'none',
                  '@media(min-width: 700px)': {
                    display: 'block',
                  },
                })}
              >
                <img src={Antek} className={css({ height: 300 })} />
              </div>
              <div className={css({ textAlign: 'center' })}>
                <h1
                  className={css({
                    fontSize: '3rem',
                    marginBottom: '2.2rem',
                  })}
                >
                  Antoni Matras
                </h1>
                <div
                  className={css({
                    marginRight: 54,
                    '@media(min-width: 700px)': {
                      display: 'none',
                    },
                  })}
                >
                  <img src={Antek} className={css({ height: 300 })} />
                </div>
                <p
                  className={css({
                    fontSize: '2rem',
                    marginBottom: '2.2rem',
                  })}
                >
                  Lista 2, Miejsce 5
                </p>
                <p className={css({ fontSize: '1.2rem' })}>
                  Komitet Wyborczy Wyborców Jacka Majchrowskiego Obywatelski
                  Kraków
                </p>
              </div>
            </div>
          </Tile>
        </Container>
        <AccentContainer>
          <Tile>
            <Grid>
              {tiles.map(({ icon, body }, i) => (
                <GridTile key={i}>
                  <GridTileIcon>{icon}</GridTileIcon>
                  <GridTileContent>{body}</GridTileContent>
                </GridTile>
              ))}
            </Grid>
          </Tile>
        </AccentContainer>
      </Layout>
    );
  }
}

export default Contact;
