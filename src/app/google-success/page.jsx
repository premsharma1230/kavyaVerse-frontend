"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleSuccess = () => {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email");

  useEffect(() => {
    if (email) {
      // You can set this in a global context or localStorage
      localStorage.setItem("userEmail", email);
      router.push("/"); // Or any protected route
    }
  }, [email]);

  return <div className="p-4">Logging you in with Google...</div>;
};
export default GoogleSuccess;
