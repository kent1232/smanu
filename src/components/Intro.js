import { Col, Container, Row, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title-container button">
              <Button
                variant="white"
                style={{
                  color: '#1a5511',
                  opacity: 0.7,
                  fontSize: '120px',
                  fontWeight: 'bold',
                  letterSpacing: '30px',
                  textTransform: 'uppercase',
                  padding: '0.9px 20px',
                  textShadow: '0px 0px 10px rgba(255,255,255), 0px 0px 40px rgba(255,255,255)',
                  borderRadius: '50px',
                }}
              >
                SMA NU
              </Button>
              <Button
                variant="white"
                style={{
                  color: '#1a5511',
                  opacity: 0.9,
                  fontSize: '60px',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '0.9px 20px',
                  textShadow: '0px 0px 10px rgba(255,255,255), 0px 0px 40px rgba(255,255,255)',
                  borderRadius: '50px',
                  position: 'absolute',
                  top: '31%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                GOMBENGSARI
              </Button>
            </div>

            <div className="introButton" style={{ marginTop: '440px' }}>
              <Button
                variant="white"
                style={{
                  color: '#14ca14',
                  opacity: 10,
                  fontSize: '15px',
                  fontWeight: '',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  borderRadius: '15px',
                }}
              >
                TOP SCHOOL ON THE TOP LAND
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;