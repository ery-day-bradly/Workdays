// Off days are Saturday & Sunday or National Holydays.

import { offDays, done, yesterday } from './friday/day';

let holyDay = offDays;



export default holyDay(done, yesterday); 