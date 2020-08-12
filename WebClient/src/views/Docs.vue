<template>
    <div class="home">
        <div class="jumbotron bg-dark text-white mb-0">
            <div class="container main-body">
                <h1 class="display-3 text-light">Cool Push</h1>
                <div class="lead mb-3">QQ消息推送服务.</div>
                <div class="mt-4">
                    <router-link :to="{name:'Home'}"
                                 class="btn btn-primary btn-lg my-2 mr-2">
                        <span>主页</span>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container py-5 docs">
            <div class="row">
                <b-col sm="12" md="8" lg="8" xl="8" offset-md="2" offset-lg="2" offset-xl="2">
                    <h3 class="text-primary">功能</h3>
                    <p>QQ消息推送服务: <code>添加推送机器人QQ号为好友</code>,调用接口即可通过推送机器人将指定消息体推送到你的QQ上</p>

                    <h3 class="text-primary">创作缘由</h3>
                    <p>辅助 <a href="https://func.xuthus.cc" target="_blank">func.xuthus.cc</a> 完成消息推送</p>

                    <h3 class="text-primary">使用步骤</h3>
                    <p>通过 Github 授权登录网站</p>
                    <p>自动获得 <code>Skey</code></p>
                    <p>绑定接收消息的QQ账号,并指派推送机器人</p>
                    <p>绑定的QQ账号添加机器人为好友</p>
                    <p>调用接口发送请求</p>

                    <h3 class="text-primary">配合valine进行推送</h3>
                    <div class="code">
<pre>
//拷贝如下代码，将其放置于加载valine组件的layout中

//检测推送 Skey替换
var pushLink = "https://push.xuthus.cc/send/Skey";
//推送的网站名称
var siteName = "";

var valineButton = document.getElementsByClassName("vsubmit vbtn")[0];
var title = siteName + "上又有新评论啦~!\n";

function send_valine() {
//获取元素信息
var pagename = document.title;
var pageurl = document.URL;
var pushtime = new Date();
var vnick = document.getElementsByClassName("vnick vinput")[0].value;
var vmail = document.getElementsByClassName("vmail vinput")[0].value;
var vlink = document.getElementsByClassName("vlink vinput")[0].value;
var veditor = document.getElementsByClassName("veditor vinput")[0].value;
content =
    title +
    "昵称：" + vnick +
    "\n邮箱：" + vmail +
    "\n网站地址：" + vlink +
    "\n文章标题：" + pagename +
    "\n评论内容：" + veditor +
    "\n文章链接：" + pageurl +
    "\n评论时间" + pushtime.toLocaleString() + "\n";
var httpRequest = new XMLHttpRequest(); //第一步：创建需要的对象
httpRequest.open("POST", pushLink, true); //第二步：打开连接
httpRequest.setRequestHeader(
    "Content-type",
    "application/json"
); //设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
httpRequest.send(content); //发送请求 将情头体写在send中
}

valineButton.onclick = send_valine;//点击事件
</pre>
                    </div>
                    <h3 class="text-primary">推送格式化数据</h3>
                    <div class="code">
<pre>
//js 发起请求
var httpRequest = new XMLHttpRequest(); //第一步：创建请求对象
httpRequest.open("POST", "https://push.xuthus.cc/send/Skey", true); //第二步：打开连接
httpRequest.setRequestHeader(
  "Content-type",
  "application/json"
); //设置请求头
httpRequest.send("标题 \n 内容:你好我是正文"); //发送请求

//python 发起请求
import requests
url = "https://push.xuthus.cc/send/Skey"
data = "标题 \n 内容:你好我是正文"
res = requests.post(url=url,data=data)

//php 发起请求
$url="https://push.xuthus.cc/send/Skey";
$content = "标题 \n 内容:你好我是正文";
$length = strlen($content);
$options = array(
'http' => array(
'method' => 'POST',
'header' =>
"Content-type: application/json; charset=utf-8" .
"Content-length: $length",
'content' => $content
)
);
echo file_get_contents($url, false, stream_context_create($options));

//Golang 发起请求
var content = "标题 \n 内容:你好我是正文"
client := &http.Client{}
req, _ := http.NewRequest("POST", "https://push.xuthus.cc/send/Skey", strings.NewReader(content))
_,_ = client.Do(req)

//接收到的数据
标题
内容:你好我是正文

//说明
使用 \n 进行换行
</pre>
                    </div>

                    <h3 class="text-primary">使用限制</h3>
                    <p>当前使用单日限制1万次</p>

                    <h3 class="text-primary">推送涉违规?</h3>
                    <p>系统内置敏感词过滤库(可能误伤),推送被查出敏感词次数超过规定阈值,将封停账号,使用且珍惜,不要推送违规内容</p>

                    <h3 class="text-primary">同类作品</h3>
                    <p><a href="https://sc.ftqq.com/" target="_blank">Server酱</a> | <a href="https://qmsg.zendee.cn/"
                                                                                       target="_blank">Qmsg酱</a></p>

                    <h3 class="text-primary">反馈</h3>
                    <p><code
                    >交流QQ群:<a
                            target="_blank"
                            href="//shang.qq.com/wpa/qunwpa?idkey=2c22cb324dc36e260043185618cbe8763ed63dd5a985ee5e181e20ba2390e78a"
                    >824187964</a
                    ></code
                    ></p>
                    <h3 class="text-primary">费用</h3>
                    <p>免费使用,暂不接受打赏赞助</p>

                    <h3 class="text-primary">免责条款</h3>
                    <p>当您使用本网站服务时</p>
                    <ul>
                        <li><code>禁止</code>推送传播任何非法的、含有侮辱性的、具威胁性的任何法律禁止的信息。</li>
                        <li>使用本站服务即默认同意本网站平台机器人账号有通过平台API功能被动<code>向你发起消息推送的权利</code> 。</li>
                        <li>使用本站服务即默认同意本网站保留有对你在本网站账号的管理权利。</li>
                        <li>平台不会主动向你发起消息推送、你的一切活动均为主观操作、与平台无关。</li>
                        <li>包含敏感信息的推送将被上报采集、供取证使用。</li>
                    </ul>
                </b-col>
            </div>
        </div>

        <footer class="footer mb-4 mt-4 text-center">
            <div class="footer-top">
                © {{fullYear}} <i class="fas fa-heart"></i>
                <a href="https://xuthus.cc" target="_blank">&nbsp;&nbsp;xuthus</a>
            </div>

            <div class="footer-bottom">
                CDN 由
                <a href="https://www.upyun.com/products/cdn" target="_blank">
                    又拍云
                </a>
                赞助
            </div>
        </footer>

    </div>
</template>

<script>
    export default {
        name: 'Docs',
        data() {
            return {}
        }
    }
</script>

<style>
    .bg-dark {
        background-color: #0b1a31 !important;
    }

    .btn {
        border-radius: 0.3rem !important;
    }

    .main-body {
        text-align: center;
    }

    .docs p {
        font-size: 1.2rem;
    }

    .code {
        background-color: #f5f5f5;
        font-family: Courier New,serif !important;
        font-size: 12px !important;
        border: 1px solid #ccc;
        padding: 5px;
        overflow: auto;
        margin: 5px 0;
        color: #000;
    }

    footer .fa-heart {
        padding-left: 4px;
        padding-right: 4px;
        color: red;
    }
</style>
