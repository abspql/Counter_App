import React, { useState } from "react";
import "./App.css";

const App = () => {
	
	const [counter, setCounter] = useState(0);

	const handleClick1 = () => {
		setCounter(counter + 1);
	};

	const handleClick2 = () => {
		setCounter(counter - 1);
	};

  
	const handleClick3 = () => {
		setCounter(0);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontSize: "350%",
				position: "absolute",
				width: "100%",
				height: "100%",
				top: "-15%",
			}}
		>
			Counter App
			<div
				style={{
					fontSize: "120%",
					position: "relative",
					top: "10vh",
				}}
			>
				{counter}
			</div>
			<div className="buttons">
				<button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginRight: "5px",
						backgroundColor: "#04AA6D",
						borderRadius: "4px",
						color: "white",
					}}
					onClick={handleClick1}
				>
					Increment
				</button>
				<button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginLeft: "5px",
						backgroundColor: "red",
						borderRadius: "4px",
						color: "white",
					}}
					onClick={handleClick2}
				>
					Decrement
				</button>
        
        <button
					style={{
						fontSize: "60%",
						position: "relative",
						top: "20vh",
						marginLeft: "7px",
						backgroundColor: "blue",
						borderRadius: "4px",
						color: "white",
					}}
					onClick={handleClick3}
				>
					Reset
				</button>

			</div>
		</div>
	);
};

export default App;
