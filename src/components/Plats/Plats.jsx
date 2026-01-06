import Image from "next/image"
import styles from "./Plats.module.scss"

export default function Plats() {
  return(
    <section id="Plats" className={styles.container}>

      <section className={`${styles.wrapper} ${styles.borderOrange}`}>
        <header className={styles.flex}>
          <Image
            src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-riz.png"
            alt="Icone de riz"
            width={32}
            height={32}
          />
          <p className={styles.orangeYellowtail}>Plats à base de riz</p>
        </header>
        
        <div className={styles.secondFlex}>
          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/riz/risotto.png"
              alt="Risotto"
              width={300}
              height={300}
            />

            <figcaption>Risotto aux fruits de mer</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/riz/riz-frit.png"
              alt="Riz frit"
              width={300}
              height={300}
            />

            <figcaption>Riz frit</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/riz/riz-au-curry.png"
              alt="Riz au curry"
              width={300}
              height={300}
            />

            <figcaption>Riz au curry</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/riz/paella-aux-crevettes.png"
              alt="Paella aux crevettes"
              width={300}
              height={300}
            />

            <figcaption>Paella aux crevettes</figcaption>
          </figure>

        </div>
      </section>

      <section className={`${styles.wrapper} ${styles.borderRed}`}>
        <header className={styles.flex}>
          <Image
            src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-autres-plats.png"
            alt="Icone des autres plats"
            width={32}
            height={32}
          />
          <p className={styles.redYellowtail}>Autres plats</p>
        </header>

        <div className={styles.secondFlex}>
          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/autres/pates-aux-fruits-de-mer.png"
              alt="Pates aux fruits de mer"
              width={300}
              height={300}
            />

            <figcaption>Pates aux fruits de mer</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/autres/pot-d-oden.png"
              alt="Pot d'oden"
              width={300}
              height={300}
            />

            <figcaption>Pot d&apos;oden</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/autres/ragout-de-pierres-brulees.png"
              alt="Ragoût de pierres brûlées"
              width={300}
              height={300}
            />

            <figcaption>Ragoût de pierres brûlées</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/autres/lasagnes.png"
              alt="Lasagne"
              width={300}
              height={300}
            />

            <figcaption>Lasagne</figcaption>
          </figure>

        </div>
      </section>

      <section className={`${styles.wrapper} ${styles.borderGreen}`}>
        <header className={styles.flex}>
          <Image
            src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-desserts.png"
            alt="Icone des desserts"
            width={32}
            height={32}
          />
          <p className={styles.greenYellowtail}>Desserts</p>
        </header>

        <div className={styles.secondFlex}>
          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/desserts/croquembouche.png"
              alt="Croquembouche"
              width={300}
              height={300}
            />

            <figcaption>Croquembouche</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/desserts/oshiruko.png"
              alt="Oshiruko"
              width={300}
              height={300}
            />

            <figcaption>Oshiruko</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/desserts/semla.png"
              alt="Semla"
              width={300}
              height={300}
            />

            <figcaption>Semla</figcaption>
          </figure>

          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/desserts/dango.png"
              alt="Dango"
              width={300}
              height={300}
            />

            <figcaption>Dango</figcaption>
          </figure>

        </div>
      </section>

      <section className={`${styles.wrapper} ${styles.borderPink}`}>
        <header className={styles.flex}>
          <Image
            src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-gateau-de-mariage.png"
            alt="Icone du dessert XXL"
            width={32}
            height={32}
          />
          <p className={styles.pinkYellowtail}>Dessert XXL</p>
        </header>

        <div className={styles.secondFlex}>
          <figure>
            <Image
              src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/plats/dessert-xxl/gateau-de-mariage.png"
              alt="Gateau de mariage"
              width={300}
              height={300}
            />

            <figcaption>Gateau de mariage</figcaption>
          </figure>
        </div>

      </section>
    </section>
  )
}