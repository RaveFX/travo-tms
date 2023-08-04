import React from "react";

const DAYS = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getDate();

export default function Calendar() {
  return (
    <div className="my-3 px-3">
      <div className="grid grid-cols-7 gap-0 overflow-x-auto border rounded-md">
        {Array.from({ length: DAYS }, (_, i) => ++i).map((e) => (
          <div className="first:border-l-0 last:border-r hover:bg-slate-700 flex flex-col items-center justify-center cursor-pointer border-l item border-b h-[200px] relative">
            <div className="absolute top-0 right-2">{e}</div>
            <div className="">test</div>
          </div>
        ))}
      </div>
    </div>
  );
}
