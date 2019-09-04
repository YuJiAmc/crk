const AutomaticReminder = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./AutomaticReminder.vue"
  );
const Blacklist = () =>
  import(/* webpackChunkName: "transaction_reminders" */ "./Blacklist.vue");
const CustomerResponse = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./CustomerResponse.vue"
  );
const EstablishTransactionReminders = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./EstablishTransactionReminders.vue"
  );
const PreSaleReminder = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./PreSaleReminder.vue"
  );
const SendDetails = () =>
  import(/* webpackChunkName: "transaction_reminders" */ "./SendDetails.vue");
const SendStatistics = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./SendStatistics.vue"
  );
const UrgentPaymentConversion = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./UrgentPaymentConversion.vue"
  );
const UrgentPraiseStatistics = () =>
  import(
    /* webpackChunkName: "transaction_reminders" */ "./UrgentPraiseStatistics.vue"
  );
export default {
  AutomaticReminder,
  Blacklist,
  CustomerResponse,
  PreSaleReminder,
  SendDetails,
  SendStatistics,
  UrgentPraiseStatistics,
  UrgentPaymentConversion,
  EstablishTransactionReminders
};
