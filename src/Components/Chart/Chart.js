import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props)=>{
    const values = props.data.map((exp)=>exp.value);
    const max = Math.max(...values);
    console.log('max is ',max);
    return(
        <div className="chart">
            {
                props.data.map((month,id)=>{
                    return(
                        <ChartBar month={month} max={max} key={month.label}/>
                    )
                })
            }
        </div>
    );
}

export default Chart;