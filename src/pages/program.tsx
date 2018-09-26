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
import {
  TilePrimaryTitle,
  TileAccentTitle,
  TilePrimarySubtitle,
} from '../components/tile';
import {
  FaGraduationCap,
  FaFutbol,
  FaHandHoldingHeart,
  FaUniversity,
} from 'react-icons/fa';

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
        grid-template-rows: repeat(12, 30px);
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
        <Container>
          <div
            className={css`
              padding: 1.5rem 0;
            `}
          >
            <TilePrimaryTitle>
              Nowa jakość w postrzeganiu spraw miejskich
            </TilePrimaryTitle>
            <div
              className={css`
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: 140px;
                grid-gap: 24px;
                margin-bottom: 24px;
              `}
            >
              {[
                { title: 'Edukacja', icon: FaGraduationCap },
                { title: 'Sport', icon: FaFutbol },
                { title: 'Kultura', icon: FaUniversity },
                { title: 'Pomoc Społeczna', icon: FaHandHoldingHeart },
              ].map((v, i) => (
                <div
                  key={i}
                  className={css`
                    background-color: var(--accent);
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  `}
                >
                  <h3
                    className={css`
                      margin-bottom: 0.5rem;
                    `}
                  >
                    {v.title}
                  </h3>
                  {<v.icon size="42" />}
                </div>
              ))}
            </div>

            <TilePrimaryTitle>
              Szanowni Mieszkańcy - jako radny deklaruję podjęcie działań celem
              wykonania
            </TilePrimaryTitle>

            <div
              className={css`
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                grid-gap: 1rem;
              `}
            >
              {bullets.map(({ src, children }, index) => (
                <Bullet
                  key={index}
                  src={src}
                  index={index}
                  children={children}
                />
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Program;
