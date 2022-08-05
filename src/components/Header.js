import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaOpencart } from 'react-icons/fa'
import { productSearch } from '../redux/productAction'

const Header = () => {

    const dispatch = useDispatch();

    const result = useSelector((state) => state.cartData);
    // console.log("Redux Data in Header", result);

    return (
        <div className='header'>
            <Link to='/'>
                <h1 className='logo'>E-COMMERCE</h1>
            </Link>
            <div className='search'>
                <input onChange={(event) => dispatch(productSearch(event.target.value))} type='text' placeholder='Search Products' />
            </div>
            <Link to='/cart'>
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <FaOpencart size={65} />
                    {/* <img src='https://i.pinimg.com/originals/4f/74/89/4f7489062aa5c4c112943f402d29373c.jpg' alt='' /> */}
                </div>
            </Link>
        </div>
    )
}

export default Header;