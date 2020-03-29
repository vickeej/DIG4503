import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from '../components/PageStyles/styles.module.css';

const Name = ()=>{
    return(
    <center>
        <div>
            <Head>
                <title>NameSearch</title>
            </Head>
            <Link href = "/name">
                <a className = {styles.link}>ID</a>
            </Link>
            <br/>
            <Link href = "/type">
                <a className = {styles.link}>Type</a>
            </Link>
            <br/>
            <IdSearch/>
            <div className = {styles.report} id = "reportingArea">

            </div>
        </div>
        </center>
    )
}

export default Name;
