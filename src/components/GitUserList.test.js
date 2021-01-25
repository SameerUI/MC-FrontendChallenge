import React from 'react';
import expect from 'expect';
import GitUserList from './GitUserList';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('GitUserListComponent', () => {

    it('check the number of rows that are rendered', () => {
        const countryWrapper = mount(<GitUserList
            userData={[
                {name: 'Alex', img: ''},
                {name: 'Bob', img: ''},
                {name: 'Charlie', img: ''}
            ]}/>)
        const listTags = countryWrapper.find("li");
        expect(listTags.length).toEqual(3);
    });

});
