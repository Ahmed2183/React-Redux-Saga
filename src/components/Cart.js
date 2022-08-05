import { Link } from 'react-router-dom'

function Cart() {

    return (
        <div className='cart'>
            <Link to='/'>
                <h1>Product List</h1>
            </Link>
            <h1>Cart Page</h1>
        </div>
    );
}

export default Cart;
