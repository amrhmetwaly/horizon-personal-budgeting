import React from 'react';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState, useCallback, useRef } from "react";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const safeNavigate = useCallback((path: string) => {
    if (isNavigatingRef.current) return;

    isNavigatingRef.current = true;
    router.push(path).finally(() => {
      isNavigatingRef.current = false;
    });

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }
    navigationTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 5000); // Reset after 5 seconds in case the navigation fails
  }, [router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && router.pathname !== '/login' && router.pathname !== '/signup') {
      safeNavigate('/login');
    }
  }, [isLoading, isAuthenticated, router.pathname, safeNavigate]);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return <Component {...pageProps} />;
}
