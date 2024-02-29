import * as React from "react";
import { Context, SERVER_URL } from "../../../const";
import { useContext } from "react";
import arrow from "./arrow.svg";

export function BottomPart(props) {
  // let isBtb = true;
  const { isBtb, setCart, Cart } = useContext(Context);

  let all_pathes = props.categories.data.map((path) => {
    let all_path = [];
    while (path !== null) {
      all_path.push(path);
      path = path.attributes.parent.data;
    }
    return all_path.reverse();
  });

  return (
    <>
      <div>
        <div className="div">
          <div className="column">
            <div className="div-2">
              <div className="div-3">Full product description</div>
              <div className="div-4">{props.features}</div>
              <div className="div-5">Product category</div>
              {all_pathes.map((all_path) => (
                <div className="div-6">
                  {all_path.length > 0 && (
                    <a
                      className="div-7"
                      href={`/catalog/all?category=${all_path[0].id}`}
                    >
                      {all_path[0].attributes.name}
                    </a>
                  )}
                  {all_path.slice(1).map((x) => (
                    <>
                      <img loading="lazy" src={arrow} className="img-2" />
                      <a
                        className="div-7"
                        href={`/catalog/all?category=${x.id}`}
                      >
                        {x.attributes.name}
                      </a>
                    </>
                  ))}
                </div>
              ))}
              <div className="barand-description">Brand Description</div>{" "}
              <div className="brand-description">
                <div className="div" style={{ borderRadius: 0 }}>
                  <div className="column-2">
                    <img
                      loading="lazy"
                      srcSet={`${SERVER_URL}${props.brand.data.attributes.logo.data.attributes.formats.small.url}`}
                      className="img-5"
                    />
                  </div>{" "}
                  <div className="column-3">
                    <div className="div-15">
                      {props.brand.data.attributes.description_short}
                      {props.brand.data.attributes.description_long}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="column-4">
            <div className="Characteristics">
              <div className="div-17">Characteristics:</div>{" "}
              {[
                { name: "Color", value: props.color },
                {
                  name: "Age",
                  value: props.age_group.split("_")[0].toLowerCase(),
                },
              ].map((x) => (
                <div className="div-39">
                  <div className="div-40">{x.name}</div>{" "}
                  <div className="div-41">{x.value}</div>
                </div>
              ))}
              {props.size && (
                <div className="div-39">
                  <div className="div-40">Size</div>{" "}
                  <div className="div-41">{props.size}</div>
                </div>
              )}
              {props.characterisctics_b2c.map((x) => (
                <div className="div-39">
                  <div className="div-40">{x.name}</div>{" "}
                  <div className="div-41">{x.value}</div>
                </div>
              ))}
              {isBtb &&
                props.characterisctics_b2b.map((x) => (
                  <div className="div-39">
                    <div className="div-40">{x.name}</div>{" "}
                    <div className="div-41">{x.value}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <style jsx="true">{`
        .div {
          gap: 20px;
          display: flex;
          background: white;
          border-radius: 32px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .div {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        @media (max-width: 600px) {
          .div {
            margin-bottom: 20px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-2 {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 32px 0px 0px 32px;
          border-right: 1px solid rgba(35, 28, 30, 0.1);
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          padding: 40px;
        }
        @media (max-width: 991px) {
          .div-2 {
            padding: 20px;
            max-width: 100%;
            border-radius: 0px;
          }
        }
        .div-3 {
          color: #231c1e;
          text-align: left;
          letter-spacing: -0.16px;
          font: 600 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
          }
        }
        .div-4 {
          color: #231c1e;
          letter-spacing: -0.16px;
          margin-top: 16px;
          font: 300 16px/18px Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
          }
        }
        .img {
          aspect-ratio: 590;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          margin-top: 24px;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
          }
        }
        .div-5 {
          color: #231c1e;
          text-align: left;
          letter-spacing: -0.16px;
          padding-top: 23px;
          margin-top: 24px;
          border-top: 1px solid rgba(35, 28, 30, 0.2);
          font: 600 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-5 {
            max-width: 100%;
          }
        }
        .div-6 {
          align-items: start;
          display: flex;
          margin-top: 16px;
          gap: 8px;
          & + & {
            margin-top: 8px;
          }
        }
        @media (max-width: 991px) {
          .div-6 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-7 {
          color: rgba(35, 28, 30, 0.5);
          letter-spacing: -0.16px;
          align-self: stretch;
          flex-basis: auto;
          font: 300 16px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-7:hover {
          color: #a2ac87;
          cursor: pointer;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-8 {
          color: rgba(35, 28, 30, 0.5);
          letter-spacing: -0.16px;
          font: 300 16px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-9 {
          color: #a2ac87;
          letter-spacing: -0.16px;
          align-self: stretch;
          font: 500 16px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-10 {
          align-items: start;
          display: flex;
          margin-top: 8px;
          gap: 8px;
        }
        @media (max-width: 991px) {
          .div-10 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-11 {
          color: rgba(35, 28, 30, 0.5);
          letter-spacing: -0.16px;
          align-self: stretch;
          flex-basis: auto;
          font: 300 16px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 16px;
          overflow: hidden;
          max-width: 100%;
        }
        .category-last {
          color: #a2ac87;
          letter-spacing: -0.16px;
          align-self: stretch;
          flex-basis: auto;
          font: 500 16px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .barand-description {
          color: #231c1e;
          text-align: left;
          letter-spacing: -0.16px;
          margin-top: 124px;
          font: 600 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .barand-description {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .brand-description {
          margin-top: 16px;
        }
        @media (max-width: 991px) {
          .brand-description {
            max-width: 100%;
          }
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          margin-left: 0px;
          overflow: hidden;
        }
        @media (max-width: 991px) {
          .column-2 {
            margin-left: 0px;
            width: 100%;
          }
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 100px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          max-width: 100%;
          border-radius: 8px;
        }
        @media (max-width: 991px) {
          .img-5 {
            margin-top: 20px;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 82%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-3 {
            margin-left: 0;
            width: 100%;
          }
        }
        .div-15 {
          color: rgba(35, 28, 30, 0.5);

          font-family: Onest;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: 115%; /* 16.1px */
          letter-spacing: -0.14px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            margin-top: 20px;
          }
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 50%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-4 {
            width: 100%;
            margin-left: 0;
          }
        }
        .Characteristics {
          align-self: stretch;
          border-radius: 0px 32px 32px 0px;
          background-color: #fff;
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          width: 100%;
          padding: 45px 40px;
        }
        @media (max-width: 991px) {
          .Characteristics {
            max-width: 100%;
            padding: 0 20px 20px;
          }
        }
        .div-17 {
          color: #231c1e;
          text-align: left;
          letter-spacing: -0.16px;
          font: 600 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-17 {
            max-width: 100%;
          }
        }
        .char-description {
          display: flex;
          margin-top: 40px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .char-description {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-19 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .img-6 {
          aspect-ratio: 457;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .img-6 {
            max-width: 100%;
          }
        }
        .div-20 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-20 {
            white-space: initial;
          }
        }
        .div-21 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-21 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-22 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .img-7 {
          aspect-ratio: 402;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-23 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-23 {
            white-space: initial;
          }
        }
        .div-24 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-25 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-25 {
            white-space: initial;
          }
        }
        .img-8 {
          aspect-ratio: 363;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-26 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-26 {
            white-space: initial;
          }
        }
        .div-27 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-27 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-28 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-28 {
            white-space: initial;
          }
        }
        .img-9 {
          aspect-ratio: 354;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-29 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-29 {
            white-space: initial;
          }
        }
        .div-30 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-30 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-31 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-31 {
            white-space: initial;
          }
        }
        .img-10 {
          aspect-ratio: 351;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-32 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-32 {
            white-space: initial;
          }
        }
        .div-33 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-33 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-34 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-34 {
            white-space: initial;
          }
        }
        .img-11 {
          aspect-ratio: 372;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-35 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-35 {
            white-space: initial;
          }
        }
        .div-36 {
          display: flex;
          margin-top: 20px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-36 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .div-37 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-37 {
            white-space: initial;
          }
        }
        .img-12 {
          aspect-ratio: 352;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-38 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-38 {
            white-space: initial;
          }
        }
        .div-39 {
          display: flex;
          margin-top: 10px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-39 {
            max-width: 100%;
          }
        }
        .div-40 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-40 {
            white-space: initial;
          }
        }
        .img-13 {
          aspect-ratio: 386;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-41 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-41 {
            white-space: initial;
          }
        }
        .div-42 {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          margin: 20px 0 60px;
        }
        @media (max-width: 991px) {
          .div-42 {
            max-width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 40px;
          }
        }
        .div-43 {
          color: rgba(35, 28, 30, 0.5);
          text-align: left;
          letter-spacing: -0.16px;
          align-self: center;
          white-space: nowrap;
          margin: auto 0;
          font: 300 16px/100% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-43 {
            white-space: initial;
          }
        }
        .img-14 {
          aspect-ratio: 333;
          object-fit: contain;
          object-position: center;
          width: 100%;
          stroke-width: 1px;
          stroke: rgba(35, 28, 30, 0.2);
          overflow: hidden;
          align-self: center;
          flex-grow: 1;
          flex-basis: 0%;
          margin: auto 0;
        }
        .div-44 {
          color: #231c1e;
          letter-spacing: -0.2px;
          white-space: nowrap;
          font: 300 20px/115% Onest, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-44 {
            white-space: initial;
          }
        }
      `}</style>{" "}
    </>
  );
}
