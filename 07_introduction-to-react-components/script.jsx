import { createRoot } from "react-dom/client";
import "./style.css";
import React from "react";

function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3> {title} </h3> <p> {brand} </p>{" "}
        <p>
          <b> $ {price} </b>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
}

function Card2() {
  return <div> Hello </div>;
}

const root = createRoot(document.getElementById("root"));

const h1 = <h1>Hii</h1>;
console.log(h1);

// console.log("Hello world!!!");

//****************************************************

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     root.render(
//       <div className="container">
//         {data.products.map((product) => {
//           return Card({
//             key: product.id,
//             image: product.thumbnail,
//             title: product.title,
//             brand: product.brand,
//             price: product.price,
//           });
//         })}
//       </div>
//     );
//   });

//****************************************************

// const h1 = <h1>Hello World</h1>;
// console.log(h1);

//****************************************************
// root.render({
//   $$typeof: Symbol.for("react.element"),
//   type: Card,
//   ref: null,
// props: {
//   title: "chair",
//   brand: "statues",
//   price: 100,
//   image:
//     "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
//   key: 1,
// },
// });

//****************************************************
// console.log(
//   React.createElement(Card, {
//     title: "chair",
//     brand: "statues",
//     price: 100,
//     image:
//       "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
//     key: 1,
//   })
// );

//****************************************************

// root.render(
//   React.createElement(Card, {
//     title: "chair",
//     brand: "statues",
//     price: 100,
//     image:
//       "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
//     key: 1,
//   })
// );

//****************************************************

// root.render(
//   <Card
//     title="chair"
//     image="https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png"
//     brand="statues"
//     price="100"
//   />
// );

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              brand={product.brand}
              image={product.thumbnail}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });
