import React from 'react'


export default function Footer() {

    let dateFunc = () => {
        let date = new Date();
        const year = date.getFullYear();
        return year
    }

    return (
        <div className='footer d-flex w-100 mx-auto bg-white m-0 p-4'>
            <ul className='d-flex gap-3 flex-column flex-lg-row align-items-lg-center justify-content-lg-around text-center w-100 mx-auto m-0 p-0'>
                <li>
                    <img src={'./coffee_shop_logo_white.jpg'} alt="" />
                </li>
                <li className='text-center'>
                    <h5 className='text-primary m-0 fw-bolder'>Ecommerce App @ {dateFunc()}</h5>
                </li>
                <li className='d-flex justify-content-center gap-4'>
                    <a className="social-icon" href="https://twitter.com" target='blank'><img src={'./Twitter-icon.png'} alt="" /></a>
                    <a className="social-icon" href="https://linkedin.com" target='blank'><img src={'./LinkedIn-icon.png'} alt="" /></a>
                    <a className="social-icon" href="https://facebook.com" target='blank'><img src={'./Facebook-icon.png'} alt="" /></a>
                    <a className="social-icon" href="https://youtube.com" target='blank'><img src={'./YouTube-icon.png'} alt="" /></a>
                    <a className="social-icon" href="https://instagram.com" target='blank'><img src={'./Instagram-icon.png'} alt="" /></a>
                </li>
            </ul>
        </div>
    )
}
