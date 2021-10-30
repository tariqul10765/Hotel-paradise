import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './SpecialStaff.css'

const SpecialStaff = () => {
    return (
        <div className='special__staff__container'>
            <h2 className='text-center my-5'>Our Special Staff</h2>

            <Row className="staffs">
                <Col>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/team/team3.jpg" alt="" />
                </Col>
                <Col>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/team/team2.jpg" alt="" />
                </Col>
                <Col>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/team/team6.jpg" alt="" />
                </Col>
                <Col>
                    <img src="https://template.hasthemes.com/picklu/picklu/img/team/team4.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default SpecialStaff;