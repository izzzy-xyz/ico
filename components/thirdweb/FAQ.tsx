import React, { useState } from 'react'
import IconPlus from "../icons/icon-plus";
import IconMinus from "../icons/icon-minus";

import styles from './faq.module.css'

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)
  return (
    <div className={styles.componentFirst}>
      <div className={styles.componentSecond}>
        <div className={styles.faq}>
          <div className={styles.roadmapTitle}>FAQ</div>
          <div className={styles.roadmapSubTitle}>Initial Coin Offering ICO</div>
          <div className={styles.faqContainer}>
            <div className={styles.faqItem} onClick={() => setOne(!one)}>
              <div className={styles.faqItemLeft}>
                <div className={styles.faqItemTitle}>What is IzzzyCoin?</div>
              </div>
              <div className={styles.faqItemRight}>{one ? <IconMinus /> : <IconPlus />}</div>
            </div>
            {one && (
              <div className={styles.faqItemAnswer}>
                <div className={styles.faqItemAnswerText}>
                IzzzyCoin is a decentralized, community-building cryptocurrency
                that is “an experiment” developed within the Izzzy Ecosystem.
                Built it on top of the Polygon Blockchain Network, Ethereum-compatible 
                IzzzyCoin can be used for peer-to-peer digital payments or as a payment 
                method with businesses that accept it.
                </div>
              </div>
            )}
            <div className={styles.faqItem} onClick={() => setTwo(!two)}>
              <div className={styles.faqItemLeft}>
                <div className={styles.faqItemTitle}>Where do I buy the IzzzyCoin?</div>
              </div>
              <div className={styles.faqItemRight}>{two ? <IconMinus /> : <IconPlus />}</div>
            </div>
            {two && (
              <div className={styles.faqItemAnswer}>
                <div className={styles.faqItemAnswerText}>
                Currently, IzzzyCoin can only be purchased on our website, which allows 
                you to purchase at significantly lower prices than when izzzyCoin is 
                listed on exchanges.
                </div>
              </div>
            )}
            <div className={styles.faqItem} onClick={() => setThree(!three)}>
              <div className={styles.faqItemLeft}>
                <div className={styles.faqItemTitle}>What is the IZZZY smart contract address?</div>
              </div>
              <div className={styles.faqItemRight}>{three ? <IconMinus /> : <IconPlus />}</div>
            </div>
            {three && (
              <div className={styles.faqItemAnswer}>
                <div className={styles.faqItemAnswerText}>
                We are providing the IZZZY smart contract address as a matter of information:  
                0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6. However, 
                DO NOT send any MATIC here. Also, DO NOT send any 
                IZZZY or other types of tokens here, it will be lost.
                </div>
              </div>
            )}
            <div className={styles.faqItem} onClick={() => setFour(!four)}>
              <div className={styles.faqItemLeft}>
                <div className={styles.faqItemTitle}>How to buy IzzzyCoin?</div>
              </div>
              <div className={styles.faqItemRight}>{three ? <IconMinus /> : <IconPlus />}</div>
            </div>
            {four && (
              <div className={styles.faqItemAnswer}>
                <div className={styles.faqItemAnswerText}>
                Add Polygon Network to your wallet, connect your wallet to the 
                Polygon network, buy Polygon MATIC, swap MATIC to IZZZY. 
                </div>
              </div>
            )}
            <div className={styles.faqItem} onClick={() => setFive(!five)}>
              <div className={styles.faqItemLeft}>
                <div className={styles.faqItemTitle}>What is the IzzzyCoin roadmap?</div>
              </div>
              <div className={styles.faqItemRight}>{four ? <IconMinus /> : <IconPlus />}</div>
            </div>
            {five && (
              <div className={styles.faqItemAnswer}>
                <div className={styles.faqItemAnswerText}>
                To learn more about how the IZZZY platform is working, please see: 
                The IZZZY 1.0 Roadmap available 
                <a
                href='https://izzzy.xyz/roadmap'
                target="_blank"
                rel="noopener noreferrer"
                > here.
                </a>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
