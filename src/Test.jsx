import React, { memo } from "react";

export default memo(function Test({ count }) {
  console.log("YAAAY! IM RENDERED!!!");

  return <div>{count}</div>;
});
