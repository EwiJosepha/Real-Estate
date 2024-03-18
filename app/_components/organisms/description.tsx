import React from 'react'
import '@fontsource/merriweather';

function Description() {

  const interio = [
    { id: 1, name: "TOTAL ROOMS", number: "4" },
    { id: 2, name: "TOTAL BATHS", number: "4" },
    { id: 3, name: "TOTAL LIVING", number: "4" },
  ]

  const areaLot = [
    { id: 4, name: "STATUS", number: "forsale" },
    { id: 5, name: "LOT AREA", number: "0.77 ACRES" },
    { id: 6, name: "NEIGHBORHOOD", number: "Montecito" },
    { id: 7, name: "ELEMENTARY SCHOOL", number: "Montecito Union" },
    { id: 8, name: "HIGH SCHOOL", number: "Santa Barbara" }
  ]

  const styles = ` 
    .descriptionwrapper{ 
    fontFamily: "merriweather", sans-serif,
    display: " flex",
    flexDirection: " column",
    padding: "20p",
    backgroundColor: "#fef9f9",
    width: "100%",
    paddingTop:"10px"

  }
  `
  return (
    <div>
      <div className="descriptionwrapper">
        <h1 id="propertyD"><i>FEATURES & AMENITIES</i></h1>
        <div className="cardes">
          <div className="features">
            <h2 id="int"><i>INTERIOR</i></h2>
            <div className="feature">
              {interio.map((nam, index) => (
                <div className="tbath">
                  <div className="bname">
                    <p key={index} id="bname">{nam.name}</p>

                  </div>
                  <div className="num">
                    <p key={index} id="bnumber"><i>{nam.number}</i></p>

                  </div>
                </div>
              ))}
            </div>
            <div className="arealot">
              <h2 id="int"><i>AREA & LOT</i></h2>
              <div className="lot">
                {areaLot.map((area) => (

                  <div className="tlot">
                    <div className="bname">
                      <p id="bname" key={area.id}>{area.name}</p>
                    </div>
                    <div className="bnumber">
                      <p id="bnumber" key={area.id}><i>{area.number}</i></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="arminities">
            <h2 id="fin"><i>FINANCIAL</i></h2>
            <div className="finincial">
              <p><i>SALES PRICE</i></p>
              <p><i>$12000</i></p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Description
