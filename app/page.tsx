// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 text-gray-800 flex flex-col items-center justify-center px-6">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy and user data information"
        />
      </Head>

      <main className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-purple-700">
          Welcome to Our App
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          We are committed to protecting your data and ensuring transparency.
          Read our full privacy policy to understand how we handle your
          information.
        </p>
        <Link
          href="/privacy"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          View Privacy Policy
        </Link>
      </main>

      <footer className="mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MohammedAmrani. All rights reserved.
      </footer>
    </div>
  );
}
