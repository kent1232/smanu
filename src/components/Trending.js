import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../assets/images/trending/finalll.jpg";
import everythingImage from "../assets/images/trending/AKREDITAS.jpg";
import infiniteImage from "../assets/images/trending/kopi .jpg";
import jokerImage from "../assets/images/trending/info ruang.jpg";
import lightyearImage from "../assets/images/trending/extraaa.jpg";
import morbiusImage from "../assets/images/trending/kuntulan.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1
          className="text"
          style={{
            fontSize: "3rem",
            color: "dark",
            textShadow: "2px 2px 4px #888",
            marginTop: "30px",
            fontWeight: "bold"
          }}
        >
          INFO SMA NU
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LOCATION</Card.Title>
                  <Card.Text className="text-center">
                    Jl. Sumberwaru No.5, Gombeng, Gombengsari, Kec. Kalipuro, Kabupaten Banyuwangi, Jawa Timur 68455
                  </Card.Text>
                  <Card.Text className="text-left"></Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    AKREDITASI B
                  </Card.Title>
                  <Card.Text className="text-center">
                    AKREDITASI SMA NU GOMBENGSARI
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
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    MOTO SMA NU GOMBENGSARI
                  </Card.Title>
                  <Card.Text className="text-center">
                    YANG BERARTI BAHWA SMA NU ADALAH TEMPAT YANG IDEAL UNTUK BELAJAR DAN TUMBUH
                  </Card.Text>
                  <Card.Text className="text-left"></Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    SMA NU GOMBENGSARI
                  </Card.Title>
                  <Card.Text className="text-center">
                    FASILITAS SERTA TOTAL GURU DAN MURID
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
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">EXTRA KULIKULER</Card.Title>
                  <Card.Text className="text-center">
                    EXTRA KULIKULER SMA NU GOMBENGSARI
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
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SYARAT PENDAFTARAN</Card.Title>
                  <Card.Text className="text-center">
                    INFO DAN SYARAT PENDAFTARAN
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
  );
};

export default Trending;
