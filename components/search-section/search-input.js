import Image from "next/image";
import classNames from "classnames";
import styles from "../../styles/components/SearchInput.module.css";

export default function SearchInput(props) {
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <div className={styles.search_icon}>
        <Image
          src="/images/search_black.svg"
          alt="search"
          width={21}
          height={21}
        />
      </div>
      <input
        type="text"
        className={styles.search_input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
