import './Hddis.css'
export default function Headdis({head,dis,heigh=400}){
    return (
        <div id="Headdis" style={{height:heigh}}>
            <p id="Hdhead">{head}</p>
            <p id="Hddis">{dis}</p>
        </div>
    )
}