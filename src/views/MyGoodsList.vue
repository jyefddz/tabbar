<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputShow"
            v-focus
            @blur="scope.row.inputShow = false"
            v-model="scope.row.inputValue"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            style="margin-left: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td style="display: flex">
          <button style="margin-right: 8px" class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
          <button class="btn btn-success btn-sm" v-premission="'lalal'">
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
      show: false,
      msg: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/api/goods",
      }).then((res) => {
        res.data.data.forEach((ele) => {
          ele.inputShow = false;
        });
        console.log(res);
        this.list = res.data.data;
      });
    },
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(obj) {
      console.log(obj.inputValue, "===", obj.tags);
      if (obj.inputValue.trim() == "") {
        return alert("Enter inputValue");
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = "";
    },
  },
};
</script>

<style>
</style>
