"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3976],{619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453);const r={sidebar_position:1},o="Introduction",l={id:"intro",title:"Introduction",description:"Welcome to GetGo! Our app makes your travels easier by combining three key features: a chatbot to help you find information and create routes, a social media platform to share and view travel photos, and a list of popular destinations with location details.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/documentation/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Tutorial - Basics",permalink:"/documentation/docs/category/tutorial---basics"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Frontend Setup",id:"frontend-setup",level:3},{value:"AI Engine Setup",id:"ai-engine-setup",level:3},{value:"Backend Setup",id:"backend-setup",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Welcome to GetGo! Our app makes your travels easier by combining three key features: a chatbot to help you find information and create routes, a social media platform to share and view travel photos, and a list of popular destinations with location details."}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["To use GetGo, simply install the app using the provided ",(0,i.jsx)(n.code,{children:"apk"})," file. Once installed, you can start exploring all the features right away."]}),"\n",(0,i.jsx)(n.p,{children:"If you'd like to set up your own version of the app, follow these steps:"}),"\n",(0,i.jsxs)("div",{align:"center",children:[(0,i.jsx)("img",{src:"img/home.png",width:"300",alt:"Image 2"}),(0,i.jsx)("img",{src:"img/detailed_location.png",width:"300",alt:"Image 1"}),(0,i.jsx)("p",{align:"center",children:"Demonstrating the UI of the GetGo app. The left panel showcases the home page, while the right panel displays detailed information about a location when the user taps to view more details"})]}),"\n",(0,i.jsx)(n.h3,{id:"frontend-setup",children:"Frontend Setup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Requirements:"})," Android Studio"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Installation Steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the repository:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/GetGo-App/getgo-frontend\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Open the project in Android Studio:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Open Android Studio."}),"\n",(0,i.jsx)(n.li,{children:'Select "Open an existing Android Studio project."'}),"\n",(0,i.jsx)(n.li,{children:"Find the GetGo-Mobile folder in the cloned repository."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Build and Run:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sync the project with Gradle files."}),"\n",(0,i.jsxs)(n.li,{children:["Build the project by selecting ",(0,i.jsx)(n.strong,{children:"Build > Rebuild Project"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Connect your Android device or start an emulator."}),"\n",(0,i.jsxs)(n.li,{children:["Click the Run button or select ",(0,i.jsx)(n.strong,{children:"Run > Run 'app'"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ai-engine-setup",children:"AI Engine Setup"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Python 3.10"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:"Bash"}),"\n",(0,i.jsxs)(n.li,{children:["Required libraries (listed in ",(0,i.jsx)(n.code,{children:"requirements.txt"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Installation Steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the repository:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/pphuc25/GetGo-AI.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Start Searxng:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd searxng-docker\ndocker-compose up -d\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure Environment Variables:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.code,{children:".env"})," file in the project root."]}),"\n",(0,i.jsx)(n.li,{children:"Enter your API keys and other necessary values."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Build and run the Docker container:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -t GetGo-AI .\ndocker run -p 7860:7860 GetGo-AI\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"backend-setup",children:"Backend Setup"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Requirements:"})," Visual Studio 2022 or Visual Studio Code (with C# Dev Kit extension)"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Installation Steps:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Clone the repository:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/GetGo-App/getgo-backend\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Install NPM packages using NuGet:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Refer to Stack Overflow for more details on installing NuGet packages."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Build and Run:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"getgo-backend"})," as the Startup Project."]}),"\n",(0,i.jsxs)(n.li,{children:["Press F5 or click the ",(0,i.jsx)(n.code,{children:"getgo-backend"})," button to build and run the project."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);