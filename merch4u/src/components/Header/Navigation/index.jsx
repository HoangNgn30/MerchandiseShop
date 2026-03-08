import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

import '../Navigation/style.css'


const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }
    return (
        <>
                <nav >
            <div className='container flex items-center justify-end gap-8'>
                <div className='col_1 w-[20%]'>
                    <Button className='text-black! gap-2 w-full' onClick={openCategoryPanel}><RiMenu2Fill className='text-[18px]'  />Shop By Categories<LiaAngleDownSolid className='text-[13px] ml-auto font-bold '/></Button>
                </div>

                <div className='col_2 w-[60%] '>   
                    <ul className='flex items-center gap-3 nav'>
                        <li className='list-none'>
                            <Link to='/' className='link transition text-[14px] font-[500]'>
                            <Button className='link transition font-[500]! text-[rgba(0,0,0,0.7)]! hover:text-primary! py-4!'>Home</Button>
                            </Link>
                        </li>

                        <li className='list-none relative'>
                            <Link to='/' className='link transition text-[14px] font-[500]'>
                            <Button className='link transition font-[500]! text-[rgba(0,0,0,0.7)]! hover:text-primary!  py-4!'>Fashion</Button>
                            </Link>


                            <div className='submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                <ul>
                                    <li className='list-none w-full relative'>
                                        <Link className='w-full'>
                                            <Button className='text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full text-left! justify-start! rounded-none!'>Asia</Button>
                                        </Link>

                                        <div className='submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all'>
                                            <ul>
                                                <li className='list-none w-full'>
                                                    <Link className='w-full'>
                                                        <Button className='text-[rgba(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!'>Tops</Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full'>
                                                    <Link className='w-full'>
                                                        <Button className='text-[rgba(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!'>Bottoms</Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full'>
                                                    <Link className='w-full'>
                                                        <Button className='text-[rgba(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!'>Outerwear</Button>
                                                    </Link>
                                                </li>
                                                <li className='list-none w-full'>
                                                    <Link className='w-full'>
                                                        <Button className='text-[rgba(0,0,0,0.8)] w-full text-left! justify-start! rounded-none!'>Other</Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='list-none w-full'>
                                        <Link className='w-full'>
                                            <Button className='text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full text-left! justify-start! rounded-none!'>Europe </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none w-full'>
                                        <Link className='w-full'>
                                            <Button className='text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full text-left! justify-start! rounded-none!'>North America</Button>
                                        </Link>
                                    </li>
                                    <li className='list-none w-full'>
                                        <Link className='w-full'>
                                            <Button className='text-[rgba(0,0,0,0.8)]! hover:text-primary! w-full text-left! justify-start! rounded-none!'>South America</Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li className='list-none'>
                            <Link to='/' className='link transition text-[14px] font-[500]'>
                            <Button className='link transition font-[500]! text-[rgba(0,0,0,0.7)]! hover:text-primary! py-4!'>Collectables</Button>
                            </Link>
                        </li>

                        <li className='list-none'>
                            <Link to='/' className='link transition text-[14px] font-[500]'>
                            <Button className='link transition font-[500]! text-[rgba(0,0,0,0.7)]! hover:text-primary!  py-4!'>Cheering Goods</Button>
                            </Link>
                        </li>


                        <li className='list-none'>
                            <Link to='/' className='link transition text-[14px] font-[500]'>
                            <Button className='link transition font-[500]! text-[rgba(0,0,0,0.7)]! hover:text-primary!  py-4!'>Other</Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='col_3 w-[20%] '>
                    <p className='text-[14px] font-medium flex items-center gap-3 mb-0 mt-0'><GoRocket className='text-[18px]' />
Free International Delivery</p>
                </div>

            </div>
        </nav>

        {/* category panel component */}
        <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>
        </>
    )
}

export default Navigation;
