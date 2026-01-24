import React from "react";

export const Divider = () => {
  return (
    <div className="bottom-dashed">
      <span className="size-2 bg-border absolute -left-2 top-1/2 -translate-y-1/2"></span>
      <span className="size-2 bg-border absolute -right-2 top-1/2 -translate-y-1/2"></span>
    </div>
  );
};
