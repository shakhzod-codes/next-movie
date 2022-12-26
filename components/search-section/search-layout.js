import Button from "../button";
import styles from "../../styles/components/SearchLayout.module.css";

export default function SearchLayout(props) {
  return (
    <div className={styles.search_layout}>
      <p className={styles.title}>Search your movies here!</p>
      {props.children}
      <div className={styles.buttons}>
        <Button text="Search" onClick={props.onSearch} />
        {props.addsOn}
      </div>
    </div>
  );
}
