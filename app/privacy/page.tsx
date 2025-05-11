import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="How we collect and handle user data"
        />
      </Head>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-purple-700">
          Privacy Policy
        </h1>

        <p className="mb-4">
          Your privacy is important to us. This privacy policy explains how we
          collect, use, and protect your information when you use our app.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect personal information such as email address, usage data,
          and device information to provide and improve our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your data to provide features, send notifications, and improve
          app performance. We do not sell or share your information with third
          parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Deletion</h2>
        <p className="mb-4">
          You can request deletion of your account and associated data at any
          time by visiting our{" "}
          <a
            href="/delete"
            className="text-purple-600 underline hover:text-purple-800"
          >
            Delete My Data
          </a>{" "}
          page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
        <p>
          If you have any questions, contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-purple-600 underline"
          >
            smarthome@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
