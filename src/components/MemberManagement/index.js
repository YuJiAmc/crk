const MemberList = () =>
  import(/* webpackChunkName: "member-management" */ "./MemberList.vue");
const MemberGroups = () =>
  import(/* webpackChunkName: "member-management" */ "./MemberGroups.vue");
const MemberAnalysis = () =>
  import(/* webpackChunkName: "member-management" */ "./MemberAnalysis.vue");
const MemberLevelSetting = () =>
  import(
    /* webpackChunkName: "member-management" */ "./MemberLevelSetting.vue"
  );
const MemberHistoryIntroduction = () =>
  import(
    /* webpackChunkName: "member-management" */ "./MemberHistoryIntroduction.vue"
  );
export default {
  MemberList,
  MemberAnalysis,
  MemberGroups,
  MemberLevelSetting,
  MemberHistoryIntroduction
};
