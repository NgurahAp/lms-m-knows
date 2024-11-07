// AssignmentInfo.tsx
import React from "react";

interface AssignmentInfoProps {
  title: string | undefined;
  detail: string | undefined;
}

export const PageInfo: React.FC<AssignmentInfoProps> = ({ title, detail }) => {
  return (
    <div className="bg-white flex flex-col mt-5 px-8 h-36 justify-center rounded-lg">
      <h1 className="text-3xl font-semibold pb-3">{title}</h1>
      <p className="text-lg font-light">{detail}</p>
    </div>
  );
};

