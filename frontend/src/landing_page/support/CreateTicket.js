import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <p className='fs-3 text-muted'>To create a ticket, select a relevant topic</p>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}}><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Resident individual</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Minor</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Non Resident Indian (NRI)</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Company, Partnership, HUF and LLP</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Glossary</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}} ><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Your Profile</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Account modification</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Client Master Report</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Nomination</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Transfer and conversion of securities</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}}><i class="fa-solid fa-lines-leaning"></i> Kite</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>IPO</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Trading FAQs</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Margin Trading Facility (MTF) and Margins</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Charts and orders</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Alerts and Nudges</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}}><i class="fa-solid fa-money-check-dollar"></i> Funds</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Add money</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Withdraw money</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Add bank accounts</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>eMandates</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Funds statement</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}}><i class="fa-solid fa-address-card"></i> Console</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Portfolio</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Corporate actions</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Reports</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Profile</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Segments</a><br/>
                </div>
                <div className='col-4 p-5 mt-2 mb-2'>
                    <h4 style={{fontSize:"20px"}}><i class="fa-solid fa-coins"></i> Coin</h4>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Mutual funds</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>National Pension Scheme (NPS)</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Features on Coin</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>Payments and Orders</a><br/>
                    <a href='' style={{textDecoration:"none", lineHeight:"2.5", fontSize:"16px",marginLeft:"24px"}}>General</a><br/>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;