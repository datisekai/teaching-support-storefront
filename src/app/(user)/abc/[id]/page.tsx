import { NextPage } from "next";
import React, { FC } from "react";
interface IAbcDetail {
  params: { id: string };
  searchParams: { [key: string]: string };
}

const abcDetail: NextPage<IAbcDetail> = ({ params, searchParams }) => {
  return <div>{params.id}</div>;
};

export default abcDetail;
