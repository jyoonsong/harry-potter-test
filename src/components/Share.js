import * as React from "react"
import { Modal } from 'react-bootstrap'
import { Link } from "gatsby"

const Share = ({ siteTitle, show, setShow }) => {

    return(
    <Modal show={show} onHide={() => setShow(false)}>
        
        <Modal.Header closeButton>
            <Modal.Title>공유하기</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            Woohoo, you're reading this text in a modal!
        </Modal.Body>
        
    </Modal>
    )
}

Share.defaultProps = {
  siteTitle: ``,
}

export default Share
