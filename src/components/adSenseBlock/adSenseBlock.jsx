import { useEffect } from "react";

const AdSenseBlock = ({ props }) => {
  const currentPath = props;

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return <div key={currentPath}></div>;
};

export default AdSenseBlock;
