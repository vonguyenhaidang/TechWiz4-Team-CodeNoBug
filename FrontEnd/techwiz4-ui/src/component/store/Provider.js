import Context from './Context'
import {useEffect, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios';

function Provider ({children}){
  
    useEffect(() => {
        axios({
          method: 'get',
          url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
          data: {},
        }).then((response) => {
         
          initState.products=[...response.data]
          initState.productsRender=[...response.data]
        });
      }, []);     
      const initState ={ products:[],
                          productsRender: [],
                          condition: {
                            color: "",
                            sortby: "",
                            brand: "",
                          },
                        }
  
    const [state,dispatch] = useReducer(reducer,initState)
    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
        )
}
export default Provider