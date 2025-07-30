"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import HomePage from "../home/page";
import { toast } from "sonner";

const GoogleSuccess = () => {
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const email = params.get("email");
    const name = params.get("name");
    const token = params.get("token");

    if (email && token) {
      const user = { email, name };
      dispatch(setUser({ user, token }));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      toast.success("Logged in successfully via Google!", { duration: 2000 });
      setTimeout(() => router.push("/"), 2000);
    }
  }, [params]);

  return (
    <>
      <HomePage />
    </>
  );
};
export default GoogleSuccess;
