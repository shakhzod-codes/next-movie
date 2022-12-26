import Image from "next/image";
import classNames from "classnames";
import styles from "../styles/components/Card.module.css";

export default function Card(props) {
  const { Title, Genre, Duration, Views, Poster } = props.item;

  return (
    <div className={classNames(styles.card, props.className)}>
      <div className={styles.poster}>
        <Image
          src={Poster}
          alt={Title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.badge}>{Genre}</div>
        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.details_item}>
              <Image
                src="/images/clock.svg"
                width={20}
                height={20}
                alt="clock"
              />
              {Duration}
            </div>
            <div className={styles.details_item}>
              <Image src="/images/eye.svg" width={24} height={24} alt="eye" />
              {Views}
            </div>
          </div>
          <p className={styles.title}>{Title}</p>
        </div>
      </div>
    </div>
  );
}
