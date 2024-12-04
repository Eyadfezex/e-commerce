"use client";

import { Button, cn, Input, Link, Switch } from "@nextui-org/react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React, { useMemo, useState } from "react";
import google from "@/public/assets/svgs/google-icon-logo-svgrepo-com.svg";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

// Component: A login form with email, password, remember-me toggle, and Google sign-in option
export const CredentialsForm = () => {
  // State for password visibility
  const [isVisible, setIsVisible] = useState(false);

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // State for submission handling
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggles the password visibility between plain text and masked
  const toggleVisibility = () => setIsVisible(!isVisible);

  // Validates email format using a regex pattern
  const validateEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  // Determines if the email is invalid based on its value and format
  const isEmailInvalid = useMemo(() => {
    if (email === "") return false; // Skip validation for empty input
    return !validateEmail(email);
  }, [email]);

  // Updates the email state when the input value changes
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  // Updates the password state when the input value changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  // Toggles the remember-me switch
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  // Handles the form submission process
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return; // Ensure inputs are not empty

    setIsSubmitting(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false, // Prevent redirect to handle errors gracefully
    });

    setIsSubmitting(false);

    if (result?.error) {
      setErrorMessage(result.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col max-w-[360px] min-w-[345px] divide divide-y">
      <div className="flex flex-col gap-6 pb-8">
        <h2 className="text-xl font-Bold">Nice to see you again</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            {/* Email Input Field */}
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              color={isEmailInvalid ? "danger" : "default"}
              required
              radius="sm"
              classNames={{
                label: cn("ml-4"),
                input: cn("text-base "),
                inputWrapper: cn(" border pl-4 py-[20px]"),
              }}
              label="Email"
              placeholder="Email or phone number"
              labelPlacement="outside"
            />
            {/* Password Input Field */}
            <Input
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              required
              radius="sm"
              classNames={{
                label: cn("ml-4"),
                input: cn("text-base "),
                inputWrapper: cn(" border pl-4 py-[20px]"),
              }}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <IoEye className="text-2xl text-default-600 pointer-events-none" />
                  ) : (
                    <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              label="Password"
              placeholder="Enter password"
              labelPlacement="outside"
            />
            {/* Remember Me and Forgot Password Section */}
            <div className="flex items-center justify-between mt-1">
              <div>
                <Switch
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  aria-label="Automatic updates"
                  size="sm"
                >
                  <span className="text-sm font-semibold">Remember me</span>
                </Switch>
              </div>
              <Link href="#">Forgot password?</Link>
            </div>
            {/* Submit Button */}
            {errorMessage && (
              <p className="text-danger text-sm">{errorMessage}</p>
            )}
            <Button
              color="primary"
              className="font-semibold text-base mt-3 tracking-wider"
              radius="sm"
              type="submit"
              onClick={() => handleSubmit}
              disabled={isSubmitting || (!email && !password)}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
      {/* Google Sign-In Section */}
      <div className="pt-8 flex flex-col items-center gap-6">
        <Button
          radius="sm"
          className="bg-[#333333] w-full"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src={google} alt="google" />
          <span className="text-white">Or sign in with Google</span>
        </Button>
        <div className="flex items-center gap-3 text-sm">
          <span>Dont have an account?</span>
          <Link href="#" className="text-sm">
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};
