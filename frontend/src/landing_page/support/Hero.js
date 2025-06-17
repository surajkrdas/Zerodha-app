import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O,why is my order getting rejected...'></input><br/>
                    <a href=''>Track account opening </a>
                    <a href=''>Track segment activation </a>
                    <a href=''>Intraday margins </a><br/>
                    <a href=''>Kite user manual </a><br/>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                        <li><a href=''>Rights Entitlements listing in June 2025 </a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;