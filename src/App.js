import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNum, decNum} from  './actions/index'
import MouseTracker from './components/MouseTracker';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import Counter from './components/Counter';

function App() {
  const myState = useSelector((state)=>{
    return state.changeNumber;
  });
  const dispatch = useDispatch();
  return (
    <div className="container">
      {/* <h1>Increment/Decrement using redux store.</h1>

      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={()=> dispatch(decNum())} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={myState} />
        <a className="quantity__plus" title="Increment" onClick={()=>dispatch(incNum())} ><span>+</span></a>
      </div> */}

      <Counter render={(count,incrementCount) =>(
        <ClickCounter count= {count} incrementCount={incrementCount}></ClickCounter>
      )}/>
      <Counter render={(count,incrementCount) =>(
        <HoverCounter count= {count} incrementCount={incrementCount}></HoverCounter>
      )}/>
      {/* <ClickCounter/>
      <HoverCounter/>
      <User render={(isLoggedIn)=> isLoggedIn?'Pawan' : 'Guest'}/> */}
      {/* <MouseTracker/> */}
    </div>
  );
}

export default App;
