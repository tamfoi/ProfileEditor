import "./Viewer.css";
import { Profile, Skill } from "./types/profile";
import { useEffect, useState } from "react";

type Props = Profile & {
  isSecretMode: boolean;
};

const computeSecretText = (target: string, isSecretMode: boolean): string => {
  if (!isSecretMode)
    return target.replace(/<secret>(.+?)<st>(.+?)<\/st><\/secret>/g, "$1");
  return target.replace(/<secret>(.+?)<st>(.+?)<\/st><\/secret>/g, "$2");
};

const Viewer: React.FC<Props> = (props) => {
  const computedSkill: { [key: string]: Skill[] } = props.skill.reduce(
    (prev: { [key: string]: Skill[] }, current) => {
      return {
        ...prev,
        [current.category]: [...(prev[current.category] || []), current],
      };
    },
    {}
  );

  return (
    <div id="viewer" className={`${props.isSecretMode ? "isSecretMode" : ""}`}>
      <p className="head">プロフィール</p>

      <div className="section1">
        <div className="section1Left">
          <div className="item">
            <p className="itemName">名前</p>
            <p className="itemContent">
              {computeSecretText(props.name, props.isSecretMode)}
            </p>
          </div>
          <div className="item">
            <p className="itemName">役割</p>
            <div className="itemContent">
              <ul>
                {props.role.map((item, index) => (
                  <li key={index}>
                    {computeSecretText(item, props.isSecretMode)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="item">
            <p className="itemName">資格</p>
            <div className="itemContent">
              <ul>
                {props.qualification.map((item, index) => (
                  <li key={index}>
                    {computeSecretText(item, props.isSecretMode)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="item section1Right">
          <p className="itemName">略歴</p>
          <div className="itemContent">
            <div className="biographyList">
              {props.biography.map((item, index) => (
                <div className="biographyItem" key={index}>
                  <div className="biographyPeriod">
                    {computeSecretText(item.period, props.isSecretMode)}
                  </div>
                  <div className="biographyOverview">
                    {computeSecretText(item.overview, props.isSecretMode)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="item isPageBreakAfter">
        <p className="itemName">PR</p>
        <p className="itemContent">
          {computeSecretText(props.pr, props.isSecretMode)}
        </p>
      </div>

      <div className="item isPageBreakAfter">
        <p className="itemName">スキル</p>
        <div className="itemContent">
          {Object.keys(computedSkill).map((category, categoryIndex) => (
            <div className="skillItem" key={categoryIndex}>
              <p className="skillCategory">{category}</p>
              <div className="skillDescription">
                {computedSkill[category].map((item, index) => (
                  <div
                    className={`skillName ${
                      item.workExperience ? "isWorkExperience" : ""
                    }`}
                    key={index}
                  >
                    {computeSecretText(item.name, props.isSecretMode)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="item">
        <p className="itemName">実績</p>
        <div className="itemContent">
          {props.performance.map((performanceItem, performanceIndex) => (
            <div
              className={`performanceWrapper ${
                (performanceIndex + 1) % 2 === 0 ? "isPageBreakAfter" : ""
              }`}
              key={performanceIndex}
            >
              <p className="performanceName">― {performanceItem.name} ―</p>
              <div className="performanceItem">
                <div className="performanceImageList">
                  {performanceItem.image.map((imageItem, imageIndex) => (
                    <div className="performanceImageItem" key={imageIndex}>
                      <img className="performanceImageBody" src={imageItem} />
                    </div>
                  ))}
                </div>
                <div className="performanceTextWrapper">
                  <div className="performanceText">
                    <p className="performanceTextHead">概要</p>
                    <p className="performanceTextBody">
                      {computeSecretText(
                        performanceItem.overview,
                        props.isSecretMode
                      )}
                    </p>
                  </div>
                  <div className="performanceText">
                    <p className="performanceTextHead">体制</p>
                    <p className="performanceTextBody">
                      {computeSecretText(
                        performanceItem.team,
                        props.isSecretMode
                      )}
                    </p>
                  </div>
                  <div className="performanceText">
                    <p className="performanceTextHead">ポイント</p>
                    <p className="performanceTextBody">
                      {computeSecretText(
                        performanceItem.role,
                        props.isSecretMode
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewer;
