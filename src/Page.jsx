import React from 'react'
import BenefitsPage from './Benefits'
import Description from "./Description"
import OverlapPage from './Overlap'
import Pagefeautures from './Pagefeautures'
const Page = () => {
  return (
    <div>
      <Pagefeautures/>
        <BenefitsPage/>
        <Description />
        <OverlapPage/>
    </div>
  )
}

export default Page