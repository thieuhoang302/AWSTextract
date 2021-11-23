import React, {Component} from "react"
import {Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import muniImg from "../../images/hcmute.png";

const Header = () => (
    <div>
        <Navbar color="light" light expand="md" style={{height: '52px'}}>
            <NavbarBrand href="http://hcmute.edu.vn">
                <img style={{height: 62, width: 362}} className="main-logo" src={muniImg} alt="MuniVisor"/>
            </NavbarBrand>
            <Collapse navbar>
                <Nav className="ml-auto m-auto" navbar>
                    <NavItem className="text-uppercase" style={{fontSize: "23px", color: "#f3a435"}}>
                        Textract demo (Webapp phân tích hình ảnh thành chữ)
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)

export default Header