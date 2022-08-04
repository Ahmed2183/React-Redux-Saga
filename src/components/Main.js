import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { productList } from '../redux/productAction';

function Main() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.productData); //-->Call productData reducer
  console.log("Data in Main Component From Saga", data);

  // const data = useSelector((state) => state); //--> Call All reducers
  // console.log("Get All Reducers Data",data);

  useEffect(() => {
    dispatch(productList());
  }, [])


  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className="product-container">
        {
          data.map((item) =>
            <div className='product-item' key={item.id}>
              <img src={item.image} alt="" />
              <div>Name: {item.name}</div>
              <div>Color: {item.color}</div>
              <div>Price: {item.price}</div>
              <div>Category: {item.category}</div>
              <div>Brand: {item.brand}</div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove From Cart</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
}

export default Main;
