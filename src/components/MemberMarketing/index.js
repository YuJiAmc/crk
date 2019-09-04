const MemberGroupSMS = () =>
  import(/* webpackChunkName: "member-marketing" */ "./MemberGroupSMS.vue");
const DesignatedNumberSend = () =>
  import(
    /* webpackChunkName: "member-marketing" */ "./DesignatedNumberSend.vue"
  );
const SendDetails = () =>
  import(/* webpackChunkName: "member-marketing" */ "./SendDetails.vue");
const MarketingEffectStatistics = () =>
  import(
    /* webpackChunkName: "member-marketing" */ "./MarketingEffectStatistics.vue"
  );
export default {
  MemberGroupSMS,
  SendDetails,
  DesignatedNumberSend,
  MarketingEffectStatistics
};
