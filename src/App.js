import './Style/App.css';
import data from "./data/data.json";
import Result from "./components/Result";

function App() {

    return (
        <div className="App">

            <div className="container-1">
                <h3>Your Result</h3>
                <div className="score">
                    <h1>76</h1>
                    <p>of 100</p>
                </div>
                <h2>Great</h2>
                <p>
                    You scored higher than 65% of the people
                    who have taken these tests.
                </p>

            </div>

            <div className="container-2">
                <h2>Summary</h2>
                <div className="results">
                    {
                        data.map((data) => {
                                const image = require(`./assets/images/${data.icon}`);

                                return (<Result
                                    kay={data.id}
                                    icon={image}
                                    category={data.category}
                                    score={data.score}
                                    color={data.color}
                                />)
                            }
                        )
                    }
                </div>


                <button>Continue</button>
            </div>
        </div>);
}

export default App;
