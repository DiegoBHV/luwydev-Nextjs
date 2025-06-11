"use client"
import "animate.css";
import $ from "jquery";
import { useEffect } from "react";
import Logo from "./Logo";
export const PreLoader = () => {
  useEffect(() => {
    $(".logo_home").css({
      "--animate-duration": "4s",
    });

    setTimeout(() => {
      $(".loader-mask").fadeOut(400);
    }, 1600);

    function progress() {
      let count = 0;
      let per = 0;
      let loading = setInterval(animate, 15);
      let loadingProgress = document.querySelector(".loading-progress");

      function animate() {
        if (count === 100 && per === 300) {
          clearInterval(loading);
        } else {
          per = per + 3;
          count = count + 1;
          loadingProgress.style.width = per + "px";
        }
      }
    }

    progress();
  }, []);
  return (
    <div className="loader-mask">
      <div className="loading text-center">
        <div className="preloader-site-logo">
          <Logo />
        </div>
        <div className="progress-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};
