"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // ✅ For app directory

export default function Login() {
  const router = useRouter(); // ✅

  const [form, setForm] = useState({ email: "", password: "", profession: "" });
  const [message, setMessage] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.status == 200) {
        router.push("/"); // ✅ Redirect after successful login
      } else {
        setMessage(data.message || "Login failed.");
      }

      setMessage(data.message || "Login successful!");
    } catch (err) {
      setMessage("Error logging in");
    }
  };
  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

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

        <Button type="submit" className="w-full">
          Login
        </Button>
        <div>
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a href="/signUP" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        <div>
          login with phone number?{" "}
          <a href="login/with-phone" className="text-blue-500 hover:underline">
            Phone Number Login
          </a>
        </div>
        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
