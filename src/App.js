import './App.css';
import EightBall from './EightBall';
import messages from './messages';
function App() {
	console.log(messages);
	return (
		<div className="App">
			<EightBall messages={messages} />
		</div>
	);
}

export default App;
