import React, {Component} from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Row = styled.div`
    float: left;
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-right: 5px;
    padding-left: 5px;
`;

const Label = styled.label`
    width: inherit;
    height: 17px;
    font-size: 11px;
    font-weight: 500;
    line-height: 1.55;
    color: #717585;
    margin-left: 5px;
    margin-bottom: 4px;
`;

class CityZipCode extends Component {
    render() {
        return (
            <Row>
                <Label>City / Zip Code</Label>
                <Input size="large" placeholder="Enter city or zip code" />
            </Row>
        );
    }
}

export default CityZipCode;