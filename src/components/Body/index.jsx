import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { getJobs } from '../../services/jobservice';
import image from "../../assets/images/image-frame.jpg";
import ShowJob from "./showJob";
import { connect } from "react-redux";


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true,
            showJob: false,
            data: [],
            selectedJob: "",
            searchString: ""
        }
    }

    componentDidMount = async () => {
        await this.getJobs();
    }

    componentDidUpdate = async (prevProps) => {
        if (prevProps.state.search.content !== this.props.state.search.content) {
            await this.getJobs(this.props.state.search.content);
        }
    }

    getJobs = async (searchString) => {
        const res = await getJobs(searchString);

        if (res.data.status === 200) {
            await this.setState({
                data: res.data.data,
                searchString: searchString
            })
        }
    }

    showJob = (job) => {
        this.setState({
            selectedJob: job,
            showJob: true
        })
    }

    backFun = () => {
        this.setState({
            showJob: false
        })
    }

    render() {
        const { data, showJob, selectedJob, searchString } = this.state;

        return (
            <Fragment>
                <Container>
                    <Row>
                        {!showJob &&
                            <Col className="text-left pt-4 pb-2">
                                <h5>| Showing '{searchString ? searchString : "all"}' Jobs</h5>
                            </Col>
                        }
                        {showJob &&
                            <Col className="text-left pt-4 pb-2">
                                <Button variant="warning" onClick={this.backFun}>Back</Button>
                            </Col>
                        }
                    </Row>
                    {!showJob && data.map(job => (
                        <div className="p-2">
                            <Row className="cardStyle text-left">
                                <Col md={2} className="p-0">
                                    <img src={job.company_logo ? job.company_logo : image} alt="logo" height="80" width="100" />
                                </Col>
                                <Col md={8}>
                                    <Row className="p-1">
                                        <Col>
                                            <h5 >{job.title}</h5>
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
                                </Col>
                                <Col md={2} style={{ padding: 24 }}>
                                    <Button variant="primary" className="customBtnStyle" onClick={() => this.showJob(job)}>Apply</Button>
                                </Col>
                            </Row>
                        </div>
                    ))}
                    {showJob && selectedJob &&
                        <Fragment>
                            <ShowJob job={selectedJob} />
                        </Fragment>
                    }
                    {!showJob && data.length === 0 &&
                        <Row>
                            <Col>No data to display for '{searchString}'</Col>
                        </Row>
                    }
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return ({
        state: state
    })
}

export default connect(
    mapStateToProps
)(Index);