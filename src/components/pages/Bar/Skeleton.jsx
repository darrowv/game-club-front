import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={420}
    className="skeleton"
    viewBox="0 0 280 420"
    backgroundColor="#ffffff5b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="0" rx="16" ry="16" width="260" height="240" /> 
    <rect x="46" y="266" rx="10" ry="10" width="174" height="27" />
    <rect x="72" y="313" rx="5" ry="5" width="113" height="14" />
    <rect x="34" y="350" rx="10" ry="10" width="205" height="29" />
  </ContentLoader>
);

export default Skeleton;
