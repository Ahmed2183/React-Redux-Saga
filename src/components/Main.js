import { useDispatch, useSelector } from 'react-redux'
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {

  const result = useSelector((state) => state.productData);
  console.log("Data in Main Component",result);

  // const result = useSelector((state) => state);
  // console.log("Get All Reducers Data",result);

  const dispatch = useDispatch();

  const product = { name: 'Oppo', type: 'Mobile', price: '30000', color: 'black' }

  return (

    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Get Product List</button>
    </div>
  );
}

export default Main;
