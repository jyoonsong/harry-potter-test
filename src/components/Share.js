import * as React from "react"
import { Modal } from 'react-bootstrap'

const Share = ({ siteTitle, show, setShow }) => {

    const openInNewTab = (url) => {
        if (typeof window !== 'undefined') {
            const win = window.open(url, "_blank", "toolbar=yes, scrollbars=yes,status=no, resizable=yes,left=500, width=600, height=400");
            win.focus();
        }
    }

    const fallbackCopyTextToClipboard = (text) => {
        var textArea = document.createElement("textarea");
        textArea.value = text;
    
        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
    
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
    
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            alert("링크 복사 성공!");
            console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert("죄송합니다. 에러가 발생했습니다. 다시 시도해주세요.")
        }
    
        document.body.removeChild(textArea);
    }

    const copyTextToClipboard = (text) => {
        if (typeof window !== 'undefined') {
            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(text);
                return;
            }
            navigator.clipboard.writeText(text).then(function() {
                alert("링크 복사 성공!");
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
                alert("죄송합니다. 에러가 발생했습니다. 다시 시도해주세요.")
            });
        }
    }
    
    const currentLink = (typeof window !== 'undefined') ? window.location.href.replace("/question", "") : "";

    const Share = {
        twitter: () => {
            openInNewTab("https://twitter.com/intent/tweet?url=" + currentLink);
        },
        naver: () => {
            openInNewTab("http://blog.naver.com/openapi/share?url=" + currentLink);
        },
        facebook: () => {
            openInNewTab("http://www.facebook.com/sharer.php?u=" + currentLink);
        },
        copyLink: () => {
            copyTextToClipboard(currentLink);
        }
    };

    return(
    <Modal show={show} onHide={() => setShow(false)}>
        
        <Modal.Header closeButton>
            <Modal.Title>공유하기</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
            <a className="icon-share" onClick={() => Share.facebook()}>
                <img src="/images/share/facebook.svg" alt="share icon" />
            </a>
            <a className="icon-share" onClick={() => Share.naver()}>
                <img src="/images/share/naver.png" alt="share icon" />
            </a>
            <a className="icon-share" onClick={() => Share.twitter()}>
                <img src="/images/share/twitter.png" alt="share icon" />
            </a>
            <a className="icon-share" onClick={() => Share.copyLink()}>
                <img src="/images/share/link.svg" alt="share icon" />
            </a>
        </Modal.Body>
        
    </Modal>
    )
}

Share.defaultProps = {
  siteTitle: ``,
}

export default Share
