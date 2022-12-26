import Image from "next/image";
import styles from "../styles/components/Button.module.css";

export default function Button(props) {
  return (
    <button className={styles.button} type="button" onClick={props.onClick}>
      {props.text}
    </button>
  );
}
