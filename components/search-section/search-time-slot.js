import SearchInput from "./search-input";
import SearchDatePicker from "./search-date-picker";
import styles from "../../styles/components/SearchTimeSlot.module.css";

export default function SearchTimeSlot({
  theatreName,
  startDate,
  endDate,
  onChangeTheatreName,
  onChangeTimeSlot,
}) {
  return (
    <div className={styles.time_slot}>
      <SearchInput
        placeholder="Theatre name...."
        value={theatreName}
        onChange={onChangeTheatreName}
      />
      <div className={styles.dates}>
        <SearchDatePicker
          type="timeSlot"
          date={startDate}
          onChange={onChangeTimeSlot("start")}
        />
        <SearchDatePicker
          type="timeSlot"
          date={endDate}
          onChange={onChangeTimeSlot("end")}
        />
      </div>
    </div>
  );
}
