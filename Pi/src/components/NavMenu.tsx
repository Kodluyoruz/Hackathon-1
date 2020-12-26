import * as React from "react";
import {
	Collapse,
	Container,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	NavItem,
	NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default class NavMenu extends React.PureComponent<
	{},
	{ isOpen: boolean }
> {
	public state = {
		isOpen: false,
	};

	public render() {
		return (
			<header>
				<Navbar
					className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow"
					light

				>
					<Container>
						<NavbarBrand tag={Link} to="/">
							<img src="/assets/kodluyoruz999.png" style={{ width: 200 }} alt="" />
						</NavbarBrand>
						<NavbarToggler onClick={this.toggle} className="mr-2" />
						<Collapse
							className="d-sm-inline-flex flex-sm-row-reverse"
							isOpen={this.state.isOpen}
							navbar
						>
							<ul className="navbar-nav flex-grow">
								<NavItem>
									<NavLink
										tag={Link}
										style={{ color: "#F78501", marginRight: 30, fontWeight:400, fontSize:22 }}
										className="ml-1 menuitem"
										to="/"
									>
										Anasayfa
									</NavLink>
								</NavItem>
								{/* <NavItem>
                                <NavLink tag={Link} style={{color:'#F78501', marginRight:50}} className="ml-1" to="/sss">SSS</NavLink>
                            </NavItem> */}
								<NavItem>
									<NavLink
										tag={Link}
										style={{ color: "#F78501", marginRight: 50, fontWeight:400, fontSize:22 }}
										className="ml-1 menuitem"
										to="/iletisim"
									>
										İletişim
									</NavLink>
								</NavItem>
								{/* <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                                </NavItem> */}
							</ul>
						</Collapse>
					</Container>
				</Navbar>
			</header>
		);
	}

	private toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
}
