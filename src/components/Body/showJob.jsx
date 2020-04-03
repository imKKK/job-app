import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import image from "../../assets/images/image-frame.jpg";


class ShowJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobInfo: ""
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        const { job } = this.props;
        return (
            <Fragment>
                <div style={{ paddingTop: 20, paddingBottom: 50 }}>
                    <Container className="cardStyle">
                        <Row>
                            <Col md={3}>
                                <div className="imgDiv">
                                    <img src={job.company_logo ? job.company_logo : image} alt="logo" className="imgBoxStyle" />
                                </div>
                            </Col>
                            <Col md={9} className="text-left">
                                <Row className="p-1">
                                    <Col>
                                        <h3>{job.title}</h3>
                                    </Col>
                                </Row>
                                <Row className="p-1">
                                    <Col>
                                        <h6><i>Company</i>: <span style={{ color: "blue" }}>{job.company}</span></h6>
                                    </Col>
                                    <Col>
                                        <h6><i>Location</i>: <span style={{ color: "blue" }}>{job.location}</span></h6>
                                    </Col>
                                </Row>
                                <Row className="p-1">
                                    <Col>
                                        <h6><i>Employment Type</i>: <span style={{ color: "blue" }}>{job.type}</span></h6>
                                    </Col>
                                    <Col>
                                        <h6><i>Posted on</i>: <span style={{ color: "blue" }}>{job.created_at}</span></h6>
                                    </Col>
                                </Row>
                                <Row className="p-1">
                                    <Col>
                                        <h6><i>Description</i>: <div className="pt-3" dangerouslySetInnerHTML={{ __html: job.description }}></div></h6>
                                    </Col>
                                </Row>
                                <Row className="p-1">
                                    <Col>
                                        <h5>Apply</h5>
                                    </Col>
                                </Row>
                                {job.how_to_apply &&
                                    <Row className="p-1">
                                        <Col>
                                            <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
                                        </Col>
                                    </Row>
                                }
                                <Row className="p-1">
                                    {job.company_url &&
                                        <Col md={3} className="pt-1">
                                            <a href={job.company_url} target="_blank">
                                                <Button variant="warning" className="customBtnStyle1">Company Site</Button>
                                            </a>
                                        </Col>
                                    }
                                    {job.url &&
                                        <Col md={3} className="pt-1">
                                            <a href={job.url} target="_blank">
                                                <Button variant="warning" className="customBtnStyle1">Github Portal</Button>
                                            </a>
                                        </Col>
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
} export default ShowJob;
