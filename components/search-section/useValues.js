import { useState, useCallback } from "react";

export function useValues() {
  const [theatreName, setTheatreName] = useState("");
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeTheatre = useCallback((event) => {
    setTheatreName(event.target.value);
  }, []);

  const handleChangeDate = useCallback((value) => {
    setDate(value);
  }, []);

  const handleChangeTimeSlot = useCallback((dateType) => {
    return (value) => {
      if (dateType === "start") {
        setStartDate(value);
      } else {
        setEndDate(value);
      }
    };
  }, []);

  return {
    theatreName,
    date,
    startDate,
    endDate,
    handleChangeTheatre,
    handleChangeDate,
    handleChangeTimeSlot,
  };
}
