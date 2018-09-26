import { css } from 'emotion';
import * as React from 'react';
import Container, { PrimaryDarkContainer } from '../components/container';
import Layout from '../components/layout';
import LagniewiczaImage from '../images/lagniewicza.png';
import PradnickaImage from '../images/pradnicka-narutowicza.png';
import SosnowieckaImage from '../images/sosnowiecka.png';
import {
  default as StaregoDebuImage,
  default as WitkowiceImage,
} from '../images/starego-debu.png';
import StawowaImage from '../images/stawowa.png';
import styled, { StyledComponent } from 'react-emotion';

const Bullet: React.StatelessComponent<{ src: any; index: number }> = ({
  children,
  src,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(12, 50px);

        @media (min-width: 640px) {
          & + & {
            margin-top: 3rem;
          }
        }
      `}
    >
      <img
        src={src}
        className={css`
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          height: 100%;
          width: 100%;
          object-fit: cover;
        `}
      />
      <p
        className={css`
          opacity: 0.92;
          font-size: 1.4rem;
          margin: 0;
          padding: 1rem;
          color: white;
          grid-column: 1 / -1;
          grid-row: span 3 /-1;
          background-color: var(--accent);
          display: flex;
          justify-content: center;
          align-items: center;
          @media (min-width: 640px) {
            grid-column: ${isEven ? '1 / -3' : '3 / -1'};
          }
        `}
      >
        <span
          className={css`
            opacity: 1;
          `}
        >
          {children}
        </span>
      </p>
    </div>
  );
};

class Program extends React.Component {
  render() {
    const bullets = [
      {
        src: PradnickaImage,
        children: `Budowa chodnika z Żabińca wzdłuż szpitala im.G.Narutowicza do
    ul.Prądnickiej.`,
      },
      {
        src: LagniewiczaImage,
        children: `Budowa kładki pieszej nad torami kolejowymi prowadzącej do ul.Langiewicza.`,
      },
      { src: StawowaImage, children: `Budowa chodnika wzdłuż ul. Stawowej.` },
      {
        src: SosnowieckaImage,
        children: `Budowa chodnika wzdłuż ul. Sosnowieckiej.`,
      },
      {
        src: StaregoDebuImage,
        children: `Uruchomienie komunikacji miejskiej ul. Starego Dębu.`,
      },
      {
        src: WitkowiceImage,
        children: `Rewitalizacja terenu byłego szpitala okulistycznego w Witkowicach`,
      },
    ];

    return (
      <Layout>
        <PrimaryDarkContainer>
          {bullets.map(({ src, children }, index) => (
            <Bullet key={index} src={src} index={index} children={children} />
          ))}
        </PrimaryDarkContainer>
      </Layout>
    );
  }
}

export default Program;
