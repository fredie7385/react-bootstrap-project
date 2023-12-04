import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar'
//assets 
import img1 from '../assets/images/img1.jpg'

function About() {
    const basic = 88;
    const frameWork =76;
    const serverSide = 82;


  return (
    <section id="about" className="block about-block">
         <Container>
            <div className="title-holder">
                <h2>About</h2>
                <div className="subtitle">Learn More About Us.</div>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={img1}/>
                </Col>
                <Col sm={6}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos accusamus sapiente ex quia officia libero unde quisquam totam reprehenderit ratione quo, officiis fugit facilis voluptatem cumque et nobis! Laudantium omnis mollitia itaque inventore atque officia repudiandae tempore, cupiditate aliquid placeat ratione iusto dignissimos quas sequi culpa? Corrupti quo odio atque!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eius blanditiis ut voluptates amet cumque nihil, incidunt in nemo ipsa et facere, excepturi enim temporibus architecto molestiae qui dolorem cupiditate quos! Ducimus vel praesentium ipsum!</p>
                    <div className="progress-block">
                        <h4>HTML/ CSS/ JAVASCRIPT</h4>
                        <ProgressBar now={basic} label={`${basic}%`} />
                    </div>
                    <div className="progress-block">
                        <h4>REACT-JS</h4>
                        <ProgressBar now={frameWork} label={`${frameWork}%`} />
                    </div>
                    <div className="progress-block">
                        <h4>PYTHON/ DJANGO </h4>
                        <ProgressBar now={serverSide} label={`${serverSide}%`} />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About;