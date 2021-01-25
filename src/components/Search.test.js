import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Search from './Search';
import App from '../App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('SearchComponent', () => {

  it('check if search bar works (case-sensitive)', async () => {
    const mainWrapper = mount(<App />)
    const searchCmp = mainWrapper.find(Search).get(0);
    await searchCmp.props.doSearch("SameerUI");
    let res = await expect(mainWrapper.state().filteredData);
    res.toEqual([
      {
        "name": "SameerUI",
        "img": "https://avatars.githubusercontent.com/u/16260341?v=4"
      }, {
        "name": "SameerUI6",
        "img": "https://avatars.githubusercontent.com/u/62546227?v=4"
      }
    ]);
  });

  it('check if search bar works (case-insensitive)', async () => {
    const mainWrapper = mount(<App />)
    const searchCmp = mainWrapper.find(Search).get(0);
    await searchCmp.props.doSearch("sameerui");
    let res = await expect(mainWrapper.state().filteredData);
    res.toEqual([
      {
        "name": "SameerUI",
        "img": "https://avatars.githubusercontent.com/u/16260341?v=4"
      }, {
        "name": "SameerUI6",
        "img": "https://avatars.githubusercontent.com/u/62546227?v=4"
      }
    ]);
  });
});
