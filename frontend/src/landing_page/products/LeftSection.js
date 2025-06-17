import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 mt-5'>
                    <img src={imageURL} ></img>
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} style={{marginLeft:"120px"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}>
                            <img src='media/images/googlePlayBadge.svg'></img>
                        </a>
                        <a href={appStore}>
                            <img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;