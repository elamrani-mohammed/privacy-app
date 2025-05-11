import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Privacy Policy</h1>
      <p>Effective Date: May 11, 2025</p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal data such as your email address, device ID,
        usage data, and location information to provide app features.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        We use this data to deliver notifications, improve our services, and
        personalize user experience. Data is never sold.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        We may use third-party services like Appwrite and Firebase to manage
        authentication, analytics, and push notifications. These services may
        collect data in accordance with their own policies.
      </p>

      <h2>4. Data Retention & Deletion</h2>
      <p>
        You may request deletion of your account and associated data at any time
        by contacting us.
      </p>

      <h2>5. Children&apos;s Privacy</h2>
      <p>
        This app does not knowingly collect personal information from children
        under 13. If you believe such data has been collected, contact us to
        have it removed.
      </p>

      <h2>6. Contact</h2>
      <p>
        For any privacy-related inquiries, please email us at:{" "}
        <strong>mohammedamrani@email.com</strong>
      </p>

      <h2>7. Request Data Deletion</h2>
      <p>
        If you&apos;d like to request the deletion of your account and data,
        please visit: <Link href="/delete">Delete My Data</Link> or email us
        directly.
      </p>
    </main>
  );
}
