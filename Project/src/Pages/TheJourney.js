import React from "react";
import "../Styles/TheJourney.css";

export default function TheJourney() {
  return (
    <div>
        <h1>The Journey</h1>
        <div className="journey">
                <div className="img">
                     <img src="Images/AboutUs1.png" alt="" />
                </div>
                    <div className="text">
                        <h2>ABOUT DOKMEN</h2>
                        <p>
                             It all began in a small town of Mumbai. Surrounded by craftsmen and
                             cobblers, all of them indulged in making the same traditional
                             footwear. Except one. His artistic approach and way to think
                             differently always kept him in the centrepiece. And he called a name
                             for himself as DOKMEN.
                        </p>
                    </div>
        </div>
        <hr/>
            <div className="journey second">
           
               <div className="text">
                   <h2>THE FOUNDER</h2>
                        <p>
                            Bipin Gala is a Business Analytics Leader from Mumbai, India. Born
                            and graduated in the city, this young entrepreneur has wide
                            experience in diverse industries. Established in 1971 by his father
                            Mr. Nanji Gala, a firm named Empire FootWear located in Chembur
                            (Mumbai) with an aim to provide quality footwear to all at
                            reasonable cost made him famous in the entire metropolitan region.
                            Continuing on his father’s principles, Mr. Gala expanded his reach
                            to various other sectors like trading and manufacturing a variety of
                            footwear and started to supply pan India. After a decade of
                            successful footwear manufacturing, Mr. Gala invested with many other
                            sub-suppliers of footwear and soon reached many in the entire state
                            by supplying quality footwear. Further expanding his reach he
                            started supplying footwear to various B2B and B2C platforms. Mr.
                            Gala has helped several craftsmen and business giants from the
                            industry in Mumbai pivot their current operational strategy and move
                            towards the path of growth. Mr. Gala is actively involved in various
                            social responsibilities and provides his support to various
                            organisations. Mr. Gala is on board of various social committees.
                            His valuable inputs are remarkable and drive key roles in important
                            decisions.
                        </p>
                </div>
                    
                <div className="img">
                        <img src="Images/AboutUs2.jpg" alt="" />
                </div>
            </div>
            
    </div>
  );
}
