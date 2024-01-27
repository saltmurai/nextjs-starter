import { useState } from "react";

function Header() {
  const [date, setDate] = useState(new Date("2000-01-01"));

  function handlerDateInput(e) {
    console.log(e.target.value);
    setDate(new Date(e.target.value));
  }
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="text-3xl font-semibold">ENTER YOUR BIRTHDAY</div>
        <input
          value={date.toISOString().split("T")[0]}
          onChange={handlerDateInput}
          type="date"
          className="w-40"
        />
      </div>
    </>
  );
}

export default Header;
