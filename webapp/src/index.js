import React from "react";
import {render} from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "./assets/april.css";

import Root from "./Root";
import store from "./store";
import {REMOTE_HOST} from "./constant";
import {getDispatcher} from "./utils/Store";
import {unregister} from "./registerServiceWorker";
// import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import {resetLoading, setLoading, toggleDrawer} from "./actions";

const $ = require("jquery");

const dispatch = getDispatcher();

(function($) {
  $.ajaxSetup({
    statusCode: {
      401: function() {
        // Redirect the to the login page.
        localStorage.clear();
        // setTimeout(() => {
        //   window.location.href = "/login";
        // }, 0);
      },
      404: function(data) {
        // Redirect the to the login page.
        // debugger;
        // toast.error('Resource Not Found. Try refreshing the page.', {
        //   position: "bottom-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
        Swal.fire({
          position: "center",
          html: ` <svg width="128" height="128" viewBox="0 0 128 128" style="overflow:visible;position:absolute;top:-60; left:-20;>
      <defs>
          <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
              <stop stopColor="#FFD2DA" offset="0%"/>
              <stop stopColor="#FFD2DA" offset="100%"/>
          </linearGradient>
      </defs>
      <circle className="anime-element" cx="64" cy="64" r="64" fill="#FFD2DA" fillRule="evenodd"/>
  </svg>
  <svg  style="overflow:visible;display:block;position:absolute;top:-60; right:-70; >
  <defs>
    <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="prefix__a">
      <stop stopColor="#E0E1FE" stopOpacity={0} offset="0%" />
      <stop stopColor="#E0E1FE" offset="100%" />
    </linearGradient>
  </defs>
  <path
    d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z"
    transform="translate(-1103)"
    fill="url(#prefix__a)"
    fillRule="evenodd"
  />
</svg>`,
          type: "error",
          title: "Resource Not Found. Try refreshing the page.",
          showConfirmButton: false,
          timer: 5000,
          customClass: {
            title: "sweet_alert_title",
            popup: "sweet_alert_popup"
          }
        });
      }
    }
  });

  let xhrPool = [];

  $(document).ajaxSend(function(e, xhr, options) {
    if (options.url && options.url.indexOf("login") === -1) {
      xhr.setRequestHeader(
        "Authorization",
        "Token " + localStorage.getItem("access_token")
      );
    }
    options.url = REMOTE_HOST + options.url;
    dispatch(setLoading());
    xhrPool.push(xhr);
  });

  $(document).ajaxComplete(function(e, xhr, options) {
    xhrPool = $.grep(xhrPool, function(x) {
      return x !== xhr;
    });
    if (xhrPool.length === 0) {
      setTimeout(() => {
        dispatch(resetLoading());
      }, 1000);
    }
  });

  const abort = function() {
    $.each(xhrPool, function(idx, jqXHR) {
      jqXHR.abort();
    });
  };

  let oldbeforeunload = window.onbeforeunload;
  window.onbeforeunload = function() {
    let r = oldbeforeunload ? oldbeforeunload() : undefined;
    if (r === undefined) {
      // only cancel requests if there is no prompt to stay on the page
      // if there is a prompt, it will likely give the requests enough time to finish
      abort();
    }
    return r;
  };
})($);

$("body").mousemove(function(e) {
  if (e.pageX <= 60 && e.pageY <= 50) {
    dispatch(toggleDrawer(true));
  }
});

render(
  <div>
    <Root store={store} />
  </div>,
  document.getElementById("segit_root")
);

// registerServiceWorker();
unregister();
