function Result(props) {

    return (
        <div
            className="result"
            style={
                {
                    color: `${props.color}`,
                    backgroundColor: `hsla${props.color.substring(3, 17)},0.1)`
                }
            }>
            <img src={props.icon}
                 alt="icon"
            />
            <p> {props.category} </p>
            <p className="margin" style={
                {
                    color: "black"
                }
            }>
                {props.score}
                <span style={
                    {
                        color: "hsl(241, 100%, 89%)"
                    }
                }>/100</span></p>
        </div>
    );
}

export default Result;