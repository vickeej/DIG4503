import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/PageStyles/styles.module.css';

const Home = () => (
  <div className = {styles.container}>
    <Head>
      <title>Home page</title>
    </Head>
    
    <h1 className = {styles.h1}>Search for a Pokemon by:</h1>
    
    <Link href = "/name">
      <a className = {styles.link}>Name</a>
    </Link>
    <br/>
    <Link href = "/id">
      <a className = {styles.link}>ID</a>
    </Link>
    <br/>
    <Link href = "/type">
      <a className = {styles.link}>Type</a>
    </Link>
  </div>
)

export default Home
