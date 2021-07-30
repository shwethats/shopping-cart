import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.scss';

export default function ProductComponent( props ) {

	return (
		<div style={{ 'display': 'flex' }}>
			<Row className='pd10'>
				{
					props.productInfo && props.productInfo.map( element => {
						return ( <Col md={3} className='pd0'>
							<Container name={element.name} id={element.id} onClick={props.onClick}>
								<Card  >
									<Card.Img variant="top" src={element.image} name={element.name} id={element.id} />
									<Card.Body name={element.name} id={element.id}>
										<Card.Title name={element.name} id={element.id}>{element.name}</Card.Title>
										<Card.Text name={element.name} id={element.id}>
											<strong class="currency">₹</strong>

											{element.price}
										</Card.Text>
									</Card.Body>

								</Card>
							</Container>

						</Col> )
					} )
				}

			</Row>

		</div> )

}

