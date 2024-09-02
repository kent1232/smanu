import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/kibraka.jpg"
import avengerImage from "../assets/images/superhero/tradisional.jpg"
import batmanImage from "../assets/images/superhero/tari.jpg"
import robinhoodImage from "../assets/images/superhero/WIKFN.jpg"
import spidermanImage from "../assets/images/superhero/guru.jpg"
import supermanImage from "../assets/images/superhero/ftsl.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text" style={{ fontSize: '3rem', fontWeight:"bold", color: "dark", textShadow: '2px 2px 4px #888' }}>DOKUMENTASI SMA NU</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI PASKIBRAKA</Card.Title>
                  <Card.Text className="text-center">
                    
                  </Card.Text>
                  <Card.Text className="text-center">
                    TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI TRADITIONAL SPORT</Card.Title>
                  <Card.Text className="text-left">
                    
                  </Card.Text>
                  <Card.Text className="text-center">
                    TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI SENI TARI</Card.Title>
                  <Card.Text className="text-left">
                  
                  </Card.Text>
                  <Card.Text className="text-center">
                    TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={robinhoodImage}
                alt="Dune Movies"
                className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI VOLI</Card.Title>
                  <Card.Text className="text-center">
                    
                  </Card.Text>
                  <Card.Text className="text-center">
                  TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI GURU</Card.Title>
                  <Card.Text className="text-center">
                    WISATA KEPOMPONG SEAVIEW
                  </Card.Text>
                  <Card.Text className="text-center">
                    TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOKUMENTASI FUTSAL TEAM</Card.Title>
                  <Card.Text className="text-left">
                    
                  </Card.Text>
                  <Card.Text className="text-center">
                    TOP SCHOOL ON THE TOP LAND
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
