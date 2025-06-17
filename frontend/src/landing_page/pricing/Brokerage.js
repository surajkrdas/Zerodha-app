import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-6 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} className='text-muted'>
                        <li>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</li>
                        <li>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</li>
                        <li>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</li>
                        <li>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</li>
                        <li>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</li>
                        <li>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</li>
                        <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
                    </ul>
                </div>
                <div className='col-6 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2.5", fontSize:"12px"}} className='text-muted'>
                        <li>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</li>
                        <li>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</li>
                        <li>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</li>
                        <li>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee</li>
                        <li>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</li>
                        <li>₹30 + GST per pledge request per ISIN.</li>
                        <li>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;