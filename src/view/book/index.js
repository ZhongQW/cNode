import React, { Component } from 'react';

import data from './data';
import PublicCard from '../public_Card';

class Index extends Component {
    render() {
        return (<PublicCard data = {data}>
            </PublicCard>
        );
    }
}

export default Index;
