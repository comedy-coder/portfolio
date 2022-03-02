import "./about.css"
import Award from "../../img/award.png"
function About() {
    return (
        <div>
            <div className="a">
                <div className="a-left">
                    <div className="a-card bg"></div>
                    <div className="a-card">
                        <img
                        className ="a-img"
                         src="https://kenh14cdn.com/thumb_w/620/2020/8/31/2-15988733397842028315914.jpg" alt="" />
                    </div>
                </div>
                <div className="a-right">
                <h1 className ="a-title"> About me</h1>
                <p className= "a-sub">
                 I was born in Đà Lạt city one of the most popular tourist destinations in Việt Nam.
                    </p> 
                <p className ="a-desc">
                I'm have graduated from university with a specialization that does not related to programming by any means. But I always have a passion for creating beautiful websites. So I quit my job and pursued my passion for web development.
                Learning programming is never easy, especially when you have to learn it by yourself. I'm like a blind man creating a new way for himself. But after six months of self-taught programming, overcome many difficulties and obstacles, I have gained a little knowledge and achievements.
                Become a web developer is my dream, and I will continue to work as hard as I can to achive it
                    </p>             
                <div className="a-award">
                    <img src={Award} alt="" className="award-img" />
                    <div className="a-award-text">
                    <h4 className ="a-award-title"> i have been working in automotive industry for 4 years </h4> 
                    <p className = "a-award-desc">
                    With the experience from the diffirents jobs, i understand what should i do in the job to improve 
                    </p>
                    

                                       </div>
                        </div>              
            </div>
         </div>  
        </div>
    )
}

export default About
