<template>
  <div>
    <div>
      <a-space>
        <a-button type="primary">
          查询1
        </a-button>
        <a-button @click="exportExcel">导出</a-button>
      </a-space>
    </div>
    <a-table rowKey="id"
             :columns="table.columns"
             :data-source="table.data"
             :pagination="false"
             @change="changeHandle">
    </a-table>
    <a-pagination show-quick-jumper
                  :pageSize="table.pageConfig.pageSize"
                  :default-current="table.pageConfig.pageNo"
                  :total="table.pageConfig.total"
                  show-size-changer
                  :page-size-options="['10','50','100','500']"
                  @change="changeHandle" />
  </div>
</template>

<script>
import { exportExcel } from '@/utils/xlsxUtils'
import { GetUserList } from '@/api/user'

const columns = [
  {
    title: '账号',
    dataIndex: 'user_account'
  },
  {
    title: '用户名',
    dataIndex: 'user_name'
  },
  {
    title: '录入时间',
    dataIndex: 'in_time'
  }
]

export default {
  name: 'UserList',
  data() {
    return {
      table: {
        pageConfig: { pageSize: 10, pageNo: 1, total: 50 },
        data: [],
        columns
      }
    }
  },
  async created() {
    console.log(this.$route)
    const rs = await GetUserList({
      pageNo: this.table.pageConfig.defaultCurrent,
      pageSize: this.table.pageConfig.pageSize
    })
    if (rs && rs.data) {
      this.table.data = rs.data.Result.Data
      this.table.pageConfig.total = rs.data.Result.totalCount
    }
  },
  methods: {
    async changeHandle(pageIndex) {
      const rs = await GetUserList({
        pageNo: pageIndex,
        pageSize: this.table.pageConfig.pageSize
      })
      if (rs.data) {
        this.table.data = rs.data.Result.Data
        this.table.pageConfig.total = rs.data.Result.totalCount
      }
    },
    async exportExcel() {
      var aoa = []
      var row = []
      this.table.columns.forEach(item => {
        row.push(item.title)
      })
      aoa.push(row)
      const rs = await GetUserList({
        pageNo: 1,
        pageSize: 10
      })
      if (rs.data) {
        rs.data.Result.Data.forEach(item => {
          var row = []
          this.table.columns.forEach(columnItem => {
            row.push(item[columnItem.dataIndex])
          })
          aoa.push(row)
        })
      }
      exportExcel(aoa, this.$route.meta.title)
    }
  }
}
</script>

<style  lang="less" scoped>
</style>
