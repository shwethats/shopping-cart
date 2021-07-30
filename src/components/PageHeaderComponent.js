import React from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap';
import '../App.scss';

export default function PageHeaderComponent( props ) {




	return (
		<header className="app-header">
			<Image src='https://t3.ftcdn.net/jpg/03/56/84/56/360_F_356845657_AVgTOW04Qn2gMpshghrdZWq02ht3NcFO.jpg' onClick={props.onClick} roundedCircle />
			{
				!props.showDetails &&
				<Navbar variant="light">
					<Nav className="me-auto">
						{/*<Nav.Link href="#home">Home</Nav.Link>*/}
						<Nav.Link href="/">Shirt</Nav.Link>
						<Nav.Link href="/">Tie</Nav.Link>
						<Nav.Link href="/">Shoe</Nav.Link>
					</Nav>
				</Navbar>



			}
			{
				!props.showDetails && <div className="search-div" style={{ 'float': 'right' }}>
					<span class="icon"><i class="fa fa-search"></i></span>

					<input
						type="search"
						id="userSearch"
						name="userSearch"
						className="mainSearch"
						placeholder="Search"
						value={props.searchText}
						onChange={props.onChange} />
				</div>
			}





		</header>
	)
}
