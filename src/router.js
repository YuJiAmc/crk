import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/Layout";
import Home from "@/components/Home";
import TransactionReminders from "@/components/TransactionReminders";
import MemberMarketing from "@/components/MemberMarketing";
import MemberManagement from "@/components/MemberManagement";
import AdministratorsSetting from "@/components/AdministratorsSetting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Layout,
      redirect: { name: "home" },
      hidden: true,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home
        }
      ]
    },
    {
      path: "/transaction-reminders",
      name: "transaction-reminders",
      component: Layout,
      meta: { icon: "el-icon-message-solid", title: "交易提醒" },
      redirect: "/transaction-reminders/automatic-reminder",
      children: [
        {
          path: "automatic-reminder",
          name: "automatic-reminder",
          component: TransactionReminders.AutomaticReminder,
          meta: { title: "自动提醒" }
        },
        {
          path: "establish-transaction-reminders",
          name: "establish-transaction-reminders",
          component: TransactionReminders.EstablishTransactionReminders,
          meta: { title: "制定交易提醒" }
        },
        {
          path: "blacklist",
          name: "blacklist",
          component: TransactionReminders.Blacklist,
          meta: { title: "黑名单" }
        },
        {
          path: "pre-sale-reminder",
          name: "pre-sale-reminder",
          component: TransactionReminders.PreSaleReminder,
          meta: { title: "预售催付" }
        },
        {
          path: "customer-response",
          name: "customer-response",
          component: TransactionReminders.CustomerResponse,
          meta: { title: "客户回复" }
        },
        {
          path: "send-details",
          name: "send-details",
          component: TransactionReminders.SendDetails,
          meta: { title: "发送明细" }
        },
        {
          path: "send-statistics",
          name: "send-statistics",
          component: TransactionReminders.SendStatistics,
          meta: { title: "发送统计" }
        },
        {
          path: "urgent-payment-conversion",
          name: "urgent-payment-conversion",
          component: TransactionReminders.UrgentPaymentConversion,
          meta: { title: "催付转化统计" }
        },
        {
          path: "urgent-praise-statistics",
          name: "urgent-praise-statistics",
          component: TransactionReminders.UrgentPraiseStatistics,
          meta: { title: "催好评统计" }
        }
      ]
    },
    {
      path: "/member-marketing",
      name: "member-marketing",
      component: Layout,
      meta: { icon: "el-icon-location", title: "会员营销" },
      redirect: "/member-marketing/member-group-sms",
      children: [
        {
          path: "member-group-sms",
          name: "member-group-sms",
          component: MemberMarketing.MemberGroupSMS,
          meta: { title: "会员群发短信" }
        },
        {
          path: "designated-number-send",
          name: "designated-number-send",
          component: MemberMarketing.DesignatedNumberSend,
          meta: { title: "指定号码发送" }
        },
        {
          path: "member-send-details",
          name: "member-send-details",
          component: MemberMarketing.SendDetails,
          meta: { title: "发送明细" }
        },
        {
          path: "marketing-effect-statistics",
          name: "marketing-effect-statistics",
          component: MemberMarketing.MarketingEffectStatistics,
          meta: { title: "会员营销统计" }
        }
      ]
    },
    {
      path: "/member-management",
      name: "member-management",
      component: Layout,
      meta: { icon: "el-icon-location", title: "会员管理" },
      redirect: "/member-management/member-list",
      children: [
        {
          path: "member-list",
          name: "member-list",
          component: MemberManagement.MemberList,
          meta: { title: "会员列表" }
        },
        {
          path: "member-groups",
          name: "member-groups",
          component: MemberManagement.MemberGroups,
          meta: { title: "会员分组" }
        },
        {
          path: "member-analysis",
          name: "member-analysis",
          component: MemberManagement.MemberAnalysis,
          meta: { title: "会员分析" }
        },
        {
          path: "member-level-setting",
          name: "member-level-setting",
          component: MemberManagement.MemberLevelSetting,
          meta: { title: "会员等级设置" }
        },
        {
          path: "member-history-introduction",
          name: "member-history-introduction",
          component: MemberManagement.MemberHistoryIntroduction,
          meta: { title: "历史会员导入" }
        }
      ]
    },
    {
      path: "/administrators-setting",
      name: "administrators-setting",
      component: Layout,
      meta: { icon: "el-icon-location", title: "管理员设置" },
      redirect: "/administrators-setting/multiple-shops-binding",
      children: [
        {
          path: "multiple-shops-binding",
          name: "multiple-shops-binding",
          component: AdministratorsSetting.MultipleShopsBinding,
          meta: { title: "多店铺绑定" }
        },
        {
          path: "subaccount-authorization",
          name: "subaccount-authorization",
          component: AdministratorsSetting.SubaccountAuthorization,
          meta: { title: "子账号授权" }
        }
      ]
    }
  ]
});
// 重复路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
