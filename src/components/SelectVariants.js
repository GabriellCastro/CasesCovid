import React, { useContext, useEffect } from 'react';
import { CasesContex } from '../context/CasesProvider';
import supabase from '../services/supabaseconfig';

function SelectVariants() {
  const { availableVariants, handleValuesVariants, setAvailableVariants } = useContext(CasesContex);

  useEffect(() => {
    async function variantName() {
      let { data: variantData } = await supabase
        .from('datacovid')
        .select('variant')
        .range(0, 23)

      setAvailableVariants(variantData)
    }
    variantName()
  }, []);

  return (
    <div className="flex justify-center mt-4">
      <div className="mb-3 xl:w-96">
        <select
          onChange={({ target }) => handleValuesVariants(target.value)}
          className="form-select appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
          <option disabled selected>Select Variant</option>
          {availableVariants.map(({ variant }, index) => {
            return <option value={variant} key={index}>{variant}</option>
          })}
        </select>
      </div>
    </div>
  );
}

export default SelectVariants;
