import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import '../css/CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
			<div className="container_1">
			  <nav className="navbar navbar-inverse">
				<div className="navbar-header">
					<button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="/"><Image className="lazy img-responsive" src="images/logo.png" data-original="images/logo.png"/></a>
				</div>	
				<div className="collapse navbar-collapse js-navbar-collapse">
					<ul className="nav navbar-nav">
						<li className="dropdown mega-dropdown">
							<a href="/" className="dropdown-toggle" data-toggle="dropdown">Men <span className="caret"></span></a>				
							<ul className="dropdown-menu mega-dropdown-menu">
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Men Collection</li>                            
										<div id="menCollection" className="carousel slide" data-ride="carousel">
										  <div className="carousel-inner">
											<div className="item active">
												<a href="/"><Image src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
												<h4><small>Summer dress floral prints</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 4,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>       
											</div>
											<div className="item">
												<a href="/"><Image src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
												<h4><small>Gold sandals with shiny touch</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 9,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>        
											</div>
											<div className="item">
												<a href="/"><Image src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
												<h4><small>Denin jacket stamped</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 4,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>      
											</div>                              
										  </div>
										  
										  <a className="left carousel-control" href="#menCollection" role="button" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
											<span className="sr-only">Previous</span>
										  </a>
										  <a className="right carousel-control" href="#menCollection" role="button" data-slide="next">
											<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
											<span className="sr-only">Next</span>
										  </a>
										</div>
										<li className="divider"></li>
										<li><a href="/">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Features</li>
										<li><a href="/">Auto Carousel</a></li>
										<li><a href="/">Carousel Control</a></li>
										<li><a href="/">Left & Right Navigation</a></li>
										<li><a href="/">Four Columns Grid</a></li>
										<li className="divider"></li>
										<li className="dropdown-header">Fonts</li>
										<li><a href="/">Glyphicon</a></li>
										<li><a href="/">Google Fonts</a></li>
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Plus</li>
										<li><a href="/">Navbar Inverse</a></li>
										<li><a href="/">Pull Right Elements</a></li>
										<li><a href="/">Coloured Headers</a></li>                            
										<li><a href="/">Primary Buttons & Default</a></li>							
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Much more</li>
										<li><a href="/">Easy to Customize</a></li>
										<li><a href="/">Calls to action</a></li>
										<li><a href="/">Custom Fonts</a></li>
										<li><a href="/">Slide down on Hover</a></li>                         
									</ul>
								</li>
							</ul>				
						</li>
						<li className="dropdown mega-dropdown">
							<a href="/" className="dropdown-toggle" data-toggle="dropdown">Women <span className="caret"></span></a>				
							<ul className="dropdown-menu mega-dropdown-menu">
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Features</li>
										<li><a href="/">Auto Carousel</a></li>
										<li><a href="/">Carousel Control</a></li>
										<li><a href="/">Left & Right Navigation</a></li>
										<li><a href="/">Four Columns Grid</a></li>
										<li className="divider"></li>
										<li className="dropdown-header">Fonts</li>
										<li><a href="/">Glyphicon</a></li>
										<li><a href="/">Google Fonts</a></li>
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Plus</li>
										<li><a href="/">Navbar Inverse</a></li>
										<li><a href="/">Pull Right Elements</a></li>
										<li><a href="/">Coloured Headers</a></li>                            
										<li><a href="/">Primary Buttons & Default</a></li>							
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Much more</li>
										<li><a href="/">Easy to Customize</a></li>
										<li><a href="/">Calls to action</a></li>
										<li><a href="/">Custom Fonts</a></li>
										<li><a href="/">Slide down on Hover</a></li>                         
									</ul>
								</li>
								<li className="col-sm-3">
									<ul>
										<li className="dropdown-header">Women Collection</li>                            
										<div id="womenCollection" className="carousel slide" data-ride="carousel">
										  <div className="carousel-inner">
											<div className="item active">
												<a href="/"><Image src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
												<h4><small>Summer dress floral prints</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 4,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>       
											</div>
											<div className="item">
												<a href="/"><Image src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
												<h4><small>Gold sandals with shiny touch</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 9,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>        
											</div>
											<div className="item">
												<a href="/"><Image  src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
												<h4><small>Denin jacket stamped</small></h4>                                        
												<button className="btn btn-primary" type="button">₹ 4,999</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>      
											</div>                             
										  </div>
										  
										  <a className="left carousel-control" href="#womenCollection" role="button" data-slide="prev">
											<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
											<span className="sr-only">Previous</span>
										  </a>
										  <a className="right carousel-control" href="#womenCollection" role="button" data-slide="next">
											<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
											<span className="sr-only">Next</span>
										  </a>
										</div>
										<li className="divider"></li>
										<li><a href="/">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
									</ul>
								</li>
							</ul>				
						</li>
						<li><a href="/">Store locator</a></li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
					<li className="dropdown">
					  <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></a>
					  <ul className="dropdown-menu" role="menu">
						<li><a href="/">Action</a></li>
						<li><a href="/">Another action</a></li>
						<li><a href="/">Something else here</a></li>
						<li className="divider"></li>
						<li><a href="/">Separated link</a></li>
					  </ul>
					</li>
					<li><a href="/">My cart (0) items</a></li>
				  </ul>
				</div>
			  </nav>
			</div>
		)
	}
}
