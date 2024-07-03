// ? you have an array of objects with company name and title ...
// ? write a function that  return just titles Just once (Look output plz...)
/*
...
*/

const data = [
  {
    title: "AP-signals",
    products: ["Basic and intermediate course", "pre-advance course"],
  },
  {
    title: "Apple",
    products: ["Iphone", "AirPods"],
  },
  {
    title: "Apple",
    products: ["MacBook"],
  },
  {
    title: "Korosh company",
    products: ["Dozdi", "Male mardom khory"],
  },
  {
    title: "Korosh company",
    products: ["iphone_14"],
  },
];

const titleReturns = (data) =>{
  const arrOfTitles = {};
  for(const {title} of data){

    arrOfTitles[title] = title
  }
  return Object.keys(arrOfTitles)
}

console.log(titleReturns(data));
//* output********  ["AP-signals", "Apple", "Korosh company"];
