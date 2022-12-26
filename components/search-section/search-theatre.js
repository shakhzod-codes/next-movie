import SearchInput from "./search-input";
import SearchDatePicker from "./search-date-picker";
import styles from "../../styles/components/SearchTheatre.module.css";

export default function SearchTheatre({
  theatreName,
  date,
  onChangeTheatreName,
  onChangeDate,
}) {
  return (
    <div className={styles.theatre}>
      <SearchInput
        className={styles.input}
        placeholder="Search by theatre...."
        value={theatreName}
        onChange={onChangeTheatreName}
      />
      <SearchDatePicker type="theater" date={date} onChange={onChangeDate} />
    </div>
  );
}
