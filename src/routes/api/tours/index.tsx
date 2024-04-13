import { type RequestHandler } from "@builder.io/qwik-city";

const tours = [
  {
    id: 1,
    name: "Tour 1",
    price: 100,
    duration: 2,
    maxGroupSize: 10,
    difficulty: "easy",
    ratingsAverage: 4.5,
    ratingsQuantity: 4,
    summary: "Summary 1",
    description: "Description 1",
    imageCover:
      "https://res.cloudinary.com/dgiznxps9/image/upload/v1712778118/tourismo/keb1neo4uox8jry37hkf.webp",
    images: ["tour-1-1.jpg", "tour-1-2.jpg", "tour-1-3.jpg"],
    startDates: ["2021-12-16,10:00", "2022-01-16,10:00", "2022-12-16,10:00"],
  },
  {
    id: 2,
    name: "Tour 2",
    price: 200,
    duration: 3,
    maxGroupSize: 15,
    difficulty: "medium",
    ratingsAverage: 4.7,
    ratingsQuantity: 5,
    summary: "Summary 2",
    description: "Description 2",
    imageCover:
      "https://res.cloudinary.com/dgiznxps9/image/upload/v1712778118/tourismo/keb1neo4uox8jry37hkf.webp",
    images: ["tour-2-1.jpg", "tour-2-2.jpg", "tour-2-3.jpg"],
    startDates: ["2021-12-16,10:00", "2022-01-16,10:00", "2022-12-16,10:00"],
  },
];

export const onGet: RequestHandler = async ({ json }) => {
  json(200, tours);
};
