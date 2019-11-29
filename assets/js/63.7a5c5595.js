(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{288:function(e,t,a){"use strict";a.r(t);var o=a(2),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"deploying-v2ray-by-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploying-v2ray-by-docker","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying V2Ray by Docker")]),e._v(" "),a("p",[e._v("Docker is a new virtualization technology that is different from traditional virtualization platform. V2Ray also provides a Docker deployment and it is very easy and efficient to deploy V2Ray via Docker.")]),e._v(" "),a("p",[e._v("** Docker can only be deployed in VPS based on KVM or XEN virtualisation platform **")]),e._v(" "),a("p",[e._v("Firstly, we need to install Docker:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo apt-get install -y docker\n")])])]),a("p",[e._v("After installing Docker, we found the official V2Ray image from "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DockerHub"),a("OutboundLink")],1),e._v(", the link [here](https://hub.docker.com/r/v2ray/ Official/). Find the command to pull the image and copy it. On the right side of the page, we can see the command as "),a("code",[e._v("docker pull v2ray/official")]),e._v(". We will copy it back to the command line and paste it and execute it:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker pull v2ray/official\n")])])]),a("p",[e._v("After V2Ray's Docker image pulling is complete, you can proceed to the next deployment step. Before that, you need to create a new folder v2ray in the "),a("code",[e._v("/etc")]),e._v(" directory, and write your configuration and name it "),a("code",[e._v("config.json")]),e._v(" into v2ray path. In the folder. After the configuration file is ready, type the following command to deploy. Please remember the inbound port you set in the configuration file as you will need to map it to the host during deployment. Otherwise, it will not be accessible. Assuming the port number is set to "),a("code",[e._v("8888")]),e._v(", it needs to be mapped to port "),a("code",[e._v("8888")]),e._v(" of the host. The command is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2ray/official  v2ray -config=/etc/v2ray/config.json\n")])])]),a("p",[e._v("After typing the command above, a string of characters will appear on the command line, indicating that the container is successfully deployed, and can be immediately connected through the client and started to use. If you are not sure, type the following command to view the running status of the container:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container ls\n")])])]),a("p",[e._v("If you see the following sentences from the output prompt, the container runs successfully:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ docker container ls\nCONTAINER ID        IMAGE                 COMMAND                  CREATED             STATUS              PORTS                     NAMES\n2a7sdo87kdf3        v2ray/official        "v2ray -config=/et..."   3 minutes ago       Up 3 minutes        0.0.0.0:8888->8888/tcp    v2ray\n')])])]),a("p",[e._v("Start V2Ray by the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container start v2ray\n")])])]),a("p",[e._v("Stop V2Ray:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container stop v2ray\n")])])]),a("p",[e._v("Restart V2Ray:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container restart v2ray\n")])])]),a("p",[e._v("Check logs:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container logs v2ray\n")])])]),a("p",[e._v("Once your configuration updated, you need deploy the container, by the following commands:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ sudo docker container stop v2ray\n$ sudo docker container rm v2ray\n$ sudo docker run -d --name v2ray -v /etc/v2ray:/etc/v2ray -p 8888:8888 v2ray/official  v2ray -config=/etc/v2ray/config.json\n")])])]),a("p",[e._v("If your configuration changes the port number, then the corresponding port mapping should also be changed. If you change the listening port to 9999 in the configuration file, the '-p' parameter should be written like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-p  9999:9999\n")])])]),a("p",[e._v("If you want to map the port in the container to the port of the machine, the command should be written like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-p 127.0.0.1:{your port}:{your port}\n")])])]),a("p",[e._v("If the transport layer protocol used by V2Ray is mKCP, since mKCP is based on UDP, the port to be mapped is UDP:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-p  9999:9999/udp\n")])])]),a("p",[e._v("** Unless you want to use Nginx to forward Websocket, you don't need to map to local. Just fill in the form of "),a("code",[e._v("{your port}:{you port}")]),e._v(". **")]),e._v(" "),a("p",[e._v("In addition, if the dynamic port is enabled, the -p flag can be used multiple times to bind multiple ports. The specific usage is to add multiple -p tags to the instruction.")]),e._v(" "),a("p",[e._v("Update the Docker mirror of V2Ray:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ docker pull v2ray/official\n")])])]),a("p",[e._v("Once updated, you need to deploy this container again as forementioned.")]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updates","aria-hidden":"true"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),a("ul",[a("li",[e._v("2018-04-05 Update")]),e._v(" "),a("li",[e._v("2018-09-06 Add the UDP delay description")])])])}),[],!1,null,null,null);t.default=r.exports}}]);