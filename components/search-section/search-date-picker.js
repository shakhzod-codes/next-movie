import DatePicker from "react-datepicker";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/components/SearchDatePicker.module.css";

export default function SearchDatePicker(props) {
  return (
    <div>
      <DatePicker
        dateFormat={
          props.type === "timeSlot" ? "dd/MM/yyyy - h:mm aa" : "dd/MM/yyyy"
        }
        showTimeSelect={props.type === "timeSlot" ? true : false}
        className={styles.calendar_input}
        selected={props.date}
        onChange={props.onChange}
      />
    </div>
  );
}
