import React from "react";

function Tag({val}) {
  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
}
/*
function Tag(props) {
  return (
    <div>
      <h1>{props.val}</h1>
    </div>
  );
}
*/
/*
function Tag(props) {
    const {val} = props;
  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
}
*/
export default Tag