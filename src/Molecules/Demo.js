import React, {Component} from 'react';
import styled from 'styled-components';

import CityZipCode from '../Atoms/CityZipCode';
import CountryDropdown from '../Atoms/CountryDropdown';

const Card = styled.div`
    position: relative;
    display: block;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 4px;
    border: 1px solid #d8e5ef;
`;

const CardHeader = styled.div`
    height: 35px;
    background: #fafbfc;
    border-bottom: 1px solid #d8e5ef;
    border-radius: 4px 4px 0 0;
`;

const CardLabel = styled.label`
    font-weight: 500;
    display: inline-block;
    float: left;
    padding-right: 15px;
    font-size: 15px;
    line-height: 19px;
    color: #373848;
    vertical-align: top;
`;

const StepNumber = styled.div`
    float: left;
    width: 34px;
    height: 35px;
    border-radius: 3px 0 0 0;
    background-color: #0093ee;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    line-height: 2.2;
    letter-spacing: normal;
    color: #fff;
`;

const StepTitle = styled.div`
    float: left;
    padding-top: 7.5px;
    padding-left: 6px;
`;

const CardBlock = styled.div`
    display: table;
    width: 100%;
    color: #627b93;
    padding: 10px;
`;

class Demo extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <CardLabel>
                        <StepNumber>1</StepNumber>
                        <StepTitle>Pickup goods from</StepTitle>
                    </CardLabel>
                </CardHeader>
                <CardBlock>
                    <CountryDropdown/>
                    <CityZipCode/>
                </CardBlock>
            </Card>
        );
    }
}

export default Demo;