import React from 'react'
// import {increment,decrement} from './actions/counterActions';
import { useSelector , useDispatch} from 'react-redux';
import { increment,decrement } from '../actions/counterActions';
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = (prop)=> {
    let counter = useSelector(state=>state.counter);
const dispatch=useDispatch();

    return (
        <div>
            <div>{console.log(counter,'counter')}</div>
        <div>this is the counter: {counter}</div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())} >-</button>
        </div>
    )
}

export default Home
