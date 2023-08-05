"use client"
import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle"> My personal journey</span>
  
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Indian Certificate of Secondary Education 79% (I.C.S.E)
                </h3>
                <span className="qualification__subtitle">
                  Lewis English School , Darjeeling.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2016-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Indian School Certificate 87% (I.S.C)
                </h3>
                <span className="qualification__subtitle">
                  Namchi Public School , Namchi - South Sikkim.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2018-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  National Institute of Technology Sikkim (N.I.T Sikkim)
                </h3>
                <span className="qualification__subtitle">
                  Ravangla , Sikkim
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2020-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Graphic Design Lead</h3>
                <span className="qualification__subtitle">
                  E&I Cell N.I.T SIKKIM
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021-Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Technical Member & UX/UI Lead {" "}
                </h3>
                <span className="qualification__subtitle">
                  Web Development Cell N.I.T Sikkim{"   "}2022-Present
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX Intern</h3>
                <span className="qualification__subtitle">
                Putatoe Technologies , Lucknow, Uttar Pradesh
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - 6 Month
                  Duration
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Software Engineer Intern</h3>
                <span className="qualification__subtitle">
                IdentifYou Technologies Private Ltd · Full-time
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Jun 2023 - Present 
                </div>
              </div>
            </div>


          </div>
        </div>
    
    </section>
  );
};

export default Qualification;
