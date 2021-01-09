import { useState } from 'react'
import { subscribeToTimer } from './api';

function App() {
    let [timestamp, setTimestap] = useState(Date.now)
    subscribeToTimer((err, timestamp) => {
        setTimestap(timestamp)
    })
    let date = new Date(timestamp).toLocaleTimeString()
    return (
        <>
            <h1>Hello</h1>
            <div className="App">
                <p className="App-intro">
                    This is the timer value: {date}
                </p>
            </div>
        </>
    );
}

export default App;
