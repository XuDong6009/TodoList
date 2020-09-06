import React from 'react';
import {shallow,mount,configure } from 'enzyme';
import App from "./App";
import {Provider} from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import store from "./redux/store";

configure({ adapter: new Adapter() })


describe('Enzyme Shallow', function () {
  it('App\'s title should be TodoList', function () {
    let app = shallow(<App/>);
    expect(app.find('h1').text()).toEqual('TodoList');
  });
});

describe('Enzyme Mount', function () {
  it('Delete Todo', function () {
    let app = mount(<Provider store={store}><App/></Provider>);
    console.log(app.debug())
    // let todoLength = app.find('li').length;
    // app.find('span.anticon-delete').at(0).simulate('click');
    // expect(app.find('li').length).toEqual(todoLength - 1);
  });
})





