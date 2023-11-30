'use client'
import React from 'react'
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="bg-slate-900"
      ariaLabel="triangle-loading"
      visible={true}
    />
  );
}

export default Loading