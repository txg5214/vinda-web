(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{SGa5:function(e,t,a){"use strict";var l=a("Dthn"),r=a("FfR7");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("rdAL"));a("n+RV");var u=r(a("JsaA"));a("jpPn");var n=r(a("Kxaf"));a("PnKX");var f=r(a("z6iY"));a("o6tx");var d=r(a("+qoS"));a("EKLF");var s=r(a("zUbA"));a("HWQN");var m=r(a("wBux")),i=r(a("Orjb")),c=r(a("oZVw")),p=r(a("mWdR")),g=l(a("0qZW")),h=m.default.Item;class v extends o.default.Component{constructor(){super(...arguments),this.handleSubmit=(e=>{e.preventDefault(),this.props.form.validateFields((e,t)=>{if(e)return console.log("Received values of form: ",t);g.login(t).then(e=>{this.props.form.resetFields(),e&&(c.default.save("token",e.token,{path:"/",maxAge:86400}),s.default.success(e.message),i.default.push("/admin/articles"))})})})}componentWillMount(){c.default.load("token")&&i.default.push("/admin/articles")}render(){var e=this.props.form.getFieldDecorator;return o.default.createElement(m.default,{onSubmit:this.handleSubmit,className:p.default["login-form"]},o.default.createElement(h,null,e("username",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]})(o.default.createElement(f.default,{prefix:o.default.createElement(d.default,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),o.default.createElement(h,null,e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]})(o.default.createElement(f.default,{prefix:o.default.createElement(d.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),o.default.createElement(h,null,e("remember",{valuePropName:"checked",initialValue:!0})(o.default.createElement(n.default,null,"\u8bb0\u4f4f\u6211")),o.default.createElement("a",{className:p.default["login-form-forgot"],href:""},"\u5fd8\u8bb0\u5bc6\u7801"),o.default.createElement(u.default,{type:"primary",htmlType:"submit",className:p.default["login-form-button"]},"\u767b\u5f55"),"Or ",o.default.createElement("a",{href:""},"\u6ce8 \u518c!")))}}var b=m.default.create()(v);t.default=b},mWdR:function(e,t,a){e.exports={normal:"normal___62f3N","login-form":"login-form___3RQdC","login-form-forgot":"login-form-forgot___PMMNF","login-form-button":"login-form-button___1wtcg"}}}]);