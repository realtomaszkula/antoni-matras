import * as React from 'react';
import { AccentContainer } from './container';
import { TileAccent, TileBody, TileCategory, TilePrimaryTitle } from './tile';

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

export default Vision;
