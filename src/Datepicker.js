import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Picker() {
  const [selectedDate, setselectedDate] = useState(null);
  return (
    <div className="datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setselectedDate(date)}
      />
    </div>
  );
}

export default Picker;
