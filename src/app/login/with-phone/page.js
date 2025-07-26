"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const PhoneOtpLogin = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("phone"); // "phone" or "otp"
  const [message, setMessage] = useState("");

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login-with-phone`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (res.ok) {
        setStep("otp");
        setMessage("OTP sent to your phone");
      } else {
        setMessage(data.message || "Failed to send OTP");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful!");
        router.push("/"); // ✅ redirect to home
      } else {
        setMessage(data.message || "OTP verification failed");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={step === "phone" ? handlePhoneSubmit : handleOtpSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center">Login with Phone</h2>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            disabled={step === "otp"}
          />
        </div>

        {step === "otp" && (
          <div className="space-y-2">
            <Label htmlFor="otp">OTP</Label>
            <Input
              id="otp"
              type="text"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        )}

        <Button type="submit" className="w-full">
          {step === "phone" ? "Send OTP" : "Verify OTP"}
        </Button>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default PhoneOtpLogin;
