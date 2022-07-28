"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6206],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(r),h=o,v=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6256:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const i={id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,a={unversionedId:"component/transport/http",id:"component/transport/http",title:"HTTP",description:"transporter/http \u4e2d\u57fa\u4e8e gorilla/mux HTTP\u8def\u7531\u6846\u67b6\u5b9e\u73b0\u4e86Transporter\uff0c\u7528\u4ee5\u6ce8\u518c http \u5230 kratos.Server() \u4e2d\u3002",source:"@site/docs/component/transport/02-http.md",sourceDirName:"component/transport",slug:"/component/transport/http",permalink:"/docs/component/transport/http",draft:!1,editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/docs/component/transport/02-http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"http",title:"HTTP",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"\u6982\u89c8",permalink:"/docs/component/transport/overview"},next:{title:"gRPC",permalink:"/docs/component/transport/grpc"}},d={},s=[{value:"Server",id:"server",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"<code>Network(network string) ServerOption</code>",id:"networknetwork-string-serveroption",level:4},{value:"<code>Address(addr string) ServerOption</code>",id:"addressaddr-string-serveroption",level:4},{value:"<code>Timeout(timeout time.Duration) ServerOption</code>",id:"timeouttimeout-timeduration-serveroption",level:4},{value:"<code>Logger(logger log.Logger) ServerOption</code>",id:"loggerlogger-loglogger-serveroption",level:4},{value:"<code>Middleware(m ...middleware.Middleware) ServerOption</code>",id:"middlewarem-middlewaremiddleware-serveroption",level:4},{value:"<code>Filter(filters ...FilterFunc) ServerOption</code>",id:"filterfilters-filterfunc-serveroption",level:4},{value:"<code>RequestDecoder(dec DecodeRequestFunc) ServerOption</code>",id:"requestdecoderdec-decoderequestfunc-serveroption",level:4},{value:"<code>ResponseEncoder(en EncodeResponseFunc) ServerOption</code>",id:"responseencoderen-encoderesponsefunc-serveroption",level:4},{value:"<code>ErrorEncoder(en EncodeErrorFunc) ServerOption</code>",id:"errorencoderen-encodeerrorfunc-serveroption",level:4},{value:"<code>TLSConfig(c *tls.Config) ServerOption</code>",id:"tlsconfigc-tlsconfig-serveroption",level:4},{value:"<code>StrictSlash(strictSlash bool) ServerOption</code>",id:"strictslashstrictslash-bool-serveroption",level:4},{value:"<code>Listener(lis net.Listener) ServerOption</code>",id:"listenerlis-netlistener-serveroption",level:4},{value:"\u542f\u52a8 Server",id:"\u542f\u52a8-server",level:3},{value:"<code>NewServer(opts ...ServerOption) *Server</code>",id:"newserveropts-serveroption-server",level:4},{value:"HTTP server \u4e2d\u4f7f\u7528 kratos middleware",id:"http-server-\u4e2d\u4f7f\u7528-kratos-middleware",level:4},{value:"middleware \u4e2d\u5904\u7406 http \u8bf7\u6c42",id:"middleware-\u4e2d\u5904\u7406-http-\u8bf7\u6c42",level:4},{value:"Server Router",id:"server-router",level:3},{value:"<code>func (s *Server) Route(prefix string, filters ...FilterFunc) *Router</code>",id:"func-s-server-routeprefix-string-filters-filterfunc-router",level:4},{value:"<code>func (s *Server) Handle(path string, h http.Handler)</code>",id:"func-s-server-handlepath-string-h-httphandler",level:4},{value:"<code>func (s *Server) HandlePrefix(prefix string, h http.Handler)</code>",id:"func-s-server-handleprefixprefix-string-h-httphandler",level:4},{value:"<code>func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)</code>",id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest",level:4},{value:"Client",id:"client",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e-1",level:3},{value:"<code>WithTransport(trans http.RoundTripper) ClientOption</code>",id:"withtransporttrans-httproundtripper-clientoption",level:4},{value:"<code>WithTimeout(d time.Duration) ClientOption</code>",id:"withtimeoutd-timeduration-clientoption",level:4},{value:"<code>WithUserAgent(ua string) ClientOption</code>",id:"withuseragentua-string-clientoption",level:4},{value:"<code>WithMiddleware(m ...middleware.Middleware) ClientOption</code>",id:"withmiddlewarem-middlewaremiddleware-clientoption",level:4},{value:"<code>WithEndpoint(endpoint string) ClientOption</code>",id:"withendpointendpoint-string-clientoption",level:4},{value:"<code>WithDiscovery(d registry.Discovery) ClientOption</code>",id:"withdiscoveryd-registrydiscovery-clientoption",level:4},{value:"<code>WithRequestEncoder(encoder EncodeRequestFunc) ClientOption</code>",id:"withrequestencoderencoder-encoderequestfunc-clientoption",level:4},{value:"<code>WithResponseDecoder(decoder DecodeResponseFunc) ClientOption</code>",id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption",level:4},{value:"<code>WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption</code>",id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption",level:4},{value:"<code>WithBalancer(b balancer.Balancer) ClientOption</code>",id:"withbalancerb-balancerbalancer-clientoption",level:4},{value:"<code>WithBlock() ClientOption</code>",id:"withblock-clientoption",level:4},{value:"<code>WithTLSConfig(c *tls.Config) ClientOption</code>",id:"withtlsconfigc-tlsconfig-clientoption",level:4},{value:"Client\u4f7f\u7528\u65b9\u5f0f",id:"client\u4f7f\u7528\u65b9\u5f0f",level:3},{value:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5",id:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5",level:4},{value:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6",level:4},{value:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0",id:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0",level:4}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"transporter/http \u4e2d\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gorilla/mux"},"gorilla/mux")," HTTP\u8def\u7531\u6846\u67b6\u5b9e\u73b0\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Transporter"),"\uff0c\u7528\u4ee5\u6ce8\u518c http \u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"kratos.Server()")," \u4e2d\u3002"),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h4",{id:"networknetwork-string-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Network(network string) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684 network \u534f\u8bae\uff0c\u5982 tcp"),(0,o.kt)("h4",{id:"addressaddr-string-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Address(addr string) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u76d1\u542c\u7684\u5730\u5740"),(0,o.kt)("h4",{id:"timeouttimeout-timeduration-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Timeout(timeout time.Duration) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684\u8d85\u65f6\u8bbe\u7f6e"),(0,o.kt)("h4",{id:"loggerlogger-loglogger-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Logger(logger log.Logger) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u4f7f\u7528\u65e5\u5fd7"),(0,o.kt)("h4",{id:"middlewarem-middlewaremiddleware-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Middleware(m ...middleware.Middleware) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684 kratos Service\u4e2d\u95f4\u4ef6"),(0,o.kt)("h4",{id:"filterfilters-filterfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Filter(filters ...FilterFunc) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u670d\u52a1\u7aef\u7684 kratos \u5168\u5c40HTTP\u539f\u751fFitler\uff0c\u6b64Filter\u6267\u884c\u987a\u5e8f\u5728Service\u4e2d\u95f4\u4ef6\u4e4b\u524d"),(0,o.kt)("h4",{id:"requestdecoderdec-decoderequestfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"RequestDecoder(dec DecodeRequestFunc) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6ekratos\u670d\u52a1\u7aef\u7684 HTTP Request Decode\u65b9\u6cd5\uff0c\u7528\u6765\u5c06Request Body\u89e3\u6790\u81f3\u7528\u6237\u5b9a\u4e49\u7684pb\u7ed3\u6784\u4f53\u4e2d\n\u6211\u4eec\u770b\u4e0bkratos\u4e2d\u9ed8\u8ba4\u7684RequestDecoder\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultRequestDecoder(r *http.Request, v interface{}) error {\n    // \u4eceRequest Header\u7684Content-Type\u4e2d\u63d0\u53d6\u51fa\u5bf9\u5e94\u7684\u89e3\u7801\u5668\n    codec, ok := CodecForRequest(r, "Content-Type")\n    // \u5982\u679c\u627e\u4e0d\u5230\u5bf9\u5e94\u7684\u89e3\u7801\u5668\u6b64\u65f6\u4f1a\u62a5\u9519\n    if !ok {\n        return errors.BadRequest("CODEC", r.Header.Get("Content-Type"))\n    }\n    data, err := ioutil.ReadAll(r.Body)\n    if err != nil {\n        return errors.BadRequest("CODEC", err.Error())\n    }\n    if err = codec.Unmarshal(data, v); err != nil {\n        return errors.BadRequest("CODEC", err.Error())\n    }\n    return nil\n}\n')),(0,o.kt)("p",null,"\u90a3\u4e48\u5982\u679c\u6211\u4eec\u60f3\u8981\u6269\u5c55\u6216\u8005\u66ff\u6362Content-Type\u5bf9\u5e94\u7684\u89e3\u6790\u5b9e\u73b0\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7http.RequestDecoder()\u6765\u66ff\u6362kratos\u9ed8\u8ba4\u7684RequestDecoder\uff0c\n\u6216\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728encoding\u4e2d\u6ce8\u518c\u6216\u8986\u76d6\u4e00\u4e2aContent-Type\u5bf9\u5e94\u7684codec\u6765\u8fdb\u884c\u6269\u5c55"),(0,o.kt)("h4",{id:"responseencoderen-encoderesponsefunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"ResponseEncoder(en EncodeResponseFunc) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6ekratos\u670d\u52a1\u7aef\u7684 HTTP Response Encode\u65b9\u6cd5\uff0c\u7528\u6765\u5c06\u7528\u6237pb\u5b9a\u4e49\u91cc\u7684reply\u7ed3\u6784\u4f53\u5e8f\u5217\u5316\u540e\u5199\u5165Response Body\u4e2d\n\u6211\u4eec\u770b\u4e0bkratos\u4e2d\u9ed8\u8ba4\u7684ResponseEncoder\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultResponseEncoder(w http.ResponseWriter, r *http.Request, v interface{}) error {\n    // \u901a\u8fc7Request Header\u7684Accept\u4e2d\u63d0\u53d6\u51fa\u5bf9\u5e94\u7684\u7f16\u7801\u5668\n    // \u5982\u679c\u627e\u4e0d\u5230\u5219\u5ffd\u7565\u62a5\u9519\uff0c\u5e76\u4f7f\u7528\u9ed8\u8ba4json\u7f16\u7801\u5668\n    codec, _ := CodecForRequest(r, "Accept")\n    data, err := codec.Marshal(v)\n    if err != nil {\n        return err\n    }\n    // \u5728Response Header\u4e2d\u5199\u5165\u7f16\u7801\u5668\u7684scheme\n    w.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\n    w.Write(data)\n    return nil\n}\n')),(0,o.kt)("p",null,"\u90a3\u4e48\u5982\u679c\u6211\u4eec\u60f3\u8981\u6269\u5c55\u6216\u8005\u66ff\u6362Accept\u5bf9\u5e94\u7684\u5e8f\u5217\u5316\u5b9e\u73b0\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7http.ResponseEncoder()\u6765\u66ff\u6362kratos\u9ed8\u8ba4\u7684ResponseEncoder\uff0c\n\u6216\u8005\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728encoding\u4e2d\u6ce8\u518c\u6216\u8986\u76d6\u4e00\u4e2aAccept\u5bf9\u5e94\u7684codec\u6765\u8fdb\u884c\u6269\u5c55"),(0,o.kt)("h4",{id:"errorencoderen-encodeerrorfunc-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"ErrorEncoder(en EncodeErrorFunc) ServerOption")),(0,o.kt)("p",null,"\u914d\u7f6ekratos\u670d\u52a1\u7aef\u7684 HTTP Error Encode\u65b9\u6cd5\uff0c\u7528\u6765\u5c06\u4e1a\u52a1\u629b\u51fa\u7684error\u5e8f\u5217\u5316\u540e\u5199\u5165Response Body\u4e2d\uff0c\u5e76\u8bbe\u7f6eHTTP Status Code\n\u6211\u4eec\u770b\u4e0bkratos\u4e2d\u9ed8\u8ba4\u7684ErrorEncoder\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func DefaultErrorEncoder(w http.ResponseWriter, r *http.Request, err error) {\n    // \u62ff\u5230error\u5e76\u8f6c\u6362\u6210kratos Error\u5b9e\u4f53\n    se := errors.FromError(err)\n    // \u901a\u8fc7Request Header\u7684Accept\u4e2d\u63d0\u53d6\u51fa\u5bf9\u5e94\u7684\u7f16\u7801\u5668\n    codec, _ := CodecForRequest(r, "Accept")\n    body, err := codec.Marshal(se)\n    if err != nil {\n        w.WriteHeader(http.StatusInternalServerError)\n        return\n    }\n    w.Header().Set("Content-Type", httputil.ContentType(codec.Name()))\n    // \u8bbe\u7f6eHTTP Status Code\n    w.WriteHeader(int(se.Code))\n    w.Write(body)\n}\n')),(0,o.kt)("h4",{id:"tlsconfigc-tlsconfig-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"TLSConfig(c *tls.Config) ServerOption")),(0,o.kt)("p",null,"\u4e3a kratos \u670d\u52a1\u7aef\u6dfb\u52a0 tls \u914d\u7f6e\u7528\u4e8e\u52a0\u5bc6 http \u901a\u4fe1\n\u6211\u4eec\u770b\u4e0b kratos \u4e2d\u662f\u5982\u4f55\u914d\u7f6e\u7684:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TLSConfig with TLS config.\nfunc TLSConfig(c *tls.Config) ServerOption {\n    return func(o *Server) {\n        o.tlsConf = c\n    }\n}\n\n")),(0,o.kt)("h4",{id:"strictslashstrictslash-bool-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"StrictSlash(strictSlash bool) ServerOption")),(0,o.kt)("p",null,"\u4e3a kratos \u670d\u52a1\u7aef\u6dfb\u52a0 StrictSlash \u914d\u7f6e\uff0c\u7528\u4e8e\u91cd\u5b9a\u5411\u8def\u7531\n\u6211\u4eec\u770b\u4e0b kratos \u4e2d\u662f\u5982\u4f55\u914d\u7f6e\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// StrictSlash is with mux\'s StrictSlash\n// If true, when the path pattern is "/path/", accessing "/path" will\n// redirect to the former and vice versa.\nfunc StrictSlash(strictSlash bool) ServerOption {\n    return func(o *Server) {\n        o.strictSlash = strictSlash\n    }\n}\n')),(0,o.kt)("h4",{id:"listenerlis-netlistener-serveroption"},(0,o.kt)("inlineCode",{parentName:"h4"},"Listener(lis net.Listener) ServerOption")),(0,o.kt)("p",null,"\u4e3a kratos \u670d\u52a1\u7aef\u6dfb\u52a0 Listener \u63a5\u53e3\u7528\u4e8e\u9762\u5411\u6d41\u534f\u8bae\u7684\u4f20\u8f93\n\u6211\u4eec\u770b\u4e0b kratos \u4e2d\u662f\u5982\u4f55\u914d\u7f6e\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// Listener with server lis\nfunc Listener(lis net.Listener) ServerOption {\n    return func(s *Server) {\n        s.lis = lis\n    }\n}\n")),(0,o.kt)("h3",{id:"\u542f\u52a8-server"},"\u542f\u52a8 Server"),(0,o.kt)("h4",{id:"newserveropts-serveroption-server"},(0,o.kt)("inlineCode",{parentName:"h4"},"NewServer(opts ...ServerOption) *Server")),(0,o.kt)("p",null,"\u4f20\u5165opts\u914d\u7f6e\u5e76\u542f\u52a8HTTP Server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer()\napp := kratos.New(\n  kratos.Name("kratos"),\n  kratos.Version("v1.0.0"),\n  kratos.Server(hs),\n)\n')),(0,o.kt)("h4",{id:"http-server-\u4e2d\u4f7f\u7528-kratos-middleware"},"HTTP server \u4e2d\u4f7f\u7528 kratos middleware"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'hs := http.NewServer(\n  http.Address(":8000"),\n  http.Middleware(\n    logging.Server(),\n  ),\n)\n')),(0,o.kt)("h4",{id:"middleware-\u4e2d\u5904\u7406-http-\u8bf7\u6c42"},"middleware \u4e2d\u5904\u7406 http \u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"if tr, ok := transport.FromServerContext(ctx); ok {\n  kind = tr.Kind().String()\n  operation = tr.Operation()\n  // \u65ad\u8a00\u6210HTTP\u7684Transport\u53ef\u4ee5\u62ff\u5230\u7279\u6b8a\u4fe1\u606f\n  if ht, ok := tr.(*http.Transport); ok {\n    fmt.Println(ht.Request())\n  }\n}\n")),(0,o.kt)("h3",{id:"server-router"},"Server Router"),(0,o.kt)("h4",{id:"func-s-server-routeprefix-string-filters-filterfunc-router"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Route(prefix string, filters ...FilterFunc) *Router")),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684HTTP Server Router\uff0c\u540c\u65f6\u53ef\u4ee5\u4f20\u9012kratos\u7684HTTP Filter\u62e6\u622a\u5668\n\u6211\u4eec\u770b\u4e0b\u7528\u6cd5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'r := s.Route("/v1")\nr.GET("/helloworld/{name}", _Greeter_SayHello0_HTTP_Handler(srv))\n')),(0,o.kt)("h4",{id:"func-s-server-handlepath-string-h-httphandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) Handle(path string, h http.Handler)")),(0,o.kt)("p",null,"\u5c06path\u6dfb\u52a0\u5230\u8def\u7531\u4e2d\uff0c\u5e76\u4f7f\u7528\u6807\u51c6\u7684HTTP Handler\u6765\u5904\u7406"),(0,o.kt)("h4",{id:"func-s-server-handleprefixprefix-string-h-httphandler"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) HandlePrefix(prefix string, h http.Handler)")),(0,o.kt)("p",null,"\u524d\u7f00\u5339\u914d\u7684\u65b9\u5f0f\u5c06prefix\u6dfb\u52a0\u5230\u8def\u7531\u4e2d\uff0c\u5e76\u4f7f\u7528\u6807\u51c6\u7684HTTP Handler\u6765\u5904\u7406"),(0,o.kt)("h4",{id:"func-s-server-servehttpres-httpresponsewriter-req-httprequest"},(0,o.kt)("inlineCode",{parentName:"h4"},"func (s *Server) ServeHTTP(res http.ResponseWriter, req *http.Request)")),(0,o.kt)("p",null,"\u5b9e\u73b0\u4e86\u6807\u51c6\u5e93\u7684HTTP Handler\u63a5\u53e3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u8def\u7531\u4f7f\u7528\u65b9\u6cd5\u53c2\u8003: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/examples/tree/main/http/middlewares"},"https://github.com/go-kratos/examples/tree/main/http/middlewares"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728Kratos HTTP\u4e2d\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gin-gonic/gin"},"gin"),"\u6846\u67b6: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"},"https://github.com/go-kratos/kratos/blob/main/examples/http/gin/main.go"))),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("h3",{id:"\u914d\u7f6e-1"},"\u914d\u7f6e"),(0,o.kt)("h4",{id:"withtransporttrans-httproundtripper-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTransport(trans http.RoundTripper) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684HTTP RoundTripper"),(0,o.kt)("h4",{id:"withtimeoutd-timeduration-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTimeout(d time.Duration) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c\u6709\u94fe\u8def\u8d85\u65f6\u4f18\u5148\u4f7f\u7528\u94fe\u8def\u8d85\u65f6\u65f6\u95f4"),(0,o.kt)("h4",{id:"withuseragentua-string-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithUserAgent(ua string) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684\u9ed8\u8ba4User-Agent"),(0,o.kt)("h4",{id:"withmiddlewarem-middlewaremiddleware-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithMiddleware(m ...middleware.Middleware) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684 kratos client\u4e2d\u95f4\u4ef6"),(0,o.kt)("h4",{id:"withendpointendpoint-string-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithEndpoint(endpoint string) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u5bf9\u7aef\u8fde\u63a5\u5730\u5740\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u5219\u4e3aip:port,\u5982\u679c\u4f7f\u7528\u670d\u52a1\u53d1\u73b0\u5219\u683c\u5f0f\u4e3adiscovery://\\<authority",">","/\\<serviceName",">",",\u8fd9\u91cc\\<authority",">","\u53ef\u4ee5\u9ed8\u8ba4\u586b\u7a7a"),(0,o.kt)("h4",{id:"withdiscoveryd-registrydiscovery-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithDiscovery(d registry.Discovery) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u670d\u52a1\u53d1\u73b0"),(0,o.kt)("h4",{id:"withrequestencoderencoder-encoderequestfunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithRequestEncoder(encoder EncodeRequestFunc) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684 HTTP Request Encode\u65b9\u6cd5\uff0c\u7528\u6765\u5c06\u6237\u5b9a\u4e49\u7684pb\u7ed3\u6784\u4f53\u4e2d\u5e8f\u5217\u5316\u81f3Request Body\n\u6211\u4eec\u770b\u4e0b\u9ed8\u8ba4\u7684encoder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultRequestEncoder(ctx context.Context, contentType string, in interface{}) ([]byte, error) {\n    // \u901a\u8fc7\u5916\u90e8\u914d\u7f6e\u7684contentType\u83b7\u53d6encoder\u7c7b\u578b\n    name := httputil.ContentSubtype(contentType)\n    // \u62ff\u5230\u5b9e\u9645\u7684encoder\n    body, err := encoding.GetCodec(name).Marshal(in)\n    if err != nil {\n        return nil, err\n    }\n    return body, err\n}\n")),(0,o.kt)("h4",{id:"withresponsedecoderdecoder-decoderesponsefunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithResponseDecoder(decoder DecodeResponseFunc) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684 HTTP Response Decode\u65b9\u6cd5\uff0c\u7528\u6765\u5c06Response Body\u89e3\u6790\u81f3\u7528\u6237\u5b9a\u4e49\u7684pb\u7ed3\u6784\u4f53\u4e2d\n\u6211\u4eec\u770b\u4e0bkratos\u4e2d\u9ed8\u8ba4\u7684decoder\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultResponseDecoder(ctx context.Context, res *http.Response, v interface{}) error {\n    defer res.Body.Close()\n    data, err := ioutil.ReadAll(res.Body)\n    if err != nil {\n        return err\n    }\n    // \u8fd9\u91cc\u6839\u636eResponse Header\u4e2d\u7684Content-Type\u62ff\u5230\u5bf9\u5e94\u7684decoder\n    // \u7136\u540e\u8fdb\u884cUnmarshal\n    return CodecForResponse(res).Unmarshal(data, v)\n}\n")),(0,o.kt)("h4",{id:"witherrordecodererrordecoder-decodeerrorfunc-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithErrorDecoder(errorDecoder DecodeErrorFunc) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684Error\u89e3\u6790\u65b9\u6cd5\n\u6211\u4eec\u770b\u4e0bkratos\u4e2d\u9ed8\u8ba4\u7684error decoder\u662f\u600e\u4e48\u5b9e\u73b0\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func DefaultErrorDecoder(ctx context.Context, res *http.Response) error {\n    // HTTP Status Code \u4e3a\u6700\u9ad8\u4f18\u5148\u7ea7\n    if res.StatusCode >= 200 && res.StatusCode <= 299 {\n        return nil\n    }\n    defer res.Body.Close()\n    data, err := ioutil.ReadAll(res.Body)\n    if err == nil {\n        e := new(errors.Error)\n        // \u8fd9\u91cc\u6839\u636eResponse Header\u4e2d\u7684Content-Type\u62ff\u5230\u5bf9\u5e94\u7684response decoder\n        // \u7136\u540e\u89e3\u6790\u51faerror\u4e3b\u4f53\u5185\u5bb9\n        if err = CodecForResponse(res).Unmarshal(data, e); err == nil {\n            // HTTP Status Code \u4e3a\u6700\u9ad8\u4f18\u5148\u7ea7\n            e.Code = int32(res.StatusCode)\n            return e\n        }\n    }\n    // \u5982\u679c\u6ca1\u6709\u8fd4\u56de\u5408\u6cd5\u7684Response Body\u5219\u76f4\u63a5\u4ee5HTTP Status Code\u4e3a\u51c6\n    return errors.Errorf(res.StatusCode, errors.UnknownReason, err.Error())\n}\n")),(0,o.kt)("h4",{id:"withbalancerb-balancerbalancer-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithBalancer(b balancer.Balancer) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565"),(0,o.kt)("h4",{id:"withblock-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithBlock() ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684Dial\u7b56\u7565\u4e3a\u963b\u585e\uff08\u76f4\u5230\u670d\u52a1\u53d1\u73b0\u53d1\u73b0\u8282\u70b9\u624d\u8fd4\u56de\uff09\uff0c\u9ed8\u8ba4\u4e3a\u5f02\u6b65\u975e\u963b\u585e"),(0,o.kt)("h4",{id:"withtlsconfigc-tlsconfig-clientoption"},(0,o.kt)("inlineCode",{parentName:"h4"},"WithTLSConfig(c *tls.Config) ClientOption")),(0,o.kt)("p",null,"\u914d\u7f6e\u5ba2\u6237\u7aef\u7684tls"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// WithTLSConfig with tls config.\nfunc WithTLSConfig(c *tls.Config) ClientOption {\n    return func(o *clientOptions) {\n        o.tlsConf = c\n    }\n}\n")),(0,o.kt)("h3",{id:"client\u4f7f\u7528\u65b9\u5f0f"},"Client\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("h4",{id:"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5"},"\u521b\u5efa\u5ba2\u6237\u7aef\u8fde\u63a5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n  context.Background(),\n  http.WithEndpoint("127.0.0.1:8000"),\n)\n')),(0,o.kt)("h4",{id:"\u4f7f\u7528\u4e2d\u95f4\u4ef6"},"\u4f7f\u7528\u4e2d\u95f4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n  context.Background(),\n  http.WithEndpoint("127.0.0.1:9000"),\n  http.WithMiddleware(\n    recovery.Recovery(),\n  ),\n)\n')),(0,o.kt)("h4",{id:"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0"},"\u4f7f\u7528\u670d\u52a1\u53d1\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := http.NewClient(\n  context.Background(),\n  http.WithEndpoint("discovery:///helloworld"),\n  http.WithDiscovery(r),\n)\n')))}p.isMDXComponent=!0}}]);