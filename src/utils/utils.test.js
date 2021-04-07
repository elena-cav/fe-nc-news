import { convertTime } from './utils';
describe('Name of the group', () => {
  it('Name of the group', () => {
    expect(convertTime('2016-10-06T02:25:06.725Z')).toEqual('5 years ago');
  });
});
