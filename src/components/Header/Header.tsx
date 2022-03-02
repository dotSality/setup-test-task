import s from "./Header.module.scss";

type PropsType = {
  title: string;
};

export const Header = ({ title }: PropsType) => <h1 className={s.header}>{title}</h1>;
