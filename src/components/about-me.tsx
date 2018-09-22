import * as React from 'react';
import { PrimaryContainer } from './container';
import { TileAccentTitle, TileBody, TileCategory, TilePrimary } from './tile';

const AboutMe: React.StatelessComponent = () => (
  <PrimaryContainer>
    <TilePrimary>
      <TileCategory>O mnie</TileCategory>
      <TileAccentTitle>
        Kraków to dla mnie bardzo osobista sprawa.{' '}
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

export default AboutMe;
