import { css } from 'emotion';
import * as React from 'react';
import BannerImage from '../components/banner-image';
import { PrimaryContainer } from '../components/container';
import Layout from '../components/layout';
import { Tile, TileAccentTitle } from '../components/tile';
import Wawel from '../images/wawel.jpg';

const GridTileCount: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      color: 'var(--primary)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
      fontSize: '2rem',
    })}
  >
    {children}
  </div>
);

const GridTileContent: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    })}
  >
    {children}
  </div>
);

const GridTile: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      borderTop: '5px solid var(--accent)',
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(276px, 1fr))',
      gridGap: 32,
    })}
  >
    {children}
  </div>
);

class Program extends React.Component {
  render() {
    const bullets = [
      'Sit consequat proident anim quis ipsum excepteur.',
      'Nisi in incididunt sit ullamco mollit eiusmod ex ea labore proident laborum eu eu.',
      'Amet non non incididunt consectetur commodo reprehenderit culpa anim Lorem.',
      'Commodo cupidatat dolor cillum fugiat nulla cillum.',
      'Id ut adipisicing laboris excepteur.',
      'Officia esse sint deserunt nostrud do elit et cupidatat amet.',
    ];

    return (
      <Layout>
        <BannerImage src={Wawel} alt="Zamek na Wawelu w Krakowie" />
        <PrimaryContainer>
          <Tile>
            <TileAccentTitle>Program</TileAccentTitle>
            <Grid>
              {bullets.map((content, i) => (
                <GridTile key={i}>
                  <GridTileCount>{i + 1}</GridTileCount>
                  <GridTileContent>{content}</GridTileContent>
                </GridTile>
              ))}
            </Grid>
          </Tile>
        </PrimaryContainer>
      </Layout>
    );
  }
}

export default Program;
