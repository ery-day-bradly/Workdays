import { done } from './day/off/offdays';
import { Work, foodService, partService } from './day/Thursday/day';


/* Daily: "What needs to be done, like Yester-day?"
 * Map data for end user geolocations on this position on the globe.
 * What locations are best for geo-coordination among the workers?
 */

/**What needs to be completed if it is not done? What is not done that should be by Today(Fri) */

Today = Friday;
Yesterday = Daily;

// What Work got done from Yesterday? 
offDays = [Saturday, Sunday];
// Yesterday was not like a normal day;
done(Friday);
// 
Work(foodService);
//
Work(partService);
//
done(Saturday - Sunday);
onDays = [Monday, Tuesday, Wednesday, Thursday, Friday];
foodService(done);
partService(done);
Work(Yesterday(done));


export default done; 