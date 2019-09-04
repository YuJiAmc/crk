const MultipleShopsBinding = () =>
  import(
    /* webpackChunkName: "administrators-setting" */ "./MultipleShopsBinding.vue"
  );
const SubaccountAuthorization = () =>
  import(
    /* webpackChunkName: "administrators-setting" */ "./SubaccountAuthorization.vue"
  );

export default {
  MultipleShopsBinding,
  SubaccountAuthorization
};
