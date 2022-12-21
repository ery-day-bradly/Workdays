import { done } from './day/off/offdays';

const offDays = [Saturday, Sunday];
const onDays = done(- Saturday - Sunday);
const [Monday, Tuesday, Wednesday, Thursday, Friday] = onDays;

export default done; 