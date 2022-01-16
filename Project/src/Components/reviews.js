import React from 'react'
import "../Styles/reviews.css"

export default function Reviews() {
    return (
            <div className="review">
        <h3>What Customers want to say</h3>

        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>
                I went Googling for a distributor of Socks. I was very excited
                to find your Mumbai based operation AND your actually made in
                India line. I'll be back!"
                <br />
                 – Mr. Pravin
              </p>
            </div>
            <div className="carousel-item">
              <p>
                Your introductory offer pleased me and I thought to give it a
                try, so I ordered it on your whatsapp, after using it even my
                DAD liked it and he ordered more sets and gifted them to his
                friends. <br /> - Miss. Dhruvi Shah
              </p>
            </div>
            <div className="carousel-item">
              <p>
              It was pretty good of an experience to shop here, and trust me my
              friend loved the Avenger Socks ... It was pretty good of an
              experience to shop here, and trust me my friend loved the Avenger
              Socks i gifted him. <br /> – Riddhi Chavan
              </p>
             
            </div>
          </div>
        </div>
      </div>
        
    )
}
