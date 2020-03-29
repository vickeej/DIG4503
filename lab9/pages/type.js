import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';
import styles from '../components/PageStyles/styles.module.css';

const Type = ()=>{
    return(
    <center>
        <div>
            <Head>
                <title>TypeSearch</title>
            </Head>
            <Link href = "/name">
                <a className = {styles.link}>Name</a>
            </Link>
            <br/>
            <Link href = "/type">
                <a className = {styles.link}>ID</a>
            </Link>
            <br/>
            <IdSearch/>
            <div className = {styles.report} id = "reportingArea">

            </div>
        </div>
        </center>
    )
}

export default Type;
