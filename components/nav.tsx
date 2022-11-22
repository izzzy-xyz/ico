import Link from 'next/link';
import cn from 'classnames';
import { BRAND_NAME } from '../lib/constants';
import styles from './nav.module.css';
import Logo from './icons/icon-logo';
import React from 'react';
import ViewSource from './view-source';

type Props = {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  layoutStyles?: any;
  isLive?: boolean;
};

export default function NavLayout({
}: Props) {
  return (
    <>
      <div className={styles.background}>
          <header className={cn(styles.header)}>
            <div className={styles['header-logos']}>
              <Link href="/">
                <div className={styles.logo}>
                  <Logo />
                </div>
              </Link>{BRAND_NAME}
            </div>
          </header>
        <ViewSource />
      </div>
    </>
  );
}
