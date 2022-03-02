import React, { memo } from "react";

import { DataType } from "../../utils/ls-funcs";
import { Header } from "../Header/Header";

import s from "./Content.module.scss";

type PropsType = {
  data: DataType;
};

export const Content = memo(({ data }: PropsType) => {
  const { header, isHeaderOn, image, title, post, isFileOn } = data;
  const isImageShow = image && isFileOn;

  return (
    <div className={s.content}>
      <div className={s.container}>
        {isHeaderOn && <Header title={header} />}
        {isImageShow && <img className={s.image} src={image} alt="Dropped" />}
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.post}>{post}</h3>
      </div>
    </div>
  );
});
