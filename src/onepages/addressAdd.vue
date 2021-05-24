<template>
  <div>
    <v-navgo></v-navgo>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import vNavgo from "../components/vNavgo";
import { areaList } from "@vant/area-data";
export default {
  components: {
    vNavgo,
  },
  data() {
    return {
      areaList:areaList,
      searchResult: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped >
</style>
