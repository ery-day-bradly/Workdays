import { FullWindowOverlay } from 'react-native-screens';
import day from '../../../tuesday/day';
import { feature, Tuesday } from '../tues';

// flow is a future in each feature... feature the flow.
// how is it flowing?

day(feature);
Tuesday(feature);
// How would we know if this feature does not flow?
if (day) {
  FullWindowOverlay();
} else {
  console.log("If-you-don\t-know-now-you-know");
}
global(feature, day, Tuesday);