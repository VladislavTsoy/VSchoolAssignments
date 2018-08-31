import React from 'react'
import Card from './Card'

const CardBox = () => {

    const style = {
        display: 'flex',
        margin: "20px"
    }
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring",
          imgUrl: "https://i.forbesimg.com/media/lists/places/meridian-id_416x416.jpg"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter",
          imgUrl: "https://kroatravel.com/kroatravel/wp-content/uploads/2017/01/Cuba-Varadero-1.jpg"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall",
          imgUrl: "https://www.thetranssiberiantravelcompany.com/wp-content/uploads/2016/04/destination_featured_china_shanghai.png"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer",
          imgUrl: "https://www.thetranssiberiantravelcompany.com/wp-content/uploads/2016/04/transsiberian-gallery-russia-featured.png"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring",
          imgUrl: "http://www.lebmetal.com/wp-content/files/2012/07/byblos.jpg"
        }
      ]

    let displayCards = vacationSpots.map((spot, i) => {
        return <Card key={spot.place+i}
                    location={spot.place} 
                    price={spot.price}
                    time={spot.timeToGo}
                    image={spot.imgUrl}/>
    })

    return (
        <div style={style}>{displayCards}</div>
    )
}

export default CardBox