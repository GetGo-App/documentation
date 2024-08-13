import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Personalized Your Journey',
    Svg: require('@site/static/img/landing1.svg').default,
    description: (
      <>
        Tell us your preferences, and we'll create a personalized itinerary that fits your 
        style and budget. Skip the hassle of research and book your perfect trip with ease.
      </>
    ),
  },
  {
    title: 'Capture Every Moment',
    Svg: require('@site/static/img/landing2.svg').default,
    description: (
      <>
        Instantly share unedited photos, create a visual travel diary, and connect with friends 
        to share your adventures. Make every trip unforgettable with our real-time photo updates!
      </>
    ),
  },
  {
    title: 'Travel Destination Finder',
    Svg: require('@site/static/img/landing3.svg').default,
    description: (
      <>
        Discover hidden gems and trending places with GetGo's map. Read authentic reviews from fellow travelers, and 
        create a personalized travel journal to document your unique adventures.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
