import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';

export default function ProductDetailsComponent( { product = {} } ) {
	const images = [
		{
			original: `${ product.image }`,
			thumbnail: `${ product.image }`
		},
		{
			original: `${ product.image }`,
			thumbnail: `${ product.image }`
		},
		{
			original: `${ product.image }`,
			thumbnail: `${ product.image }`
		},
	];
	return (
		<div style={{ display: 'flex' }}>
			<Row className="pd10" style={{ 'width': '100%' }} >
				<Col md={5}>
					<div className="image-gallery-div">
						<ImageGallery items={images} thumbnailPosition="left" />

					</div>
				</Col>
				<Col>
					<h4 style={{ color: 'green' }}>{product.name}</h4>
					<hr />
					<h5>Price</h5>
					<h2>
						<strong class="currency">₹</strong>
						{product.price}</h2>
					<h6>{`Category:${ product.category }`}</h6>
				</Col>

			</Row>



		</div >
	)
}