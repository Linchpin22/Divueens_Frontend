import React from 'react'
import WeAreHiring from '../components/CareersPage/WeAreHiring'
import EmployeePerks from '../components/CareersPage/EmployeePerks'
import JoinUs from '../components/CareersPage/JoinUs'
import CompanyOverviewAndMore from '../components/CareersPage/CompanyOverviewAndMore'

function CareersPage() {
  return (
    <div className='w-full'>
        <CompanyOverviewAndMore />
        <WeAreHiring/>
        <EmployeePerks/>
        <JoinUs/>
    </div>
  )
}

export default CareersPage;