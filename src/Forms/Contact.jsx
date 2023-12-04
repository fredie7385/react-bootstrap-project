import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <section id="contact" className="block contact-block">
         <Container fluid>
            <div className="title-holder">
                <h2>Contact</h2>
                <div className="subtitle">
                    Let's get in touch!
                </div>
            </div>
            <Form className='contact-form'>
              <Row>
                <Col sm={4}>
                  <Form.Control style={{background:'#f7efef'}}  type='text' placeholder="Enter Your Full Name" required/>
                </Col>
                <Col sm={4}>
                  <Form.Control style={{background:'#f7efef'}} type='email' placeholder="Enter Your Email Address" required/>
                </Col>
                <Col sm={4}>
                  <Form.Control style={{background:'#f7efef',padding:'11px'}} type ='number' placeholder="Enter your Phone No" required/>
                </Col>
              </Row>
              <Row>
                <Col sm={12} >
                  <Form.Control style={{background:'#f7efef'}} as="textarea" placeholder="Message"/>
                </Col>
              </Row>
              <div className="btn-holder">
                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">Submit</Button>
                </div>
              </div>
          </Form>
         </Container>
         {/* google maps */}      
         <div className="google-map">
         <iframe title='map'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257032.32727352905!2d-0.4474951988852126!3d51.5360261225924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2ske!4v1701698249132!5m2!1sen!2ske"
         allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
         </div>
         <Container fluid>
            <div className="contact-info">
              <ul>
                <li>                   
                  <i className='fas fa-envelope'></i>        
                  info@example.com
                </li>
                <li>                   
                  <i className='fas fa-phone'></i>
                  +0856934569345
                </li>
                <li>                   
                  <i className='fas fa-map-marker-alt'></i> 
                  123 Street, City, State, USA
                </li>
              
              </ul>
            </div>
         </Container>
    </section>
    
    
  )
}

export default Contact