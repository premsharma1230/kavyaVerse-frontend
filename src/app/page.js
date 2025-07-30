"use client";
import { useSelector } from "react-redux";
import HomePage from "./home/page";

export default function Home() {
  const user = useSelector(state => state);
  console.log(user, "user+++");

  return <HomePage />;
}
