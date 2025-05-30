import {Container , Row , Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg"
import headerImg from "../assets/img/lp1.svg"
import { useState, useEffect } from "react";
import 'animate.css'
import TrackVisibility from "react-on-screen";

function Banner ()
{
 const [loopNum , setLoopNum] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);
 const toRotate= ["Full-Stack Web Developer" , "Web Designer" ];
 const [text , setText] = useState('');
 const[delta,setDelta] = useState(300 - Math.random() * 10);
 const period = 2000;

 useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    },delta)

    return () => {clearInterval(ticker)};
 },[text])

 const tick = () => {
    let i = loopNum % toRotate.length ;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
    }
 }



  return(
    <section className="banner" id="home">
     <Container>
        <Row className="align-items-center">
           <Col xs={12} md={6} xl={7}>
           <TrackVisibility>
           {({isVisible}) => 
           <div className={isVisible ? "animate__animated animate__bounce" : ""}>
           <span className="tagline">Welcome To My Portfolio</span>
           <h1>{`Hi, I am Ankur   `}<span className="wrap">{text}</span></h1>
           <p>Am a Full Stack Developer who beleives in Coding, Creating and Innovating . Bridging the Gap Between Design and Functionality<br/>delivering Impactful Digital Solutions Frontend, Backend, and Beyond<br/>
           </p>

           <button onClick={() => console.log('Connect')}>Let's connect<ArrowRightCircle size={25}/></button>
           </div>}
           </TrackVisibility>
           </Col>
           <Col xs={12} md={6} xl={5}>
             <img src ={headerImg} alt="Header Img"/>
           </Col>
        </Row>
     </Container>
    </section>
  )
}

export default Banner;