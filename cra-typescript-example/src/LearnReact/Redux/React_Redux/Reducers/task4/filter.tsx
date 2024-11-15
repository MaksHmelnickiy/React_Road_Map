import { useDispatch, useSelector } from "react-redux";
import { INotes, filterNote } from "./actionCreator";
import React from "react";

export const Filter = () => {
  const btnsFilter = useSelector((state: INotes) => state.notes)
  const filter = useSelector((state: INotes) => state.filter);
  const dispatch = useDispatch();
  const newFilterNotes = Array.from(new Set(btnsFilter.map(item => item.tag)))

  console.log('filter', newFilterNotes)
  return (
    <div>
      <button onClick={() => dispatch(filterNote('ALL'))} disabled={filter === 'ALL'}>
        All
      </button>
      {newFilterNotes.map(item => {
        if(item)
        return (
          <button key={item} onClick={() => dispatch(filterNote(item))} disabled={filter === item}>
            {item}
          </button>
        )
      })}
    </div>
  );
};
