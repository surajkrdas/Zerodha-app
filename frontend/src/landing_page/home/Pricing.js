import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5 p-3'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price <br></br> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-6 p-5'>
                    <div className='container'>
                        <div className='row'>
                           <div className='col-4 d-flex align-items-center'>
                                <img src='media/images/pricing-eq.svg' alt='icon' className='me-0' />
                                <p className='mb-0 small'>Free account opening</p>
                            </div>
                            <div className='col-4 d-flex align-items-center'>
                                <img src='media/images/pricing-eq.svg' alt='icon' className='me-0' />
                                <p className='mb-0 small'>Free equity delivery</p>
                            </div>
                            <div className='col-4 d-flex align-items-center'>
                                <img src='media/images/other-trades.svg' alt='icon' className='me-0' />
                                <p className='mb-0 small'>Intraday and
                                F&O</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;