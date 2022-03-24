type ResultsPropcType = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsPropcType) => {
    return (
        <div>
            {props.results.cityName && <div>{props.results.cityName}</div>}
            {props.results.country && <div>{props.results.country}</div>}
            {props.results.temperature && <div>{props.results.temperature} <span>℃</span></div>}
            {props.results.conditionText && 
                <div>
                    <img src={props.results.icon} alt="icon" />
                    {props.results.conditionText}
                </div>
            }
        </div>
    );
}

export default Results;
