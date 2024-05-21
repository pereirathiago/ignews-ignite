import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>21 de maio de 2024</time>
            <strong>Creating a monorepo with lerda</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in inventore facilis unde cupiditate quis minima illum nesciunt corporis iusto beatae, aperiam, omnis temporibus doloribus mollitia officia</p>
          </a>
          <a href="">
            <time>21 de maio de 2024</time>
            <strong>Creating a monorepo with lerda</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in inventore facilis unde cupiditate quis minima illum nesciunt corporis iusto beatae, aperiam, omnis temporibus doloribus mollitia officia</p>
          </a>
          <a href="">
            <time>21 de maio de 2024</time>
            <strong>Creating a monorepo with lerda</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in inventore facilis unde cupiditate quis minima illum nesciunt corporis iusto beatae, aperiam, omnis temporibus doloribus mollitia officia</p>
          </a>
          <a href="">
            <time>21 de maio de 2024</time>
            <strong>Creating a monorepo with lerda</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in inventore facilis unde cupiditate quis minima illum nesciunt corporis iusto beatae, aperiam, omnis temporibus doloribus mollitia officia</p>
          </a>
          
        </div>
      </main>
    </>
  )
}