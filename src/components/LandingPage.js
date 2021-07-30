import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { productInfo } from '../../';
import '../App.scss';
import productInfo from '../temp.json';
import FooterComponent from './FooterComponent';
//import { Captcha } from './Captcha';
import PageHeaderComponent from './PageHeaderComponent';
import ProductComponent from './ProductComponent';
import ProductDetailsComponent from './ProductDetailsComponent';

export default function LandingPage() {

  const [ products, setProducts ] = useState( productInfo );
  const [ searchText, setSearchText ] = useState();
  const [ showDetails, setShowDetails ] = useState( false );
  const [ product, setProductInfo ] = useState()

  const showItemInfo = async ( event ) => {
    debugger
    await setShowDetails( true );
    const filterList = productInfo && productInfo.length > 0 && productInfo.filter( ( element, index ) => {
      const flag = element.id.includes( event.target.id );
      if ( flag ) {
        return element;
      }
    } );
    //setProducts( filterList );
    await setProductInfo( filterList[ 0 ] )
  }

  const onLogoClick = async ( event ) => {
    //yet to replace with history object
    window.location.reload();
  }

  const onSearch = async ( event ) => {
    await setSearchText( event.target.value );

    const search = event.target.value;

    if ( search.length > 0 ) {
      const filterList = productInfo && productInfo.length > 0 && productInfo.filter( ( element, index ) => {
        const flag = element.category.toLowerCase().includes( search.toLowerCase() );
        if ( flag ) {
          return element;
        }
      } );
      setProducts( filterList );
    } else {
      setProducts( productInfo );
    }

  }

  return (
    <React.Fragment>
      {
        <PageHeaderComponent
          searchText={searchText}
          onChange={onSearch}
          onClick={onLogoClick}
          showDetails={showDetails}
        />
      }

      <Row className="row-container mrg40" >
        <Col lg={{ span: 12, offset: 0 }} sm={{ span: 6, offset: 3 }} md={{ span: 10, offset: 1 }} xs={{ span: 8, offset: 2 }}>
          {
            !showDetails && products.length > 0 ?
              <ProductComponent
                productInfo={products}
                onClick={showItemInfo}

              /> : ( !showDetails && products.length === 0 ? <center><p>No item found</p></center> : <ProductDetailsComponent product={product} /> )
          }
        </Col>
      </Row>
      <FooterComponent />
    </React.Fragment>
  );

}

