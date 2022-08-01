import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action';

function Main() {

  const dispatch = useDispatch();

  const product = { name: 'Oppo', type: 'Mobile', price: '30000', color: 'black' }

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default Main;
