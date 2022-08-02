import { useDispatch } from 'react-redux'
import { addToCart, emptyCart, removeFromCart } from '../redux/action';

function Main() {

  const dispatch = useDispatch();

  const product = { name: 'Oppo', type: 'Mobile', price: '30000', color: 'black' }

  return (

    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
    </div>

  );
}

export default Main;
