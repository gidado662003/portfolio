const data = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
  },
  {
    id: 3,
    name: "Alice Johnson",
  },
  {
    id: 4,
    name: "Bob Brown",
  },
  {
    id: 5,
    name: "Charlie Davis",
  },
];

console.log(data.map(() => 0));
console.log(data.map(() => 0).map((_, index) => index));
