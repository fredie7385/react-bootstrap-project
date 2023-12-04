import Carousel from 'react-bootstrap/Carousel';

let heroData = [
  {
    id: 1,
    image: require('../assets/images/img-hero1.jpg'),
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/img-hero2.jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]

function CarouselAppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel controls={false} fade={true}>
          {
            heroData.map(hero => {
              return (
                    <Carousel.Item key={hero.id} interval={5000}>
                    <img className="d-block w-100" src={hero.image} alt={"slide " + hero.id} />
                    <Carousel.Caption>
                        <h2>{hero.title}</h2>
                        <p>{hero.description}</p>
                        <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                    </Carousel.Caption>             
                    </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default CarouselAppHero;