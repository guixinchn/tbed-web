<template>
  <Layout style="background: #FFF;margin-bottom: 50px;">
    <Content :style="{margin: '15px 20px 0', minHeight: '500px'}">
      <Card style="margin-top: 80px;width:100%; margin:0 auto; box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 2px;"
            :bordered="false">
        <div style="width: 88%;max-width:450px;text-align: center;margin:  auto;">
          <img style="width: 100%;max-width:500px"
               src="data:image/png;base64,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"/>
        </div>
        <div style="max-width:600px;margin:  auto;line-height: 30px;">
          <div style="text-align: center;">
            <Badge dot :count="isshow">
              <Button type="dashed" @click="checkUpdate">Version {{ $store.state.version }}</Button>
            </Badge>
            <br/>
            <Divider/>
            <p style="font-size: 16px;">程序 / 介绍</p>
            <Divider type="vertical"/>
          </div>
          <div style="text-align: center;">
            <p style="font-size: 14px;"><span>授权产品:</span>&nbsp;
              <span style="line-height: 16px;min-width: 100px;">Hellohao图像托管-Tbed开源版</span>
            </p>
            <p style="font-size: 14px;"><span>Github开源:</span>&nbsp;
              <span style="line-height: 16px;min-width: 100px;"><a
                  href="https://github.com/Hello-hao/Tbed">github.com/Hello-hao/Tbed</a></span>
            </p>
            <p style="font-size: 14px;"><span>程序官网:</span>&nbsp;
              <a style="line-height: 16px;min-width: 100px;"
                 href="http://hellohao.cn">www.hellohao.cn</a>
            </p>
            <!--            <p style="font-size: 14px;"><span>开发者论坛:</span>&nbsp;-->
            <!--              <a style="line-height: 16px;min-width: 100px;"-->
            <!--                 href="http://bbs.hellohao.cn">bbs.hellohao.cn</a>-->
            <!--            </p>-->
            <p style="font-size: 14px;"><span>开发者交流群:</span>&nbsp;
              <span style="line-height: 16px;min-width: 100px;">864800972</span>
            </p>
            <Divider/>
            <p style="font-size: 16px;">Hellohao图像托管程序这是一个基于多家对象存储源
              JAVA语言编写SpringBoot框架开发的开源图像托管程序。</p>
            <p style="font-size: 16px;">
              程序主要使用领域：个人照片存储，团队共享图像，博客/商城等网站图片托管，图像批量云分享等。具备优秀的多用户图像上传功能和完善的图像查询管理逻辑，同时支持对接多家对象存储。</p>
            <p style="font-size: 16px;">如您已使用本程序，请遵循您所在地区的相关法律政策。</p>
            <Divider/>
            <p style="font-size: 14px;color: #3880f1;cursor: pointer;text-decoration:underline"
               @click="() => {isAgreementMsg=true}">《用户协议》</p>
            <p style="font-size: 14px;color: #5f5f5f">程序最终解释权归作者所有</p>
          </div>
        </div>
      </Card>
    </Content>
    <Footer class="layout-footer-center">{{ this.$store.state.metaInfo.webname }} &copy; Control Panel</Footer>

    <Modal v-model="isAgreementMsg" fullscreen title="《用户协议》" footer-hide :closable="false">
      <div>
        感谢您选择程序！<br/><br/>

        Hellohao图像托管程序（以下简称“程序”）是由hellohao个人开发者开发并制作（以下简称“hellohao”）向用户提供的服务器图像管理/托管的应用程序，又称为hellohao图床。在您开始使用程序之前，您应确保已阅读、充分理解并接受《程序服务协议》的全部内容，一旦您安装使用程序，即表示您同意遵循本协议之所有规定，该协议即时对您生效。<br/>

        <br/><b>一、程序使用协议</b><br/>

        关于授权<br/>

        （1）程序分为两个类别：免费版（开源版）和付费版（Core版），免费版无需操作特殊授权步骤，直接安装即可自动赋予个人使用授权。<br/>

        （2）程序的授权以域名授权获得授权KEY的形式存在，购买授权并获得授权KEY后即可安装使用。<br/>

        （3）hellohao本人有权依照官网（https://tbed.hellohao.cn/）公布的授权价格方案收费。hellohao拥有制订及调整资费的权利，资费调整前将在官网作出通知。具体资费以您购买授权时，订单显示的金额为准。<br/>

        （4）您应对您的授权KEY，只有您本人可以使用您的授权KEY，该授权KEY不可转让、不可赠与、不可继承。<br/>

        授权的购买、有效期和更换<br/>

        （1）您使用程序时，可以根据需要，在官网上购买相应的授权，具体价格以订单显示的价格为准，程序的收费政策可能随时变化，如出现降价或促销等情形，程序概不退款。<br/>

        （2）程序不认可通非官方支付平台或非hellohao本人之外的线上线下交易所产生的交易行为。<br/>

        （3）程序的授权期限是根据您购买的授权期限有效期为准。<br/>

        （4）“更换授权域名”是指您希望将已经在某个授权域名上已使用的授权KEY，变更给另一个域名使用的操作。此操作由您自行操作完成。成功更换授权后，原服务器的授权将会失效。<br/>

        程序的安装、更新和卸载<br/>

        （1）下载安装必须按照官网（https://tbed.hellohao.cn）提供的方式进行，通过其它途径安装产生的问题，hellohao概不负责。<br/>

        （2）您下载安装了程序，将获得hellohao授予的程序免费版使用授权。您也可以购买付费版的授权。<br/>

        （4）程序有新版本时，将在官网和程序后台页面上提示更新信息，hellohao将公布更新细节，您可以根据需要更新到新版本。您需要尽可能及时地更新到新版本，如果您长期不更新到新版本，导致使用造成的一切问题hellohao无需负责。<br/>

        （5）如果您不再需要使用程序，可以自行卸载程序。如果您购买了授权，已经支付的费用将不予退还。
        卸载之后不会再产生其他费用。如果您以后继续使用程序，可以重新安装。<br/>

        拓展插件/应用<br/>

        （1）除核心功能的应用外，其他所有的应用拓展功能都可以通过拓展插件安装；<br/>

        （2）部分拓展插件功能是需要付费后可使用，需要根据自己的实际业务需求另行付费使用的。<br/>

        <br/><b>二、您的权利和义务</b><br/>

        您有权利享受程序提供的服务，并有权利在接受程序提供的服务时获得相关的技术支持。<br/>

        您有权随时终止使用程序，但已交纳款项不得要求退还。<br/>

        您保证不会利用技术或其他手段破坏及扰乱程序及程序的其他客户的网站和服务。<br/>

        您应尊重程序及其他第三方的知识产权和其他合法权利。hellohao保留您侵犯程序的合法权益时终止向您提供服务、不退还账户余额、追究法律责任的权利。<br/>

        您保证您使用程序时将遵从国家、地方法律法规、行业惯例和社会公共道德，不会利用程序提供的服务进行存储、发布、传播如下信息和内容：<br/>

        违反国家法律法规政策的任何内容（信息）；<br/>

        违反国家规定的政治宣传或新闻信息；涉及国家秘密或安全的信息；<br/>

        封建迷信或淫秽、色情、下流的信息或教唆犯罪的信息；博彩有奖、赌博游戏；<br/>

        违反国家民族和宗教政策的信息；妨碍互联网运行安全的信息；<br/>

        侵害他人合法权益的信息或其他有损于社会秩序、社会治安、公共道德的信息或内容。<br/>

        您同时承诺不得为他人发布上述不符合国家规定或本协议约定的信息内容提供任何便利，包括但不限于设置URL、BANNER链接等。<br/>

        您承认hellohao有权在您违反上述约定时有权终止向您提供程序授权并不予退还任何款项，因您上述行为给hellohao造成损失的，您应予以赔偿。<br/>

        <br/><b>三、hellohao权利和义务</b><br/>

        hellohao应根据您选择的服务以及交纳款项的情况向您提供相应的程序服务。<br/>

        程序安装在您的服务器上，我们不会窃取用户数据，不会留有后门。除了必要的授权检测外，我们只会统计应用的使用次数用于改善产品，我们不会将收集的数据公开或作为其他商业用途。<br/>

        当程序出现问题时，hellohao负责修复程序本身。<br/>

        对于您使用程序，产生的其他费用，例如：服务器费用，带宽流量费用等，需由您自己承担，hellohao不负责支付。<br/>

        程序承诺对您的资料采取对外保密措施，不向第三方披露您资料，不授权第三方使用您资料，除非：<br/>

        （1）依据法律法规的规定应当提供；<br/>

        （2）行政、司法等职权部门要求程序提供；<br/>

        （3）您同意程序向第三方提供；<br/>

        （4）程序解决举报事件、提起诉讼而提交；<br/>

        （5）程序为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交。<br/>

        （6）程序有权使用您的资料和信息，用于发送通知邮件、短信等运营行为。<br/>

        （7）程序有权利对您进行审查并决定是否接受您成为程序的用户。<br/>

        （8）程序保留在您违反国家、地方法律法规规定或违反本协议的情况下终止为您提供服务的权利。<br/>

        <br/><b>四、隐私及其他个人信息的保护</b><br/>

        一旦您同意本协议或使用本服务，您即同意hellohao按照以下协议来使用和披露您的个人信息。<br/>


        用户信息<br/>

        您购买时应向hellohao提供真实电子邮件地址和您本人的手机号码。为有针对性地向您提供服务，您了解并同意hellohao将通过您的电子邮件地址或手机号码通知您这些信息。<br/>

        外部链接<br/>

        本网站含有到其他网站的链接，但hellohao对其他网站的隐私保护措施不负任何责任。hellohao可能在任何需要的时候增加合作伙伴或共用品牌的网站。<br/>

        <br/><b>五、系统中断或故障</b><br/>

        系统因下列状况无法正常运作，使您无法使用各项服务时，hellohao不承担损害赔偿责任，该状况包括但不限于：<br/>

        hellohao在系统停机维护期间。<br/>

        电信设备出现故障不能进行数据传输的。<br/>

        由于不可抗力，包括但不限于台风、地震、海啸、洪水、停电、战争、恐怖袭击等，造成Hellohao相关服务系统障碍不能执行业务的。<br/>

        由于黑客攻击、电信部门技术调整或故障、网站升级、银行方面的问题等原因而造成的服务中断或者延迟。<br/>

        <br/><b>六、商标、知识产权的保护</b><br/>

        尊重知识产权是您应尽的义务，如有违反，您应承担损害赔偿责任。详情请查看<a
          href="https://choosealicense.com/licenses/agpl-3.0/#" target="_blank"
          style="text-decoration: underline;">《Hellohao图像托管程序开源许可协议》</a><br/>

        请您再次保证已经完全阅读并理解了上述注册协议并接受上述所有协议的约束。<br/><br/>
        <div slot="footer">
          <Button type="error" style="position: fixed; bottom: 1px;" size="large" long
                  @click="() => {isAgreementMsg=false}">我同意
          </Button>
        </div>
        <br/>
      </div>
    </Modal>

  </Layout>
</template>
<script>
import {request} from "@/network/request";

export default {
  name: "about",
  data() {
    return {
      isshow: 0,
      isAgreementMsg: false,
      versionData: null,
    }
  },
  mounted() {
    this.checkVersion();
  },
  methods: {
    checkVersion() {
      if (this.$store.state.RoleLevel != 'admin') {
        return false;
      }
      request(
          "/admin/root/sysVersion",
          {dates: this.$store.state.version.toFixed(2)}).then(res => {
        if (res.status == 200) {
          var json = res.data;
          if (json.code == '110200' || json.code == '110300') {
            if (json.code == '110200') {
              this.versionData = json.data;
              this.isshow = 1;
            } else {
              this.isshow = 0;
            }
            this.$store.commit("setSysVersion", json.data);
          } else {
            this.isshow = 0;
          }

        } else {
          this.$Message.error("请求时出现错误");
        }
      }).catch(err => {
        console.log(err);
        this.$Message.error('服务器请求错误');
      })
    },
    checkUpdate() {
      if (this.versionData == null || this.$store.state.RoleLevel != 'admin') {
        this.$Message.info('暂无新版本可以更新');
        return;
      }
      this.$Modal.info({
        title: '新版本提示',
        content: this.versionData.versionMsg,
        onOk: () => {
          window.open('https://github.com/Hello-hao/Tbed/releases', '_blank');
        },
        onCancel: () => {
        }
      });
    },

  },
  components: {}
}
</script>
<style>

.layout-footer-center {
  text-align: center;
}

.ivu-input-group .ivu-input, .ivu-input-group .ivu-input-inner-container {
  width: 100%;
  float: left;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
  height: 42px;
}


</style>
