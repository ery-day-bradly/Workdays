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
 */

export default Tuesday(flow);