import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-5 align-items-center justify-content-between w-100'>
      <Col></Col>
      <Col lg={5}>
        <h1 style={{fontSize:'40px'}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime nulla porro, maiores architecto cupiditate nostrum sequi voluptatibus labore nihil molestiae ducimus nobis aperiam eveniet provident facere placeat culpa facilis.</p>
        <button onClick={()=>navigateByUrl('./home')} className='btn btn-info mt-4'>Get Started</button>
      </Col>
      <Col lg={5}>
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
      <Col></Col>

    </Row>
    <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3>Features</h3>
      <div className="cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100">
      <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Categorized Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '22rem' }} className='p-4 bg-info'>
      <Card.Img variant="top" height={'300px'} width={'300px'} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-primary'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
      <div className="col-lg-5">
        <h4 className='text-warning'>Simple, Powerful & Fast</h4>
        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis repellat id suscipit distinctio officia commodi illum, officiis veritatis exercitationem mollitia quod! Voluptatum necessitatibus atque incidunt sunt? A, iusto voluptates.</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis repellat id suscipit distinctio officia commodi illum, officiis veritatis exercitationem mollitia quod! Voluptatum necessitatibus atque incidunt sunt? A, iusto voluptates.</h6>

        <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis repellat id suscipit distinctio officia commodi illum, officiis veritatis exercitationem mollitia quod! Voluptatum necessitatibus atque incidunt sunt? A, iusto voluptates.</h6>
      </div>
      <div className="video col-lg-5">
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/6G75yTBzBUA" title="Mini Maharani Video Song  | Premalu | Naslen | Mamitha | Girish AD | Vishnu Vijay | Suhail Koya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
      </div>
    </div>

    </>
  )
}

export default LandingPage