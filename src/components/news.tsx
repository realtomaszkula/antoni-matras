import * as React from 'react';
import Container from './container';
import Tile, { TileBody, TileCategory, TilePrimaryTitle } from './tile';

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

export default News;
