import styles from './SanjiProfile.module.scss'

export default function SanjiProfile() {
  return(
    <section id='Profil' className={styles.sanjiProfile}>
      <div className={styles.content}>
        <p className={styles.yellowtail}>Sanji</p>
        <p className={styles.sourceSans3}>
          Originaire de North blue, j’ai commencé à cuisiner à  bord du Baratie aux cotés de Zeff, un ancien pirate. Puis j’ai rejoint l’équipage au chapeau de paille en tant que cuisinier. <br /><br /> Mon rêve : Trouver All blue
        </p>
      </div>
      <div className={styles.img}>
        <img src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/portrait.png" alt="" />
      </div>
    </section>
  )
}