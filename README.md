# Interview Questions - Blog Task
# # I’ll pick:

# Differences between interfaces and types in TypeScript

Use of keyof keyword with an example
# TypeScript এর Interfaces এবং Types এর মধ্যে পার্থক্য

TypeScript এ interface এবং type দুইটাই type definitions এর জন্য ব্যবহৃত হয়, কিন্তু এগুলোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

১. Interface

সাধারণত object structure describe করতে ব্যবহার করা হয়।

Interface extendable, অর্থাৎ নতুন properties যোগ করতে পারেন:

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}

const emp: Employee = {
  name: "Rahim",
  age: 30,
  salary: 50000
};


Declaration merging সমর্থন করে, অর্থাৎ একই নামে একাধিক interface declare করলে সব merge হয়ে যায়।

২. Type

Type alias দিয়ে আপনি primitive, union, intersection, tuple বা object type define করতে পারেন।

একবার declare করলে extend করা যায় না।

type ID = string | number;

type Person = {
  name: string;
  age: number;
};


Declaration merging সম্ভব নয়।

✅ Summary of Differences:

Feature	Interface	Type
Extendable	হ্যাঁ	সীমিত (intersection ব্যবহার করে possible)
Declaration Merging	হ্যাঁ	না
Can represent unions/intersections	না	হ্যাঁ
Use case	Object shape	Flexible types (union, intersection, tuple)
TypeScript এর keyof Keyword

keyof keyword একটি object type এর সকল key কে type হিসেবে represent করতে দেয়।

Example
type Person = {
  name: string;
  age: number;
  email: string;
};



# keyof ব্যবহার
type PersonKeys = keyof Person; // "name" | "age" | "email"

// Practical usage
const key1: PersonKeys = "name";  // ✅ ঠিক আছে
const key2: PersonKeys = "salary"; // ❌ Error: 'salary' নেই Person type এ


ব্যবহারিক সুবিধা:

Generic function এ type safety নিশ্চিত করে।

Object এর key-সমূহকে dynamically handle করতে সাহায্য করে।

function getValue(obj: Person, key: keyof Person) {
  return obj[key];
}

const p: Person = { name: "Rahim", age: 25, email: "rahim@example.com" };
console.log(getValue(p, "age")); // 25


keyof ব্যবহার করলে TypeScript নিশ্চিত করবে যে সঠিক key ব্যবহার করা হয়েছে, runtime error কম হবে।
