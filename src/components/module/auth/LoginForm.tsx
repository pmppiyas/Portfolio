'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Eye, EyeOff, Github, Mail, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: session, status } = useSession();
  const hasShownWelcome = useRef(false);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    defaultValues: { email: "", password: "" },
  });


  const onSubmit = (data: LoginFormData) => {
    console.log("✅ Form Data:", data);
  };


  const handleSocialLogin = async (provider: "google" | "github") => {
    try {
      const res = await signIn(provider, { redirect: false });

      if (res?.ok) {
        console.log(res)
        toast.loading("Logging you in... ⏳");
        router.push("/");
      }
      if (res?.error) {
        toast.error("Login failed ❌");
        return;
      }

    } catch (error) {
      console.error("🔥 Login error:", error);
      toast.error("Something went wrong!");
    }
  };


  useEffect(() => {
    if (
      status === "authenticated" &&
      session?.user &&
      !hasShownWelcome.current
    ) {
      hasShownWelcome.current = true;
      toast.dismiss();
      toast.success(`Welcome ${session.user.name}! 🎉`);
    }
  }, [status, session]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted font-sans px-4">
      <div className="w-full max-w-sm p-6 space-y-6 bg-card text-card-foreground rounded-2xl border border-border shadow-md">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center p-2 rounded-md bg-muted border border-border">
            <User className="h-5 w-5 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in
          </p>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="icon" className="w-full">
            <Apple className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => handleSocialLogin("google")}
            variant="outline"
            size="icon"
            className="w-full"
          >
            <Mail className="h-5 w-5 text-[#EA4335]" />
          </Button>
          <Button
            onClick={() => handleSocialLogin("github")}
            variant="outline"
            size="icon"
            className="w-full"
          >
            <Github className="h-5 w-5" />
          </Button>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        {/* Email/Password Login */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
