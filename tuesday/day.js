Flow = new flow(feature);
feature(flowing);
Today = new today(DailyStandup);
DailyStandup = new meetings(Huddles);
Huddles = new huddles(flow);

schedule_payouts(paySchedge);

flowing(Monday, flow); {
  flow.Monday.DailyStandup();
  // OnMonday followUp on MainAcct Stripe Payouts 
  console.log('feature-flow', feature, paySchedge); // paySchedge flow is a feature.
}
/**
 * QA Testing? 
 * Typically this might not be known until after 10:00 AM
 * If known from Yesterday - then QA those issues firts before new QA issues that may be ready at 10:00 AM Est.
 * 
 */

export default Tuesday(flow);