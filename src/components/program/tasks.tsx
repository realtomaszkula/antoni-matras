import * as React from 'react';
import styled, { StyledComponent } from 'react-emotion';
import { Theme } from '../../utils/theme';
import { BlockAccent } from '../block';
/* TODO: replace with GraphQL Query */
import LagniewiczaImage from '../../images/lagniewicza.png';
import PradnickaImage from '../../images/pradnicka-narutowicza.png';
import SosnowieckaImage from '../../images/sosnowiecka.png';
import {
  default as StaregoDebuImage,
  default as WitkowiceImage,
} from '../../images/starego-debu.png';
import StawowaImage from '../../images/stawowa.png';

const TaskImage: StyledComponent<any, any, Theme> = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const TaskDescription: StyledComponent<any, any, Theme> = styled(BlockAccent)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.92;
  min-height: 100px;
  font-size: 1.4rem;
  margin: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskDescriptionText: StyledComponent<any, any, Theme> = styled('span')`
  opacity: 1;
`;

const Task: StyledComponent<any, any, Theme> = styled('div')`
  position: relative;
`;

const TasksGrid: StyledComponent<any, any, Theme> = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-auto-rows: 278px;
  grid-gap: 1rem;
  margin-bottom: 1rem;
`;

const Tasks: React.StatelessComponent = () => {
  const bullets = [
    {
      src: PradnickaImage,
      text: `Budowa chodnika z Żabińca wzdłuż szpitala im.G.Narutowicza do
    ul.Prądnickiej.`,
    },
    {
      src: LagniewiczaImage,
      text: `Budowa kładki pieszej nad torami kolejowymi prowadzącej do ul.Langiewicza.`,
    },
    { src: StawowaImage, text: `Budowa chodnika wzdłuż ul. Stawowej.` },
    {
      src: SosnowieckaImage,
      text: `Budowa chodnika wzdłuż ul. Sosnowieckiej.`,
    },
    {
      src: StaregoDebuImage,
      text: `Uruchomienie komunikacji miejskiej ul. Starego Dębu.`,
    },
    {
      src: WitkowiceImage,
      text: `Rewitalizacja terenu byłego szpitala okulistycznego w Witkowicach`,
    },
  ];

  return (
    <TasksGrid>
      {bullets.map(({ src, text }, index) => (
        <Task key={index}>
          <TaskImage src={src} />
          <TaskDescription>
            <TaskDescriptionText>{text}</TaskDescriptionText>
          </TaskDescription>
        </Task>
      ))}
    </TasksGrid>
  );
};

export default Tasks;
