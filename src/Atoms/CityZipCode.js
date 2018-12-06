import React, {Component} from 'react';
import _ from 'lodash';
import {Select, Icon, Spin} from 'antd';
import {test} from "../Module/GoogleMap";
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

class CityZipCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: props.region,
            suggestion: [],
            isLoading: false
        };
        this.delayedCallback = _.debounce(this.onSearch, 500);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({region: nextProps.region})
    }

    handleSearch = (value) => {
        this.setState({isLoading: true});
        this.delayedCallback(value);
    };

    onSearch = (value) => {
        const {region} = this.state;
        test(region, value)
            .then(data => {
                data = data.data;
                if (data.status === "OK") this.setState({suggestion: data.predictions});
                else this.setState({suggestion: []});
            })
            .catch(err => console.log(err));
        this.setState({isLoading: false});
    };

    render() {
        const {city, setCity} = this.props;
        const {suggestion, isLoading} = this.state;
        const ListOption = suggestion.map((data, index) => {
            let main_text = data.structured_formatting.main_text;
            let secondary_text = data.structured_formatting.secondary_text;
            return (<Option key={index} value={main_text}>
                <Icon type="environment" theme="filled"/>
                <b> {main_text} </b>{secondary_text}
            </Option>)
        });

        return (
            <Row>
                <Label>City / Zip Code</Label>
                <Select
                    showSearch
                    size="default"
                    style={{width: '100%'}}
                    placeholder="Enter city or zip code"
                    defaultActiveFirstOption={false}
                    value={city}
                    suffixIcon={isLoading ? <Spin size="small"/> : null}
                    onSearch={this.handleSearch}
                    onSelect={value => setCity(value)}
                >
                    {ListOption}
                </Select>
            </Row>
        );
    }
}

export default CityZipCode;