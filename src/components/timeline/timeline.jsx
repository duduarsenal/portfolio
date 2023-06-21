import React from "react";
import "./timeline.css";

export default function Timeline() {
  return (
    <div className="timeline w-[100%]">
      <div className="timeline-content w-[100%] flex flex-col items-center">
        <ul className="timelineTop flex justify-evenly items-center w-[90%]">
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
        </ul>
        <ul className="timelineBottom flex justify-evenly items-center flex-row-reverse w-[90%]">
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button"></div>
          </li>
          <li className="itemTimeLine">
            <div className="timeline-descricao"></div>
            <div className="timeline-button-not"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
