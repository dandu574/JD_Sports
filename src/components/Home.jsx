import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import '../css/Home.css';
export default class Home extends Component {

  render() {
    return (
	<div>
	<Image src="images/dog-people.jpg" className="header-image" />
      <Grid>
        <Jumbotron>
          <h3>Welcome to JD Sports</h3>
          <p>
			  New season gear – sorted. We’re helping you hop into Spring with our men’s collection of clothing, footwear and accessories. 
			  Go for street-ready jackets to keep you warm in the crisp spring breeze, layered with new hoodies and sweatshirts to keep you looking fresh. 
			  With brands dropping new lines and exclusives, expect the latest and greatest looks from Nike, adidas, The North Face, PUMA, 
			  Vans and Under Armour… plus heritage brands like Fred Perry, Lacoste and Lyle & Scott.
		  </p>
          <Link to="/">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
			<div className="wow fadeInUp" data-wow-duration="200ms" data-wow-delay="200ms">
				<Image className="lazy img-responsive" src="images/gray.jpg" data-original="images/nike-1.jpeg"/>
			</div>
			<h5>NIKE LUNAR PRIME IRON</h5>
			<div className="product-info">
				<div className="price-review"><span>4.2 ★</span><span>(38)</span></div>
			</div>
			<div className="info-font">
				<div><span>₹4,497</span><span className="text-strike">₹7,495</span></div>
				<div><span>40% off</span></div>
			</div>
          </Col>		  
        </Row>
      </Grid>
	  </div>
    )
  }
}

