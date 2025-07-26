"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
    profession: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 200 || res.status === 201) {
        router.push("/login"); // ✅ Redirect after successful signup
      } else {
        setMessage(data.message || "Sign up failed.");
      }
    } catch (err) {
      setMessage("Error signing up");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="profession">Profession</Label>
          <Input
            id="profession"
            type="text"
            name="profession"
            value={form.profession}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <div>
          <p className="text-center text-sm text-gray-500">
            You already account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
        <div>
          login with phone number?{" "}
          <a href="login/with-phone" className="text-blue-500 hover:underline">
            Phone Number Login
          </a>
        </div>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
