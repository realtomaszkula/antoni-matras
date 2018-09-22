import * as React from 'react';
import { css } from 'react-emotion';
import { FaHeart, FaRetweet, FaShare, FaTwitter } from 'react-icons/fa';
import { PrimaryContainer } from './container';
import { TilePrimary } from './tile';

const MOCK = [
  `Elit nostrud deserunt aliquip dolore culpa.`,
  `Dolore aute officia minim incididunt cillum excepteur culpa magna do Lorem.`,
  `Do pariatur incididunt dolor officia.`,
  `Et reprehenderit pariatur excepteur commodo laborum.`,
  `Veniam non qui non ea anim veniam magna cupidatat irure culpa proident.`,
  `Aute deserunt sit cillum in minim officia veniam.`,
];

const TweetActions = () => (
  <footer
    className={css({
      color: 'var(--primary)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: '24px',
    })}
  >
    <FaRetweet />
    <FaShare />
    <FaHeart />
  </footer>
);

const TweetBody: React.StatelessComponent = ({ children }) => (
  <main
    className={css({
      flex: 1,
      marginbottom: 16,
    })}
  >
    {children}
  </main>
);

const Tweet: React.StatelessComponent = ({ children }) => (
  <section
    className={css({
      background: 'white',
      padding: '1em',
      display: 'flex',
      flexDirection: 'column',
      color: 'black',
    })}
  >
    {children}
  </section>
);

const TweetsGrid: React.StatelessComponent = ({ children }) => (
  <div
    className={css({
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: 24,
    })}
  >
    {children}
  </div>
);

const TweetsTitle: React.StatelessComponent = () => (
  <div
    className={css({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 36,
    })}
  >
    <FaTwitter size="3rem" color="white" />
  </div>
);

const Tweets: React.StatelessComponent = () => (
  <PrimaryContainer>
    <TilePrimary>
      <TweetsTitle />
      <TweetsGrid>
        {MOCK.map((body, i) => (
          <Tweet key={i}>
            <TweetBody>{body}</TweetBody>
            <TweetActions />
          </Tweet>
        ))}
      </TweetsGrid>
    </TilePrimary>
  </PrimaryContainer>
);

export default Tweets;
