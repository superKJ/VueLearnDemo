<template>
  <div id="IndexPage">
    <div class="index-left">
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <div v-if="item.last" class="hr"></div>
            <a :href="item.url">{{ item.name }}</a>
            <span v-if="item.hot" class="hot-tag">HOT</span>

            <div class="hr"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slideShow :slides="slides" :inv="invTime"></slideShow>
      <div class="index-board-list">
        <!--{'line-last' : index % 2 !== 0 表示当列表中元素的index是奇数时，附加组件class=‘line-last’-->
        <div class="index-board-item"
             v-for="(item, index) in boardList"
             :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner">
            <h2>{{ item.title }}</h2>

            <p>{{ item.description }}</p>

            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="es6">
  import slideShow from '../components/slideShow.vue'
  export default {
    name: 'IndexPage',
    created: function () {
      var _this = this;
      this.$http.get('http://rap.taobao.org/mockjsdata/29699/getList', {userId: 123}).then(function (data) {
        // 循环数组
        data.data.data.list.forEach(function (value, index) {
          // 向数组中添加元素
          console.log(index)
          _this.newsList[index].name = value.name
        });
      }, function (err) {
        console.log(err)
      })
    }, components: {
      slideShow: slideShow
    },
    methods: {},
    data()
    {
      return {
        invTime: 2000,
        slides: [
          {
            //图片写在<script>标签内通过js引入进来的要用require方式，写在HTML标签内就正常用相对路径写就可以了
            src: require('../assets/images/logo.png'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/images/logo.png'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/images/logo.png'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../assets/images/logo.png'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        newsList: [
          {
            name: '数据统计',
            url: 'http://starcraft.com',
            //其他item没有这个属性的默认为last:false
            last: true,
            hot: true
          },
          {
            name: '数据预测',
            url: 'http://warcraft.com'
          },
          {
            name: '流量分析',
            url: 'http://overwatch.com',
            hot: true
          },
          {
            name: '广告发布',
            url: 'http://hearstone.com',

          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ]
      }
    }
  }


</script>

<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .index-left {
    float: left;
    width: 30%;
    text-align: left;
    background-color: #cc0000
  }

  .index-right {
    float: left;
    width: 70%;
    height: auto;
    background-color: #0074D9;
  }

  .index-left-block {
    margin: 15px;
    background: #fff;
  }

  .index-left-block .hr {
    margin-bottom: 20px;
  }

  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }

  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }

  .index-left-block ul {
    padding: 10px 15px;
  }

  .index-left-block li {
    padding: 5px;
  }

  .index-board-list {
    overflow: hidden;
  }

  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }

  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }

  .line-last {
    margin-right: 0;
  }

  .index-board-button {
    margin-top: 20px;
  }

  .lastest-news {
    min-height: 512px;
  }

  .hot-tag {
    background: red;
    color: #fff;
  }

  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .index-board-car .index-board-item-inner {
    background: url(../assets/images/logo.png) no-repeat;
  }

  .index-board-loud .index-board-item-inner {
    background: url(../assets/images/logo.png) no-repeat;
  }

  .index-board-earth .index-board-item-inner {
    background: url(../assets/images/logo.png) no-repeat;
  }

  .index-board-hill .index-board-item-inner {
    background: url(../assets/images/logo.png) no-repeat;
  }
</style>
