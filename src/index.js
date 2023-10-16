import React from "react";

const CustomComponent = () => {
  const data = ["элемент 1", "элемент 2", "элемент 3"];

  const printData = () => {
    console.log(data);
  };

  const printVariable = () => {
    const variable = data;
    console.log(variable);
  };

  printData();
  printVariable();

  return <div>Произвольный компонент</div>;
};

export default CustomComponent;
