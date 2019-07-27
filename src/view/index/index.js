import React, { Component } from 'react';
import {Row,Col} from 'antd';

import IndexMenu from './indexMenu';
import IndexList from './list';
import '../index.css';

class Index extends Component {
    render(){
        return (
            <Row className="wrap">
                <Col md = {6} xs = {0}>
                    <IndexMenu id = "indexMenu">
                    </IndexMenu>
                </Col>
                <Col md = {0} xs = {24}>
                    <IndexMenu id = "indexXsMenu" mode="horizontal">
                    </IndexMenu>
                </Col>
                <Col md ={18} xs = {24} className = "indexList">
                    <IndexList/>
                </Col>
            </Row>
        );
    }
}

export default Index;
