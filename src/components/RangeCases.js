import React, { useContext, memo } from 'react';
import { CasesContex } from '../context/CasesProvider';

function RangeCases() {
  const {
    currentDate,
    setSelectDate,
    currentRangeValue,
    setcurrentRangeValue
  } = useContext(CasesContex);

  console.log(currentRangeValue)


  function handleDatesValues(value) {
    setcurrentRangeValue(value)
    setSelectDate(currentDate[value - 1])
  }

  return (
    <>
      <div className=' justify-center'>
        <div className='flex'>
          {
            currentDate.map((date) => {
              return <h2 className='animate-pulse p-5 text-white text-lg mr-9 ml-9 w-full'>{date}</h2>
            })
          }
        </div>
      </div>
      <input
        min='1'
        max='7'
        value={currentRangeValue}
        onChange={({ target }) => handleDatesValues(Number(target.value))}
        type="range"
        className="
          form-range
          w-full
          h-6
          p-0
          bg-transparent
          focus:outline-none focus:ring-0 focus:shadow-none
        "
        id="customRange"
      />
    </>
  );
}

export default memo(RangeCases);
