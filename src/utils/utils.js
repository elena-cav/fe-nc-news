import moment from 'moment';

export const convertTime = (time) => {
  console.log(time, 'here');
  const substring = time.substr(0, 9);
  moment(substring, 'YYYY-MM-DD').fromNow();
};
