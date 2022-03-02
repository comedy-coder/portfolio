import './intro.css'
import Me from "../../img/thanhdat.jpeg"
const Intro = () => {
    return (
        <div className ="i">
                <div className="i-left">
                        <div className="i-left-wrapper">
                        <h2 className = "i-intro"> My Name is  </h2>
                        <h1 className = "i-name"> Thanh Dat</h1>
                            <div className="i-title">
                                <div className="i-title-wrapper">
                                    <div className="i-title-item">Webdeveloper</div>
                                    <div className="i-title-item">Front-end developer</div>
                                     
                                 </div>  
                            </div>
                        <div className="i-desc">
                                I looking forward to working with you, i develop services front-end modern website , webservices and online stores.

                                </div>                                    


                        </div>
                    </div>
                <div className="i-right">
                    <div className="i-bg">
                    <img src={Me} alt="" className="i-img" />
                        </ div> 
                </div>
        </div>
    )
}

export default Intro
