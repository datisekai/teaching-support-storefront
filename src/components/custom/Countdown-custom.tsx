"use client";

import Countdown from "react-countdown";

interface ICountdownCustom {
  date: number;
}

const CountdownCustom: React.FC<ICountdownCustom> = ({ date }) => {
  return <Countdown daysInHours date={date} />;
};
export default CountdownCustom;
