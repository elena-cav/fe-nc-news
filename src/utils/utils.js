import moment from 'moment';

export const convertTime = (time) => {
  return moment(time, 'YYYY-MM-DDTHH:mm.sssZ').format('MMM Do YY');
};
