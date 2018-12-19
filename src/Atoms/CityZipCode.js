import React, {Component} from 'react';
import _ from 'lodash';
import Script from 'react-load-script';
import {Select, Icon, Spin} from 'antd';
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

    static getDerivedStateFromProps(props, state) {
        return {
            ...state,
            region: props.region
        }
    }

    handleSearch = (value) => {
        this.setState({isLoading: true});
        this.delayedCallback(value);
    };

    onSearch = (value) => {
        if (!value) {
            this.setState({isLoading: false});
            return;
        }
        const {region} = this.state;

        // Initialize Google Autocomplete
        /*global google*/ // To disable any eslint 'google not defined' errors
        let service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions({
            input: value,
            types: ['(cities)'],
            componentRestrictions: {country: region}
        }, (data) => this.setState({suggestion: data ? Object.values(data) : []}));
        this.setState({isLoading: false})
    };

    render() {
        const {value, setLocation} = this.props;
        const {suggestion, isLoading} = this.state;
        let ListOption = suggestion.map(data => {
            let main_text = data.structured_formatting.main_text;
            let secondary_text = data.structured_formatting.secondary_text;
            let location = {
                city: main_text,
                address: secondary_text,
                id: data.id
            };
            return (<Option key={data.id} data-location={location} value={data.id}>
                <Icon type="environment" theme="filled"/>
                <b> {main_text} </b>{secondary_text}
            </Option>)
        });

        return (
            <Row>
                <Label>City / Zip Code</Label>
                <Script
                    url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQQEd-25h1vNZwMxk1z-odE3EqAO6__UU&libraries=places"/>
                <Select
                    showSearch
                    size="default"
                    style={{width: '100%'}}
                    placeholder="Enter city or zip code"
                    defaultActiveFirstOption={false}
                    value={value ? value.id : undefined}
                    suffixIcon={isLoading ? <Spin size="small"/> : null}
                    notFoundContent={null}
                    filterOption={false}
                    onSearch={this.handleSearch}
                    onSelect={(value, option) => setLocation(option.props["data-location"])}
                >
                    {ListOption}
                </Select>
            </Row>
        );
    }
}

export default CityZipCode;