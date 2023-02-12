// import './index.css'
import React from "react";

function App(){
	const [count, setCount] = React.useState(0);

	const onClickPlus  = () =>{ 
		setCount(count + 1);
	}	
	const onClickMinus  = () =>{ 
		setCount(count - 1);
	}

return(
	<div className="App">
		<div>
			<h1>Counter:</h1>
			<h2>{count}</h2>
			<button onClick={onClickMinus} className="minus"></button>
			<button onClick={onClickPlus} className="minus"></button>
		</div>
	</div>
)
}

export default App;