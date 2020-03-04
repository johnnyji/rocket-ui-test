import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';
import store from '../../stores/Root';
import { useRocketById } from '../hooks';

configure({ adapter: new Adapter() });

const TestElem = () => {
  const rocket = useRocketById(1);
  return <span>{rocket ? rocket.rocket_id : null}</span>
};

describe('hooks', () => {
  describe('useRocketById', () => {
    it('should invoke the correct http request', async () => {
      // set up a quick interception for the http request
      const scope = nock('https://api.spacexdata.com')
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/v3/rockets/1')
        .reply(200, { rocket_id: 1 });

      let wrapper;

      await act(async () => {
        wrapper = await mount(<Provider store={store}><TestElem /></Provider>);
        // little trick to get react to flush changes
        await new Promise(resolve => setImmediate(resolve));
        wrapper.update();
      });

      expect(wrapper.find('TestElem')).toHaveLength(1);
      expect(scope.isDone()).toBeTruthy();
      wrapper.unmount();
    });
  });
});
