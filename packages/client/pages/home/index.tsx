import Icon, { GithubOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

const externalUrl = {
  github: 'https://github.com/UnrilWever',
  juejin: 'https://juejin.cn/user/1341824770783198',
  zCool: 'https://www.zcool.com.cn/u/22816751#tab_anchor',
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GW-HOMEPAGE</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/images/profile.jpg" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.navBar}>
          <div className={styles.avatar}>
            <Image width={150} height={150} src="/images/profile.jpg" alt="Picture of the author"></Image>
          </div>
        </div>
        <div className={styles.introduction}>
          <h1 style={{ marginTop: '6rem', fontSize: '1.5rem', fontWeight: '200', userSelect: 'none' }}>
            I&apos;m GreayWall
          </h1>
        </div>
        <ul className={styles.buttonBox}>
          <li>
            <Link href="/">
              <Button className={styles.navButtonLink} type="link">
                <h3>Enter</h3>
                <h3>Blog</h3>
              </Button>
            </Link>
          </li>
          <li>
            <div className={styles.navButton}>
              <Button
                shape="circle"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '5.5rem',
                  height: '5.5rem',
                }}
                href={externalUrl.github}
                target="_blank"
              >
                <GithubOutlined style={{ marginTop: '0.72rem', fontSize: '5.5rem' }} />
              </Button>
            </div>
          </li>
          <li>
            <div className={styles.navButton}>
              <Button
                shape="circle"
                style={{ width: '5.5rem', height: '5.5rem' }}
                href={externalUrl.juejin}
                target="_blank"
              >
                <Image src="/svg/稀土掘金.svg" width={100} height={100}></Image>
              </Button>
            </div>
          </li>
          <li>
            <div className={styles.navButton}>
              <Button
                shape="circle"
                style={{ width: '5.5rem', height: '5.5rem' }}
                href={externalUrl.zCool}
                target="_blank"
              >
                <Image src="/svg/站酷.svg" width={150} height={150}></Image>
              </Button>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;