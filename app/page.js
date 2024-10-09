"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the dashboard page when the app first opens
    router.push('/dashboard');
  }, [router]);

  return null;
}

