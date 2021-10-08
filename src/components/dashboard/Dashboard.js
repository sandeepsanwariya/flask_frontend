import React from 'react'
import { useHistory } from 'react-router'
import './dashboard.css'
export default function Dashboard() {
    let  history= useHistory()
    return (
        <div>
              <div className='dashboard'>
   
   <div className='office' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/office.png'})`}} onClick={()=>history.push('/employe')}>
       <p>Employes</p>
   </div>
   <div className='chart' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/chart1.png'})`}} onClick={()=>history.push('/chart')}>
   <p>Charts</p>
   </div>
   <div className='not' style={{backgroundImage:`url(${process.env.PUBLIC_URL + '/images/notification.png'})`}} onClick={()=>history.push('/notification')}>
   <p>notifications
   </p>
   </div>
</div>
        </div>
    )
}
