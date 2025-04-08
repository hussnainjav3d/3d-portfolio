// Copyright Hussnain Javed 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Script from "next/script";
import React from "react";
// import { GTAG } from "../../constants";

const Scripts = React.memo(() => {
  return (
    <>
      <Script id="chaport-live-chat" strategy="lazyOnload">
        {`
          (function(w,d,v3){
            w.chaportConfig = {
              appId : '67f59b6a8582f636c7a53b0c'
            };
  
            if(w.chaport)return;v3=w.chaport={};v3._q=[];v3._l={};v3.q=function(){v3._q.push(arguments)};
            v3.on=function(e,fn){if(!v3._l[e])v3._l[e]=[];v3._l[e].push(fn)};
            var s=d.createElement('script');s.type='text/javascript';s.async=true;
            s.src='https://app.chaport.com/javascripts/insert.js';
            var ss=d.getElementsByTagName('script')[0];
            ss.parentNode.insertBefore(s,ss);
          })(window, document);
        `}
      </Script>
    </>
  );
});

Scripts.displayName = "Scripts";

export default Scripts;
