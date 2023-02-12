import './App.css'
import React from "react";


function App(){
	const [count, setCount] = React.useState(0);

	const onClickPlus  = () =>{ 
		setCount(count + 1);
	}	
	const onClickMinus  = () =>{ 
		setCount(count - 1);
	}
	const onZeroing = () => {
	setCount(count * 0)
	}
return(
	<div className="App">
		<div className='counter_wrapper'>
			<h1>Counter:</h1>
			<h2>{count}</h2>
			<button onClick={onClickMinus} className="Minus">- minus</button>
			<button onClick={onZeroing} className='Zeroing'> zero </button>
			<button onClick={onClickPlus} className="Plus">- plus</button>
		</div>
	</div>
)
}

export default App;