import React, { FC, useEffect } from "react";

import { useAppDispatch } from "./bll/hooks";
import { setInitState } from "./bll/reducer";

import s from "App.module.scss";
import { Content } from "features/Content/Content";
import { Controls } from "features/Controls/Controls";
import { getDataFromLocalStorage } from "utils/ls-funcs";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const data = getDataFromLocalStorage();
    if (data)
      dispatch(
        setInitState({
          title: data ? data.title : "Title",
          post: data ? data.post : "Post",
          header: data ? data.header : "Header",
          isHeaderOn: data ? data.isHeaderOn : false,
          isImageOn: data ? data.isImageOn : false,
          image: data ? data.image : "",
        }),
      );
  }, []);

  return (
    <div className={s.app}>
      <div className={s.container}>
        <Controls />
        <Content />
      </div>
    </div>
  );
};

export default App;
