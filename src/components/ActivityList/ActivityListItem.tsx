import React from "react";
import { Button, Modal } from "react-bootstrap";

const ActivityListItem = (props: any) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const formatDate = (dateString:string) => {
        const options:any = { year: "numeric", month: "2-digit", day: '2-digit', hour: '2-digit' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="list-card text-left" >
            <img src="/img/git-icon.png" alt="" width="20px"/>
            <p>{props.type}</p>
            <p className="mb-2">At: {formatDate(props.created_at)}</p>
            <button className="btn btn-secondary btn-block" onClick={showModal}>View details</button>
            <Modal show={isOpen} onHide={hideModal} >
                <Modal.Header>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{props.type} by {props.actor.login}</p>
                    <p>on repo {props.repo.name}</p>
                    {props.type === "PushEvent" ?
                        <p>{props.payload.commits.length} commits</p>
                        : null
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hideModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ActivityListItem;