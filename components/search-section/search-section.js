import Image from "next/image";
import styles from "../../styles/components/SearchSection.module.css";

export default function SearchSection(props) {
  return (
    <div className={styles.search_section}>
      <div className={styles.left_section}>
        <Image
          src="/images/playButton.svg"
          alt="play button"
          width={274}
          height={274}
        />
      </div>
      <div className={styles.right_section}>{props.addOnRight}</div>
    </div>
  );
}
