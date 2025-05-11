import Head from "next/head";

export default function DeleteData() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      <Head>
        <title>Delete My Data</title>
        <meta name="description" content="Request account and data deletion" />
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-600">
          Request Data Deletion
        </h1>
        <p className="mb-4">
          We&apos;re sorry to see you go. If you&apos;d like to delete your
          account and associated data, please email us at:
        </p>
        <p className="text-lg font-semibold text-red-500 mb-8">
          smarthome@gmail.com
        </p>
        <p>
          In your message, please include the email address you used to sign up
          so we can locate your account.
        </p>
      </div>
    </div>
  );
}
