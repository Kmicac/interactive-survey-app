import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1 className="bold-text">Survey App</h1>
      </div>

      <div className={styles.grid}>
        <Link
          href="/survey"
          className={styles.card}
        >
          <h2>Encuesta<span>-&gt;</span></h2>
          <p>Disfruta en hacer una encuesta interactiva!</p>
        </Link>
      </div>
    </main>
  )
}
