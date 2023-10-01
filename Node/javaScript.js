// let x = 10;
// let y = 20;
// [x,y] = [y,x]                       //Similar way to swap variables in python.

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     type:'dinein',
  
//     openingHours: {
//       thu: {
//         open: 12,
//         close: 22,
//       },
//       fri: {
//         open: 11,
//         close: 23,
//       },
//       sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//       },
//     },
//     meal:function(starterIndex,MainIndex){
//         return [this.starterMenu[starterIndex],this.mainMenu[MainIndex]]
//     },
//     makingOmlett:function(item,item1,item2){
//         console.log(`Here is your omlett using Ingridients ${item} ${item1} ${item2}`)
//     }
//   };

// const newArr = [...restaurant.categories,`Panner Bhuji`,`Aloo Paratha`]
// const newArr2 = [...restaurant.mainMenu]
// const food = [...newArr,...newArr2]
// const type = restaurant.type;
// const typeArr = [...type,'h','i','m']
// const Ingridients = [`Butter`,`Cheese`,`Mushrooms`]
// restaurant.makingOmlett(...Ingridients)

// const {thu:{open,close}} = restaurant.openingHours;
// console.log(open,close) //this we have retrieved from an object.

// const {name,openingHours,mainMenu} = restaurant;
// console.log(name,openingHours,mainMenu)


  // We can destructure objects so that we can utilize then eaily when we are dealing with third party data.


// const [a,,,b] = restaurant.starterMenu

// // const [p,q] = restaurant.openingHours.thu

// console.log(restaurant.meal(2,0))


// const arr = [9,10,11]

// const newArr = [...arr,1,2,11]
// const newArr2 = [1,2,11, ...arr]
// console.log(newArr)
// console.log(newArr2)



const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

//function for getting the exact bookID based upon the input json.
function getBook(id) {
  return data.find((d) => d.id === id);
}








// let {hasMovieAdaptation,translations,genres,reviews} = book;

// genres.push('Musical')
// console.log(genres)


// const totalReview = (book) =>{
//   const goodR = book.reviews.goodreads?.reviewsCount;
//   const lib = book.reviews.librarything?.reviewsCount;
//   return goodR+lib
// }

// console.log(totalReview(book))
// const book = getBook(5)
// const {author,publicationDate,genres,translations} = book;
// const [first,second,...other] = genres              //... (REST operator and also known as SPRED operator)
// // console.log(translations.polish)
// // console.log(first,second,other)

// const updateBooks = {book,newAuthor:'Himanshu Joshi',booksBoughtFrom:'MG Road Bengaluru'} //like this it will not go into the object
// const updateBooks1 = {...book,newAuthor:'Himanshu Joshi',booksBoughtFrom:'MG Road Bengaluru',pages:1200} 
// //Also it updates the values of the object.

// console.log(updateBooks1)


const book = getBook(5)

const title = data.map((index) =>(
  index.title
))

const bObj = data.map((index)=>(
  {ObjTitle:index.title,
  ObjAuthor:index.author}
))

const dummyArr = []

const barr = data.map((index)=>(
  dummyArr.push(index.author)
))
console.log(dummyArr)
