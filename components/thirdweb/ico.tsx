import React, { useState } from "react";
 import { Web3Button } from '@thirdweb-dev/react';
 import cn from 'classnames';
 import styles from './ico.module.css';
 import { TokenCounter } from "./token-counter";
 import InfoIcon from "../icons/icon-info";
import IconDiscord from "../icons/icon-discord";
 
 
 export default function IcoEntry() {
  const [amountToClaim, setAmountToClaim] = useState("");


 
   return (
     <div className={styles.container}>
       <TokenCounter />
       <div className={cn(styles.form)}>
         <div className={styles['form-row']}>
           <label className={cn(styles['input-label'])} htmlFor="text-input-field">
             <div className={cn(styles['header-right'])}>
               <a href="https://polygonscan.com/token/0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <InfoIcon />
               </a>
             </div>
             <input
               type="text"
               placeholder="Enter amount to claim"
               onChange={(e) => setAmountToClaim(e.target.value)}
               className={styles.input} />
             <Web3Button
               accentColor="#6580cb"
               colorMode="dark"
               contractAddress="0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6"
               action={(contract) => contract.erc20.claim(amountToClaim)}
               onSuccess={() => alert("Claimed!")}
               onError={(err) => alert(err)}
             >
               Claim Tokens
             </Web3Button>
           </label>
         </div>
       </div>
       <a href="https://izzzy.xyz/discord" 
       className={styles.float}
       target="_blank"
       rel="noopener noreferrer"
       >
        <div className={styles.myFloat}>
         <IconDiscord />
        </div>
       </a>
     </div>
   );
 }
