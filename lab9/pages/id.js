import Head from 'next/head';
import Link from 'next/link';
import IdSearch from '../components/IdSearch';
import styles from '../components/PageStyles/styles.module.css';

const ID = ()=>{
    return(
    <center>
        <div>
            <Head>
                <title>IdSearch</title>
            </Head>
            <Link href = "/name">
                <a className = {styles.link}>Name</a>
            </Link>
            <br/>
            <Link href = "/type">
                <a className = {styles.link}>Type</a>
            </Link>
            <br/>
            <IdSearch/>
            <div className = {styles.result} id = "reportingArea">

            </div>
        </div>
        </center>
    )
}

export default ID;
