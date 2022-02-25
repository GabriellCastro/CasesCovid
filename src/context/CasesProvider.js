import { createContext, useEffect, useState } from "react";
import supabase from '../services/supabaseconfig';

export const CasesContex = createContext({});

export function CasesProvider({ children }) {
  const [currentRangeValue, setcurrentRangeValue] = useState(0)
  const [selectDate, setSelectDate] = useState("2020-05-11")
  const [currentDate, setCurrentDate] = useState(['2020-05-11', '2020-07-06', '2020-08-31', '2020-09-28', '2020-10-12', '2021-03-22', '2021-07-12']);
  const [availableVariants, setAvailableVariants] = useState([]);
  const [covidData, setCovidData] = useState([]);
  const [variantCurrent, setVariantCurrent] = useState("");

  useEffect(() => {
    async function getCovidDate(selectDate) {
      let { data } = await supabase
        .from('datacovid')
        .select('*')
        .eq("date", selectDate)

      setCovidData(data);
    }
    getCovidDate(selectDate)
  }, [selectDate])

  async function handleValuesVariants(variantSelected) {
    let { data: variantData } = await supabase
      .from('datacovid')
      .select('*')
      .eq("date", selectDate)

    setCovidData(variantData);
    setVariantCurrent(variantSelected)
  }

  const contextValue = {
    currentDate,
    setCurrentDate,
    handleValuesVariants,
    availableVariants,
    setAvailableVariants,
    covidData,
    variantCurrent,
    setSelectDate,
    selectDate,
    currentRangeValue, setcurrentRangeValue
  }

  return (
    <CasesContex.Provider value={contextValue}>
      {children}
    </CasesContex.Provider>
  )
}
