import React, { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
	function choice(arr) {
		const randomIdx = Math.floor(Math.random() * arr.length);
		console.log(randomIdx);
		return arr[randomIdx];
	}
	const [ msg, setMsg ] = useState('Think of a question');
	const [ color, setColor ] = useState('black');
	const [ countGreen, setCountGreen ] = useState(0);
	const [ countGoldenrod, setCountGoldenrod ] = useState(0);
	const [ countRed, setCountRed ] = useState(0);
	function ask() {
		const { msg, color } = choice(props.messages);
		setMsg(msg);
		setColor(color);
		if (color === 'green') {
			setCountGreen(countGreen + 1);
		} else if (color === 'goldenrod') {
			setCountGoldenrod(countGoldenrod + 1);
		} else if (color === 'red') {
			setCountRed(countRed + 1);
		}
	}

	function reset() {
		setMsg('Think of a question');
		setColor('black');
		setCountGreen(0);
		setCountGoldenrod(0);
		setCountRed(0);
	}

	return (
		<div className="EightBall">
			<h1 className="EightBall-header">Eight Ball</h1>

			<div className={color} onClick={ask}>
				<h3 className="EightBall-msg">{msg}</h3>
			</div>
			<h3 className="EightBall-countGreen">Green: {countGreen}</h3>
			<h3 className="EightBall-countGoldenrod">Goldenrod: {countGoldenrod}</h3>
			<h3 className="EightBall-countRed">Red: {countRed}</h3>
			<button onClick={reset} className="EightBall-btn">
				Reset
			</button>
		</div>
	);
};

export default EightBall;
