'use client'
import React, { useState } from "react";

interface WorkdayInputProps {
  day: string;
  onChangeHours: (hours: number) => void;
  onChangeMinutes: (minutes: number) => void;
  hours: number;
  minutes: number;
}

const WorkdayInput: React.FC<WorkdayInputProps> = ({
  day,
  onChangeHours,
  onChangeMinutes,
  hours,
  minutes,
}) => {
  return (
    <div>
      <label className="block text-gray-600">{day}</label>
      <div className="flex">
        <input
          type="number"
          placeholder="Hours"
          className="w-1/2 p-2 border rounded-md bg-black text-white"
          value={hours}
          onChange={(e) => onChangeHours(Number(e.target.value))}
        />
        <span className="mx-2">:</span>
        <input
          type="number"
          placeholder="Minutes"
          className="w-1/2 p-2 border rounded-md bg-black text-white"
          value={minutes}
          onChange={(e) => onChangeMinutes(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default WorkdayInput;
