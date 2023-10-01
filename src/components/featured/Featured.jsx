import Image from 'next/image'
import styles from './featured.module.css'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.featured_title}>
        <span className={styles.greeting_name}>Hey! I'm Marik.</span> Checkout
        some of my rants and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.post__imgContainer}>
          <Image className={styles.post__image} src='/p1.jpeg' alt='' fill />
        </div>
        <div className={styles.post__textContainer}>
          <h1 className={styles.post__title}>Lorem ipsum dolor sit amet.</h1>
          <p className={styles.post__desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, quos, quia, quas voluptate repellat dolorum
            voluptatum, voluptates nemo doloribus quibusdam. Quisquam voluptas
            voluptate repellat dolorum voluptatum, voluptates nemo doloribus
            quibusdam.
          </p>
          <button className={styles.post__button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
