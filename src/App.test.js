import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import App from './App';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount, shallow} from 'enzyme';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('AppComponent', () => {

    it('check empty search', () => {
        const wrapper = mount(<App/>);
        wrapper.instance().filterGitUsers("");
        expect(wrapper.state().filteredData).toEqual([]);
    });

    it('check if the filter works', async () => {
        const wrapper = mount(<App/>);
        await wrapper.instance().filterGitUsers("SameerUI6");
        expect(wrapper.state().filteredData).toEqual([
            {
              "name": "SameerUI6",
              "img": "https://avatars.githubusercontent.com/u/62546227?v=4"
            }
          ]);
    });
});
