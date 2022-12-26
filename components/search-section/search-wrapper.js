import { useRouter } from "next/router";
import Link from "next/link";
import SearchLayout from "./search-layout";
import SearchTheatre from "./search-theatre";
import SearchTimeSlot from "./search-time-slot";
import { useValues } from "./useValues";
import styles from "../../styles/components/SearchWrapper.module.css";

export default function SearchWrapper(props) {
  const router = useRouter();
  const { search_by } = router.query;
  const {
    theatreName,
    date,
    startDate,
    endDate,
    handleChangeTheatre,
    handleChangeDate,
    handleChangeTimeSlot,
  } = useValues();

  function getAddOn() {
    const text =
      search_by === "theatre"
        ? "Switch to time slot search"
        : "Switch to theatre search";
    const link =
      search_by === "theatre"
        ? "/search?search_by=timeSlot"
        : "/search?search_by=theatre";

    return (
      <Link href={link}>
        <a className={styles.link}>{text}</a>
      </Link>
    );
  }

  function getContent() {
    if (search_by === "theatre") {
      return (
        <SearchTheatre
          theatreName={theatreName}
          date={date}
          onChangeTheatreName={handleChangeTheatre}
          onChangeDate={handleChangeDate}
        />
      );
    }

    return (
      <SearchTimeSlot
        theatreName={theatreName}
        startDate={startDate}
        endDate={endDate}
        onChangeTheatreName={handleChangeTheatre}
        onChangeTimeSlot={handleChangeTimeSlot}
      />
    );
  }

  function handleSearch() {
    let params = {};
    if (search_by === "theatre") {
      params = {
        name: theatreName,
        date,
      };
    } else {
      params = {
        name: theatreName,
        startDate,
        endDate,
      };
    }
    props.onSearch(search_by, params);
  }

  return (
    <SearchLayout addsOn={getAddOn()} onSearch={handleSearch}>
      {getContent()}
    </SearchLayout>
  );
}
