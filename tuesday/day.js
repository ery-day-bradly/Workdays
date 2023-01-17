Flow = new flow(feature);
feature(flowing);
Today = new today(DailyStandup);
DailyStandup = new meetings(Huddles);
Huddles = new huddles(flow);



flowing(Monday, flow); {
  flow.Monday.DailyStandup();

  console.log('feature-flow', feature); // flow is a feature.
}
/**
 * QA Testing? 
 */

export default Tuesday(flow);