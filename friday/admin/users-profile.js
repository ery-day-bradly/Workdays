import { day } from '../week/mon/day';

/* Owner-User
 * admin-panel: users-profile
 * dashboard: branches
 * food: items
 * //
 * End-User: 
 * 1. food-orders, 
 * 2. order-history, 
 * 3. customer-service, 
 * 4. support-features
 */
uProfile(global);
//
uProfile('u-profile', day);
//
aProfile('a-profile', global, day);

export default uProfile(day); 
