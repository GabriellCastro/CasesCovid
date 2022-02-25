import React, { useContext, useState } from 'react';
import { CasesContex } from '../../context/CasesProvider';

import Header from '../../components/Header';
import RangeCases from '../../components/RangeCases';
import MapChart from '../../components/MapChart';
import SelectVariants from '../../components/SelectVariants';
import Loading from '../../components/Loading';
import ReactTooltip from "react-tooltip";

function Home() {
  const { covidData } = useContext(CasesContex);
  const [content, setContent] = useState("");

  if(covidData.length === 0) return <Loading />;
  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <RangeCases />
        <SelectVariants />
        <MapChart setTooltipContent={setContent}/>
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </>
  );
}

export default Home;
