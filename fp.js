import { assoc, compose, head, lens, prop, view, slice } from "ramda";

const data = {
  first: { list: ["hej", "då"], num: 3, str: "string" },
  last: { lol: "lol" },
};

head(data); //=
const strLens = lens(prop("str"), assoc("str"));
view(strLens, data.first); //=

const hejsan = "hejsan";
const toUpperCase = (str) => str.toUpperCase();
const headUpperCase = compose(toUpperCase, head);
const rest = (str) => slice(1, Infinity, str);

rest(hejsan); //=

const capitalize = (str) => headUpperCase(str) + rest(str);

capitalizedHejsan = capitalize(hejsan); //=
