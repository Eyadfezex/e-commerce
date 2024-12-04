"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const authRedirect = (
  WrappedComponent: React.ComponentType,
  redirectPath: string = "/dashboard" // Path to redirect authenticated users
) => {
  const ComponentWithAuthRedirect = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (!router) return; // Ensure the router is available

      if (status === "authenticated") {
        // Redirect authenticated users to the specified path
        router.replace(redirectPath);
      }
    }, [status, router, redirectPath]);

    if (status === "loading") {
      return <div>Loading...</div>; // Show a loading state while the session is being determined
    }

    // If the user is authenticated, prevent rendering the sign-in page
    if (status === "authenticated") {
      return null;
    }

    // Render the WrappedComponent if unauthenticated
    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuthRedirect;
};

export default authRedirect;
