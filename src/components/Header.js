import React, { useState } from "react"
import { Navbar, Nav, Button } from 'react-bootstrap'

import Share from "./Share"

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false);

  return (
  <>
    <header>
      <Navbar className="px-0 py-3" sticky="top">
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Button variant="outline-primary" onClick={() => setShow(true)}>공유하기</Button>
            </Nav>

        </Navbar.Collapse>
      </Navbar>
    </header>

    <Share show={show} setShow={setShow} siteTitle={siteTitle}/>
  </>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
