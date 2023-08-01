import React, { useContext } from 'react';
import Context from '../../components/store/Context';
import Sort from '../../components/Layouts/DefaultLayout/Content/Sort';
import ShopContext from '../../components/GlobalState/ShopContext';

function Products (props)  {
  const storeContext = useContext(Context)
  const[state,dispatch] = storeContext
  console.log("productsRender",state.productsRender);
  return (
    <>
      <Sort/>
      <ShopContext.Consumer>
        {(context) => (
          <React.Fragment>
            <main className="container" style={{ padding: '10px 0' }}>
              <div
                className="row justify-content-center"
                style={{ border: '1px solid rgb(201, 201, 201)', borderRadius: '5px' }}
              >
                <div className="row col-12 ">
                  {state.productsRender.map((post) => (
                    <div className="dataCart col-3" key={post.id} style={{ padding: '0' }}>
                      <div className="productBlockContainer row justify-content-end" >
                        <img className='col-12' src={post.img} alt={post.title} />
                        <div className='col-12 row'>
                          <div className='col-10 row'>
                            <h5 className='col-12'>{post.name}</h5>
                            <p className="product-block-prices col-12"> Price: {post.price}</p>
                          </div>
                          <div className='col-2' onClick={context.addProductToCart.bind(this, post)}>
                            <img src="./image/logo/Add-To-Cart.png" alt="img" style={{width:'32px'}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </React.Fragment>
      )}
      </ShopContext.Consumer>
  </>  
  );
};

export default Products;
