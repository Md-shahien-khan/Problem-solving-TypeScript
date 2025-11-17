

const formatValue = (value: string | number | boolean): string | number | boolean => {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  return !value; 
};





const getLength = (value: string | any[]): number => {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
  throw new Error("Invalid type");
};



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
const person2 = new Person("Alice", 25);





type Item = { title: string; rating: number };

const filterByRating = (items: Item[]): Item[] => items.filter(item => item.rating >= 4);


const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];




type User = { id: number; name: string; email: string; isActive: boolean };

const filterActiveUsers = (users: User[]): User[] => users.filter(user => user.isActive);

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true }
];






interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const available = book.isAvailable ? "Yes" : "No";
  return console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
};

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true
};

printBookDetails(myBook);





const getUniqueValues = (arr1: (number | string)[], arr2: (number | string)[]): (number | string)[] => {
  const result: (number | string)[] = [];

  for (let val of arr1) {
    if (!result.includes(val)) result.push(val);
  }

  for (let val of arr2) {
    if (!result.includes(val)) result.push(val);
  }

  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];




type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map(product => {
      const total = product.price * product.quantity;
      return product.discount ? total * (1 - product.discount / 100) : total;
    })
    .reduce((sum, price) => sum + price, 0);
};

const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 }
];