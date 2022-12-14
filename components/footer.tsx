import cn from 'classnames';
 import VercelLogo from '../components/icons/icon-platform';
 import styles from './footer.module.css';
 import { COPYRIGHT_HOLDER, SITE_NAME, SMART_CONTRACT, LEGAL_URL, REPO } from '../lib/constants';
 
 export function CreatedByVercel() {
   return (
     <a
       href="https://vercel.com"
       className={cn(styles['footer-link'], styles['footer-logo'])}
       target="_blank"
       rel="noopener noreferrer"
     >
       <div className={styles['secondary-text']}>Created by </div>
       <VercelLogo color="white" />
     </a>
   );
 }
 
 export default function Footer() {
   return (
     <footer className={cn(styles.footer)}>
       <div className={styles['footer-legal']}>
         <div className={styles['footer-hostedby']}>
           <CreatedByVercel />
           <div className={styles['footer-separator']} />
         </div>
         <div className={styles['footer-copyright']}>
           Copyright © {`${new Date().getFullYear()} `} {COPYRIGHT_HOLDER || `${SITE_NAME}.`} All
           rights reserved.
         </div>
         <div className={styles['footer-center-group']}>
           <p className={styles['footer-paragraph']}>
             <a
               href={REPO}
               className={styles['footer-link']}
               target="_blank"
               rel="noopener noreferrer"
             >
               Twitter
             </a>
           </p>
           <div className={styles['footer-separator']} />
           <p className={styles['footer-paragraph']}>
             <a
               href={SMART_CONTRACT}
               className={styles['footer-link']}
               target="_blank"
               rel="noopener noreferrer"
             >
               Polygonscan Block Explorer
             </a>
           </p>
           {LEGAL_URL && (
             <>
               <div className={styles['footer-separator']} />
               <p className={styles['footer-paragraph']}>
                 <a
                   href={LEGAL_URL}
                   className={styles['footer-link']}
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   Legal
                 </a>
               </p>
             </>
           )}
         </div>
       </div>
     </footer>
   );
 }