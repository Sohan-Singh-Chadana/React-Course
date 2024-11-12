export function render(reactElement, rootElement) {
  function creatDOMElement(reactElement) {
    //? reactElemnt type function ho tab
    if (typeof reactElement?.type === "function") {
      return creatDOMElement(reactElement.type(reactElement.props));
    }

    //? reactElement type Array ho tab
    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => creatDOMElement(el));
    }

    //? reactElement type string ho tab
    if (typeof reactElement === "string") {
      return document.createTextNode(reactElement);
    }

    //? reactElement dectructer kar rahe hai
    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);

    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key === "style") {
          Object.entries(value).forEach(
            ([property, value]) => (DOMElement["style"][property] = value)
          );
        } else {
          DOMElement[key] = value;
        }
      });

      props.children?.forEach((child) => {
        if (Array.isArray(child)) {
          DOMElement.append(...child.map((el) => creatDOMElement(el)));
        } else if (typeof child?.type === "string") {
          DOMElement.append(creatDOMElement(child));
        } else {
          const textNode = document.createTextNode(child);
          DOMElement.append(textNode);
        }
      });
    }

    return DOMElement;
  }

  //? create Dom element and append
  const DOMElement = creatDOMElement(reactElement);
  rootElement.innerHTML = "";
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement);
  } else {
    rootElement.append(DOMElement);
  }
}
export default { render };
