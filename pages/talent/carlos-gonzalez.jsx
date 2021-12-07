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
        <title>Carlos González - Senior FullStack developer at Kondosoft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Raleway:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <sidebar className={styles.sidebar}>
        <h2>Carlos Antonio González Vasconcelos</h2>
        <p>Calle 6 #3, Cumbres 7 Altozano Tabasco, Villahermosa, 86000, México</p>
        <p>+ 52 9931175435</p>
        <p>cyberpolin@gmail.com</p>
        <p>Mexican</p>
        
        <h2>Skills</h2>
        <Skills skill='HTML' knowledge={90}/>
        <Skills skill='CSS' knowledge={70}/>
        <Skills skill='JS' knowledge={80}/>
        <Skills skill='React' knowledge={80}/>
        <Skills skill='Python' knowledge={80}/>
        <Skills skill='React Native' knowledge={80}/>
        <Skills skill='Scrum' knowledge={95}/>
      </sidebar>
      <main className={styles.main}>
        <div className={styles.centerImg} >
          <Image className={styles.devImage} src='/cyberpolin.jpeg' width='200' height='200'/>
        </div>
        

<p>My name is Carlos I live in Mexico, and have 8+ years involve in development, at first a lot of web, then Back end and five years from now started with RN (React Native).</p>

<p>I worked at my state government as a project manager, so I know I can handle several projects at the time with the right team, but also I am pretty good coding myself (which is what I love the most). I lived at SF 5 years ago where I attended a Dev boot camp and where I started working with RN.</p>

<p>Now I live in Mexico, where I'm from and have being working in several RN projects, some of them with Backend developed by my self, some other with a BE team. My las work was with Inkind, where I maintain 3 apps distributed on USA, Canada, Australia and New Zealand, I've been present on two major redesigns and had the opportunity to lead the dev team.</p>

<p>But enough about me, Let me know if you guys want to talk further I'll love to</p>
        <h2>Projects I've worked in...</h2>
        <ul>
          <li>
            <h3>Persona App</h3>
            <p>Persona is a new bank aplication for independent business or freelancers, where the freelancer can handle events and appoinments, also to get paid at the same time.</p>
            <p>While I worked for them I took control on the FullStack on the project, and make the mobile app ready for CI</p>
            <a href='#'>Mobile App</a>
          </li>
          <li>
            <h3>Inkind</h3>
            <p>Inkind works as a restaurant enhancer for the food industry, it helps restaurants to get better incomes, they also provide investment, the app is currently workinig on USA, NZ and Australia.</p>
            <p>As a developer with Inkind I started as a backup dev, then got the lead position, and helped the company with appcenter and React Native overall, at this moment my roll is as a consultant.</p>
            <a href='#'>Mobile App</a>
          </li>
          <li>
            <h3>INE's website</h3>
            <p>As a team manager on this project I manage 2 web developers on a HTML+CSS implementation on a wordpress site. As a developer I set up a open source managment system to safely store all INE's documentation.</p>
            <a href='https://repositoriodocumental.ine.mx/'>Document repository</a>
          </li>
          <li>
            <h3>Garage ATA</h3>
            <p>This is a software to let car owners know when his/her car needs service, provide pictures about the service and help the service provider to manage appointments and more...</p>
            <p>I got involve at this project as a project manager, where I provided 2 developers and administrate tasks, choose tech stack and design the app functionality.</p>
            <a href='#'>Mobile App</a>
            <a href='#'>Web App</a>
          </li>
        </ul>
      </main>
    </div>
  )
}