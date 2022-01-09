import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Contents',
    Svg: require('../../static/img/content-img.svg').default,
    description: (
      <>
        Here I will share all kinds of content and learning that I'm acquiring about code and the like, in an organized way.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/blog-img.svg').default,
    description: (
      <>
        Here contains all blogposts ever created by me.
      </>
    ),
  },
  {
    title: 'About',
    Svg: require('../../static/img/about-img.svg').default,
    description: (
      <>
        Here's a little bit about my career as a developer and as a person.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
