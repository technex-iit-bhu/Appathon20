let availableSubscriptions = [];

// availableSubscriptions.push({
//   planId: 'plan_EDYmnEnn8rq3HA',
//   type: 'SnapAlert AI Yearly (USA)',
//   price: '99',
//   currency: 'usd',
//   priceInterval: 'year',
//   trialPeriod: '14 days',
//   supportList: [
//     {
//       header: 'Unlimited',
//       sub_header: 'Child Accounts',
//     },
//     {
//       header: '24 x 7',
//       sub_header: 'Customer Support',
//     },
//     {
//       header: 'Access',
//       sub_header: 'to Parental Experts',
//     },
//   ]
// });
//
// availableSubscriptions.push({
//   planId: 'plan_EDYmw8zY92FvqD',
//   type: 'SnapAlert AI Monthly (USA)',
//   price: '9',
//   currency: 'usd',
//   priceInterval: 'month',
//   trialPeriod: '14 days',
//   supportList: [
//     {
//       header: 'Unlimited',
//       sub_header: 'Child Accounts',
//     },
//     {
//       header: '24 x 7',
//       sub_header: 'Customer Support',
//     },
//   ]
// });

availableSubscriptions.push({
  id:0,
  planId: 'plan_EDYkOlmzv2PIgz',
  type: 'SnapAlert Yearly',
  price: '49.99',
  currency: 'cad',
  priceInterval: 'year',
  trialPeriod: '14 days',
  supportList: [
    {
      header: 'Unlimited',
      sub_header: 'Child Accounts',
    },
    {
      header: '24 x 7',
      sub_header: 'Customer Support',
    },
    {
      header: 'Access',
      sub_header: 'to Parental Experts',
    },
  ]
});

availableSubscriptions.push({
  id:1,
  planId: 'plan_EDYjrm9DzaZc3q',
  type: 'SnapAlert Monthly',
  price: '4.99',
  currency: 'cad',
  priceInterval: 'month',
  trialPeriod: '14 days',
  supportList: [
    {
      header: 'Unlimited',
      sub_header: 'Child Accounts',
    },
    {
      header: '24 x 7',
      sub_header: 'Customer Support',
    },
  ]
});

export const getAvailableSubscriptions = () => {
  return availableSubscriptions;
};
