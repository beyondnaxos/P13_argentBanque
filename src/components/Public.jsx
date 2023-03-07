import { Link } from 'react-router-dom'
import styles from './Public.module.css'

const Public = () => {
  const content = (
    <section className={styles.public}>
      <header>
        <h1>Welcome to the store</h1>
      </header>

      <main className={styles.mainContainer}>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          elit libero, a pharetra augue. Nullam id dolor id nibh ultricies
          vehicula ut id elit.
        </p>
        <address className={styles.address}>
            <Link className={styles.link} to="/login">Log as Employee</Link>
            <br />
            <Link className={styles.link}  to="/main">Go to the store</Link>
            <br />
            repair Store <br />
            1234 Main St <br />
            Anytown, USA 12345
        </address>
      </main>

        <footer className={styles.footer}>
            <p>© 2023 repair Store</p>

        </footer>

    </section>
  )
  return content
}

export default Public