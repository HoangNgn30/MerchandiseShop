import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiExchangeBoxLine } from "react-icons/ri";
import { LiaWalletSolid } from "react-icons/lia";
import { GoGift } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { HiOutlineChatAlt2 } from "react-icons/hi";
import '../../index.css'
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
    return (
        <>
        <footer className='py-6! bg-[#fafafa]'>
            <div className='container'>
                <div className='flex items-center justify-center gap-2 py-8! pb-8!'>
                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-semibold mt-3!'> Free Shipping</h3>
                        <p className='text-[12px] font-medium'>For all Orders Over $100</p>
                    </div>

                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <RiExchangeBoxLine className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-semibold mt-3!'>30 Days Returns</h3>
                        <p className='text-[12px] font-medium'>For an Exchange Product</p>
                    </div>


                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <LiaWalletSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-semibold mt-3!'> Sercured Payment</h3>
                        <p className='text-[12px] font-medium'>Payment Cards Accepted</p>
                    </div>



                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <GoGift className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-semibold mt-3!'> Special Gifts</h3>
                        <p className='text-[12px] font-medium'>Out First Product Order</p>
                    </div>



                    <div className='col flex items-center justify-center flex-col group w-[15%]'>
                        <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1'/>
                        <h3 className='text-[16px] font-semibold mt-3!'> Support 24/7</h3>
                        <p className='text-[12px] font-medium'>Contact us Anytime</p>
                    </div>

                </div>
            </div>

            <hr className="opacity-10"/>


            <div className='footer flex  py-8! '>
                <div className='part1 w-[25%] pl-10! border-r border-[rgba(0,0,0,0.1)]'>
                    <h2 className='text-[18px] font-semibold mb-4!'>Contact us</h2>
                    <p className='text-[14px] font-normal pb-4!'>Merch4u - Super Store <br />520 - Ho Guom Plaza</p>

                    <Link className='link text-[13px]' to='mailto:hoangngn301@gmail.com'>hoangngn301@gmail.com</Link>

                    <span className='text-[22px] font-semibold block w-full mt-3! mb-5! text-primary'>(+84) 520-419-520</span>


                    <div className='flex items-center gap-2'>
                        <HiOutlineChatAlt2 className='text-[40px] text-primary'/>
                        <span className='text-[16px] font-semibold'> Online Chat <br />Get Expert Help </span>
                    </div>
                </div>


                <div className='part2 w-[40%] flex pl-8!'>
                    <div className='part2_col1 w-[50%]'>
                        <h2 className='text-[18px] font-semibold mb-4!'>Products</h2>


                        <ul>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Prices drop</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>New Products</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Best Sales</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Contact Us</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Sitemap</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Stores</Link></li>
                        </ul>
                    </div>


                    <div className='part2_col2 w-[50%]'>
                        <h2 className='text-[18px] font-semibold mb-4!'>Our Company</h2>


                        <ul>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Delivery</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Legal Notice</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Terms And Conditions Of Use</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>About Us</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Sercure Payment</Link></li>
                            <li className='list-none text-[14px] w-full mb-2!'><Link to='/' className='link'>Login</Link></li>
                        </ul>
                    </div>
                </div>


                <div className='part3 w-[35%] flex flex-col pl-8! pr-8!'>
                    <h2 className='text-[18px] font-semibold mb-4!'>Subscibe to newsletter</h2>
                    <p className='text-[13px]'>Subscibe to our latest newsletter to get news about special discounts.</p>

                    <form className='mt-5!'>
                        <input type="text" className='w-full h-11.25 border outline-none pl-4! pr-4! rounded-sm mb-4! focus:border-[rgba(0,0,0,0.3)]' placeholder='Your Email Address'/>

                        <Button className='btn-org'>SUBSCRIBE</Button>


                        <FormControlLabel control={<Checkbox />} label="I agree to the terms and conditions and the privacy policy" />
                    </form>
                </div>
            </div>
        </footer>



        <div className='bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3! bg-white'>
            <div className='container flex items-center justify-between'>
                <ul className='flex items-center gap-2'>
                    <li className='list-none'>
                        <Link to='https://www.facebook.com/lailahoangday/' target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                        <FaFacebookF className='text-[15px] group-hover:text-white'/>
                        </Link>
                    </li>


                    <li className='list-none'>
                        <Link to='https://www.facebook.com/lailahoangday/' target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                        <FiYoutube className='text-[15px] group-hover:text-white'/>
                        </Link>
                    </li>



                    <li className='list-none'>
                        <Link to='https://www.facebook.com/lailahoangday/' target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                        <FaPinterestP className='text-[15px] group-hover:text-white'/>
                        </Link>
                    </li>


                    <li className='list-none'>
                        <Link to='https://www.facebook.com/lailahoangday/' target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all'>
                        <FaInstagram className='text-[15px] group-hover:text-white'/>
                        </Link>
                    </li>
                </ul>


                <p className='text-[13px] text-center mb-0!'>© 2026 - Ecommerce software by Hoang&Danh</p>


                <div className='flex items-center'>
                    <img src="https://cdn.prod.website-files.com/642ef757a877301c1891551b/65aab36024283ced3b5d6277_order%20paypal%20card.webp" alt="img" className='h-[36px]'/>
                    <img src="https://www.nab.com.au/personal/life-moments/manage-money/money-basics/what-is-a-debit-card/_jcr_content/root/banner/foreground-image.coreimg.png/1736474998675/visa-debit-card-with-padding-overlay-banner.png" alt="img" className='h-[35px]'/>
                    <img src="https://www.nab.com.au/personal/credit-cards/low-fee-card/_jcr_content/root/banner/foreground-image.coreimg.png/1726721146765/nab-low-fee.png" alt="img" className='h-[37px]'/>
                    <img src="https://www.nab.com.au/business/business-credit-cards/_jcr_content/root/responsivegrid_749647863/section_container_co/responsivegrid/segmented_control_1118858503/item_1658470505587/product_card/image.coreimg.png/1658471959121/ccb-business-purchasing-and-corporate-l2.png" alt="img" className='h-[25px]'/>
                </div>
            </div>
        </div>

        <br /> <br /> <br /><br />
        </>
    )
}

export default Footer;
