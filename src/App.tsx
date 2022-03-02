import React, { FC, useEffect, useState } from "react";

import s from "App.module.scss";
import { Content } from "features/Content/Content";
import { Controls } from "features/Controls/Controls";
import { DataType, getDataFromLocalStorage } from "utils/ls-funcs";

const App: FC = () => {
  const [state, setState] = useState<DataType>({
    title: "",
    post: "",
    isHeaderOn: false,
    header: "",
    isFileOn: false,
    image: null,
  });

  useEffect(() => {
    const data = getDataFromLocalStorage();
    if (data)
      setState({
        title: data ? data.title : "Title",
        post: data ? data.post : "Post",
        header: data ? data.header : "Header",
        isHeaderOn: data ? data.isHeaderOn : false,
        isFileOn: data ? data.isFileOn : false,
        image: data ? data.image : "",
      });
  }, []);

  return (
    <div className={s.app}>
      <Controls state={state} setState={setState} />
      <Content data={state} />
    </div>
  );
};

export default App;
