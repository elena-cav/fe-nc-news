import { convertTime } from './utils';
describe('Time converter', () => {
  it('Converts a time from UTC into a string with month, day and year ', () => {
    expect(convertTime('2016-10-06T02:25:06.725Z')).toEqual('Oct 6th 2016');
    expect(convertTime('2019-02-04T04:29:06.725Z')).toEqual('Feb 4th 2019');
    expect(convertTime('1961-12-09T04:29:06.725Z')).toEqual('Dec 9th 1961');
  });
});
