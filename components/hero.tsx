import React, { useState } from 'react'
import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import Image from 'next/image';
import IconMinus from './icons/icon-minus';
import IconPlus from './icons/icon-plus';

export default function Hero() {
  const [one, setOne] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgWrap}>
        <Image
          alt="NFT collection Izzzy website banner"
          src="/bg.svg"
          layout='fill'
          objectFit="cover"
          quality={100} />
      </div>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        Upcoming
        <br className={styleUtils['show-on-desktop']} /> ICO presale
      </h1>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>IZZZY</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Coin Offering</strong>
        </p>
      </div>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['hide-on-mobile'],
          styles.description
        )}
      >
        An interactive blockchain online experience by the community.
      </h2>
      <div className={styles.componentFirst}>
        <div className={styles.componentSecond}>
          <div className={styles.faq}>
            <div className={styles.faqContainer}>
              <div className={styles.faqItem} onClick={() => setOne(!one)}>
                <div className={styles.faqItemLeft}>
                  <div className={styles.faqItemTitle}>What is an ICO?</div>
                </div>
                <div className={styles.faqItemRight}>{one ? <IconMinus /> : <IconPlus />}</div>
              </div>
              {one && (
                <div className={styles.faqItemAnswer}>
                  <div className={styles.faqItemAnswerText}>
                    The main idea of ICOs is leveraging the decentralized systems of blockchain 
                    technology in capital-raising activities that will align the interests of various stakeholders.
                    After the creation of the tokens, they are offered to the investors.
                    The public offering is a democratized form of investing because almost 
                    anyone can become an investor.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
       </div>
      </div>
    );
 }
  