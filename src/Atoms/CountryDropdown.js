import React, {Component} from 'react';
import {Select} from 'antd';
import data_nations from '../Config/data_nations';
import styled from 'styled-components';

const Option = Select.Option;

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

class CountryDropdown extends Component {
    render() {
        const {setRegion, region} = this.props;
        const ListOption = data_nations.data.map(nation => {
            return <Option key={nation.code} value={nation.code}>{nation.name}</Option>;
        });

        return (
            <Row>
                <Label>Origin country</Label>
                <Select
                    size="default"
                    showSearch
                    style={{width: 200}}
                    placeholder="Enter city or zip code"
                    defaultValue={region}
                    onSelect={value => setRegion(value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {ListOption}
                </Select>
            </Row>
        );
    }
}

export default CountryDropdown;