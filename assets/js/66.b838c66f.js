(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{293:function(t,e,a){"use strict";a.r(e);var s=a(2),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transparent-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transparent-proxy","aria-hidden":"true"}},[t._v("#")]),t._v(" Transparent Proxy")]),t._v(" "),a("p",[t._v("Here, V2Ray is used as a transparent proxy which allows you accessing blocked websites for all of the devices in the LAN, hence some people called it a router proxy. However, we would like to correct that, as it is better to call as gateway proxy rather than a router proxy. Of course, only using a home router as a gateway proxy is also possible because most of the home routers behave as a gateway. Once configured the gateway proxy, all the devices in LAN will have access to censored websites. Also, gateway proxy will act as a globally proxy, without having to install V2Ray on each device. If the configuration is updated, you only need to modify the setting at the gateway. Some people say it just feels like no wall. However, if you are interested in transparent proxy, you should evaluate that is it suitable for your network environment, rather than blindly follow the trend.")]),t._v(" "),a("p",[t._v("The transparent proxy is befitting for the following situations:")]),t._v(" "),a("ul",[a("li",[t._v("You have many LAN devices in your local network, such as offices, laboratories, and large families.")]),t._v(" "),a("li",[t._v("Your device(s) can't/inconveniently set up the proxy, such as Chromecast, TV box, etc.")]),t._v(" "),a("li",[t._v("You want all the traffic on your device(s) access the internet via the proxy.")])]),t._v(" "),a("h2",{attrs:{id:"pros"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pros","aria-hidden":"true"}},[t._v("#")]),t._v(" Pros")]),t._v(" "),a("p",[t._v("In fact, V2Ray has long been a transparent agent. At the time, I also studied it for a while, and finally, I was tossed out. However, due to the DNS problem, I always feel uncomfortable.\nBut, now, it’s not the same. For now, use the V2Ray transparent proxy:")]),t._v(" "),a("ol",[a("li",[t._v("Solved the problem of DNS pollution to domains from firewall;")]),t._v(" "),a("li",[t._v("In the case when DNS pollution solved, the Chinese domains can still be resolved to the Chinese CDN;")]),t._v(" "),a("li",[t._v("Eliminate the 1 and 2 issues without the need for external software or self-built DNS, as long as the system supports V2Ray and iptables;")]),t._v(" "),a("li",[t._v("Take advantage of V2Ray's powerful and flexible routing feature without maintain a routing table;")])]),t._v(" "),a("h2",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation","aria-hidden":"true"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),a("ul",[a("li",[t._v("A person who has the ability to solve problems based on themselves situations;")]),t._v(" "),a("li",[t._v("A VPS that has been installed V2Ray, in this section we assume that the servers' IP is "),a("code",[t._v("110.231.43.65")]),t._v(";")]),t._v(" "),a("li",[t._v("A device with iptables, root permission, and Linux system, assuming the address is "),a("code",[t._v("192.168.1.22")]),t._v(", V2Ray runs as a client. This device can be a router, a development board, a personal computer, a virtual machine, and an Android device, and generally, refer to a gateway. We do not recommend using the MT7620 system to deploy transparent proxy, due to the limited performance, and many firmware does not have access to FPU. If you don't want to pay for a new device for transparent proxy, you can create a virtual machine on your PC (e.g. VirtualBox, Hyper-V, and KVM). Note that on the hypervisor, you should set virtual machines' network mode as the bridge.")])]),t._v(" "),a("h2",{attrs:{id:"procedures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procedures","aria-hidden":"true"}},[t._v("#")]),t._v(" Procedures")]),t._v(" "),a("p",[t._v("The setup steps are as follows, assuming you are logged in with root.")]),t._v(" "),a("ol",[a("li",[t._v("The gateway device enables IP forwarding. Add a line "),a("code",[t._v("net.ipv4.ip_forward=1")]),t._v(" to the /etc/sysctl.conf file and execute the following commands:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sysctl -p\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("The gateway device sets a static IP, which is the same network segment as the LAN port of the router. The default gateway is the IP address of the router. Enter the management background of the router. To the DHCP setting, the default gateway address is the IP address of the gateway device. In this example, it is 192.168.1.22, or The computer phone and other devices set the default gateway separately, and then the computer/mobile phone reconnects to the router to test whether it can be connected to the Internet (it can't be over the wall at this time). If you can't go online, you can learn one and get it. Otherwise, how can you do the same? Can't get on the net. The gateway device sets the static IP to prevent the IP from changing after the restart, which causes other devices to fail to connect to the network. The router sets the DHCP default gateway address so that the device accessing the router sends the data packet to the gateway device, and then The gateway device forwards.")])]),t._v(" "),a("li",[a("p",[t._v("Install the latest version of V2Ray on the server and gateway (if you don't refer to the previous tutorial, since GFW will worsen the traffic of GitHub Releases, the gateway can run the script almost impossible to install, it is recommended to download the V2Ray compression package first, then use the installation script to pass - The -local parameter is installed) and the configuration file is configured. Be sure to set up the V2Ray to work properly. At the gateway, execute "),a("code",[t._v("curl -x socks5://127.0.0.1:1080 google.com")]),t._v(" to test whether the configured V2Ray can be over the wall (in the command "),a("code",[t._v("socks5")]),t._v(" refers to the inbound protocol as socks, "),a("code",[t._v("1080")]),t._v(" means the inbound port is 1080) . If there is an output similar to the following, you can overturn the wall. If it does not appear, you can't turn it over. You have to check carefully which step is wrong or missing.")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">\n<TITLE>301 Moved</TITLE></HEAD><BODY>\n<H1>301 Moved</H1>\nThe document has moved\n<A HREF="http://www.google.com/">here</A>.\n</BODY></HTML>\n')])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("In the configuration of the gateway, add the inbound configuration of the dokodemo-door protocol and enable sniffing; also add SO_MARK to all outbound streamSettings. The configuration is as follows (the "),a("code",[t._v("...")]),t._v(" in the configuration represents the usual configuration of the original client):")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The open port")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dokodemo-door"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"followRedirect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Need to be set as true to accept traffic from iptables")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sniffing"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destOverride"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tls"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ...\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ...\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sockopt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mark"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Here is SO_MARK，used to iptables recognise. Each outbound is needed to configure; 255 can be another valur but need to keep consistant as iptables rules; if there is multiple outbound, it is recomanded that set all SO_MARK value as same for all outbounds.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    ...\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("Set the TCP transparent proxy by iptables rules, the commands as below (after "),a("code",[t._v("#")]),t._v(" are comments):")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Iptables -t nat -N V2RAY # Create a new chain called V2RAY\nIptables -t nat -A V2RAY -d 192.168.0.0/16 -j RETURN # Direct connection 192.168.0.0/16\nIptables -t nat -A V2RAY -p tcp -j RETURN -m mark --mark 0xff # Directly connect SO_MARK to 0xff traffic (0xff is a hexadecimal number, numerically equivalent to the above configured 255), the purpose of this rule is Avoid proxy loopback problems with local (gateway) traffic\nIptables -t nat -A V2RAY -p tcp -j REDIRECT --to-ports 12345 # The rest of the traffic is forwarded to port 12345 (ie V2Ray)\nIptables -t nat -A PREROUTING -p tcp -j V2RAY # Transparent proxy for other LAN devices\nIptables -t nat -A OUTPUT -p tcp -j V2RAY # Transparent proxy for this machine\n")])])]),a("p",[t._v("Then set the iptables rule of the UDP traffic transparent proxy, the commands are at below:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ip rule add fwmark 1 table 100\nip route add local 0.0.0.0/0 dev lo table 100\niptables -t mangle -N V2RAY_MASK\niptables -t mangle -A V2RAY_MASK -d 192.168.0.0/16 -j RETURN\niptables -t mangle -A V2RAY_MASK -p udp -j TPROXY --on-port 12345 --tproxy-mark 1\niptables -t mangle -A PREROUTING -p udp -j V2RAY_MASK\n")])])]),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("Try to access the walled website directly using your computer/phone. It should be accessible (if you can't, you may have to ask to guide).")])]),t._v(" "),a("li",[a("p",[t._v("Write the script to automatically load the above iptables, or use third-party software (such as iptables-persistent), otherwise, iptables will be invalid after the gateway restarts (that is, the transparent proxy will be invalid).")])])]),t._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),a("ul",[a("li",[t._v("In the above settings, assuming that a foreign website, such as Google, is accessed, the gateway still uses the system DNS for the query, but the returned result is polluted, and the sniffing provided by V2Ray can extract the domain name information from the traffic. VPS parsing. That is to say, every time you plan to visit the website of the wall, the DNS provider knows that GFW may know whether the data will be fed to AI or not, given the urinary nature of domestic companies.")]),t._v(" "),a("li",[t._v("Sniffing currently only extracts domain names from TLS and HTTP traffic. If there are non-two types of internet traffic, use sniffing to resolve DNS pollution.")]),t._v(" "),a("li",[t._v("Because I am not familiar with iptables, I always feel that there is a problem with the setting of the transparent proxy for UDP traffic. Please know why my friend should give feedback. If you simply look at the Internet and watch videos, you can only proxy TCP traffic, no UDP transparent proxy.")]),t._v(" "),a("li",[t._v("Due to the limit of VMESS protocol, online gaming acceleration based on V2Ray transparent proxy doesn't have a good performance.")]),t._v(" "),a("li",[t._v("Only TCP/UDP package will be proxied by V2Ray, but it can't work with ICMP packets, therefore, the transparent proxy would not support ping/mtr based on ICMP. However, tcping or hping3 works due to they use TCP rather than ICMP.")]),t._v(" "),a("li",[t._v("According to other transparent proxy tutorials on the internet, they set iptables rules for private addresses like RETURN 127.0.0.0/8, but we suggest that placed them in the V2Ray routing rules for performance consideration.")])]),t._v(" "),a("hr"),t._v(" "),a("h4",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates","aria-hidden":"true"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),a("ul",[a("li",[t._v("2017-12-05 Initial Version.")]),t._v(" "),a("li",[t._v("2017-12-24 Fix the problem of unable to visit Chinese sites.")]),t._v(" "),a("li",[t._v("2017-12-27 re-format.")]),t._v(" "),a("li",[t._v("2017-12-29 Removed unnecessary iptables rules.")]),t._v(" "),a("li",[t._v("2018-01-16 Optimized set up steps.")]),t._v(" "),a("li",[t._v("2018-01-21 Add UDP transparent proxy setting")]),t._v(" "),a("li",[t._v("2018-04-05 Update")]),t._v(" "),a("li",[t._v("2018-08-30 Fix setting up procedures.")]),t._v(" "),a("li",[t._v("2018-09-14 Better solution of local requests.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);