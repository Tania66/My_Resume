import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/swapi/postSlice';

const ClearButtonSwapi = () => {
    const dispatch = useDispatch();
    const post = useSelector((state)=> state.swapi.item)

    
  return (
    <div>
 {post.length !== 0 &&  <button type='button' className='reset_btn' onClick={(()=>dispatch(reset()))}>Clear</button>}
    </div>
  )
}

export default ClearButtonSwapi
