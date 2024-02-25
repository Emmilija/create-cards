import CardData from "../data/CardData"
import CardList from "./CardList"



export default function CardContainer({cardData}) {
    if(!cardData || CardData.length === 0) {
        return <p>No data</p>
    }
    console.log(cardData)
    return (


        <div>
{cardData.map((item) => (
 <CardList key={item.id} item={item} />

))}
        </div>

    )
  
}


