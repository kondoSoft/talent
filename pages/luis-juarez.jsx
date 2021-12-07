/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Portfolio.module.css'

const Skills = ({skill, knowledge}) => (
  <div className={styles.skillContainer}>
    <span className={styles.skillTitle}>{skill}</span>
    <div className={styles.back}></div>
    <div className={styles.skill} width={knowledge}></div>
  </div>
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luis Manuel Juarez Flores - Mid Senior JS developer at Kondosoft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <sidebar className={styles.sidebar}>
        <h2>Luis Manuel Juarez Flores</h2>
        <p>Circuito de Guelatao # 11-A, Villahermosa, 86000, México</p>
        <p>+ 52 9934251376</p>
        <p>luismanueljf@gmail.com</p>
        <p>Mexican</p>
        
        <h2>Skills</h2>
        <Skills skill='HTML' knowledge={90}/>
        <Skills skill='CSS' knowledge={70}/>
        <Skills skill='JS' knowledge={80}/>
        <Skills skill='React' knowledge={80}/>
        <Skills skill='Python' knowledge={60}/>
        <Skills skill='React Native' knowledge={80}/>
      </sidebar>
      <main className={styles.main}>
        <div className={styles.centerImg} >
          <Image className={styles.devImage} src='/cyberpolin.jpeg' width='200' height='200'/>
        </div>
        <p>I love TI in general, and have 5+ years working as a developer from Frontend to Backend, latelly I've work on React Native. I focus my eforth to deliver good quality code and a great UI.</p>
        <p>I have good experience using aws, django and firebase, all this with React JS which is my main tecnology. I like to use typescrypt whenever I can, and I love to learn new ways to do stuff and solve problems</p>
        <h2>Projects I've worked in...</h2>
        <ul>
          <li>
            <h3>Inkind</h3>
            <p>Inkind is a startup for restaurants present in USA, New Zealand and Australia, I was part of a team in charge of code the whole app again, we did 2 apps, the users one and the restaurant owners one.</p>
          </li>
          <li>
            <h3>INE's website</h3>
            <p>I was part of a team whom redesign INE's website, we make it work with a wordpress implementation, and make sure al responsivness was  perfect.</p>
          </li>
          <li>
            <h3>Garage ATA</h3>
            <p>As a lead developer I code a complete Mobile aplication, also a React web app, and the Backend using Django and Django Rest Framewoek.</p>
          </li>
          <li>
            <h3>Yum Delivery</h3>
            <p>At Kondosoft we made an in house app, which is a clone of Uber Eats, we did it as an excercise, this project is a 3 mobile apps connected via django API, and Firebase as a realtime DB. After finishing it a second company took over it to manage the actual service, now it is it's own company and is working on 3 different states in Mexico.</p>
          </li>
          <li>
            <h3>Letica</h3>
            <p>We migrate an entire aplication from Java for Android to IOS and Android using React Native, the backend was made by another company using RoR.</p>
          </li>
        </ul>
      </main>
    </div>
  )
}
