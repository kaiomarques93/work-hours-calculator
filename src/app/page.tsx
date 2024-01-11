'use client'

import React, { useState } from "react";
import WorkdayInput from "./components/WorkdayInput";


const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"];

const WorkHoursCalculator: React.FC = () => {
  const [hours, setHours] = useState<number[]>([0, 0, 0, 0]);
  const [minutes, setMinutes] = useState<number[]>([0, 0, 0, 0]);
  const [remainingHours, setRemainingHours] = useState<number>(0);
  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);

  const calculateRemainingHours = () => {
    const totalWorkedMinutes = hours.reduce(
      (acc, h, index) => acc + h * 60 + minutes[index],
      0
    );
  
    const remainingMinutesValue = 2400 - totalWorkedMinutes; // 40 hours * 60 minutes
    const remainingHoursValue = Math.floor(remainingMinutesValue / 60);
    const remainingMinutesValueOnly = remainingMinutesValue % 60;
  
    setRemainingHours(remainingHoursValue);
    setRemainingMinutes(remainingMinutesValueOnly);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Work Hours Calculator</h1>
      {daysOfWeek.map((day, index) => (
        <WorkdayInput
          key={day}
          day={day}
          hours={hours[index]}
          minutes={minutes[index]}
          onChangeHours={(newHours) =>
            setHours((prevHours) => {
              const updatedHours = [...prevHours];
              updatedHours[index] = newHours;
              return updatedHours;
            })
          }
          onChangeMinutes={(newMinutes) =>
            setMinutes((prevMinutes) => {
              const updatedMinutes = [...prevMinutes];
              updatedMinutes[index] = newMinutes;
              return updatedMinutes;
            })
          }
        />
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-5"
        onClick={calculateRemainingHours}
      >
        Calculate Remaining Hours
      </button>
      <div className="mt-4">
        <p className="font-semibold">Remaining Hours for Friday:</p>
        <p>{remainingHours} hours: {remainingMinutes} min</p>
      </div>
    </div>
  );
};

export default WorkHoursCalculator;
