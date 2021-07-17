import './ChartBar.css';

const ChartBar = (props)=>{
    let fill = '0%';

    if(props.max>0)
        fill = Math.round((props.month.value/props.max)*100)+'%';
    
    console.log('fill is ',fill);

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: fill}}>
                </div>
            </div>
            <label className="chart-bar__label">
                {props.month.label}
            </label>
        </div>
    )
}

export default ChartBar;