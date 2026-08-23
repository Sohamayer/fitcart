import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";
import "./page.css";

export const metadata = {
  title: "My Account | FitCart",
};

export default async function AccountPage() {
  const customer = await getSession();

  if (!customer) {
    redirect("/login?redirect=/account");
  }

  const address = customer.defaultAddress;

  return (
    <main className="account-page">
      <section className="account-hero">
        <h1>My Account</h1>
        <p>Manage your FitCart profile and addresses.</p>
      </section>

      <section className="account-content">
        <div className="account-card">
          <h2>Profile</h2>
          <div className="account-row">
            <span className="account-label">Name</span>
            <span>{customer.firstName} {customer.lastName}</span>
          </div>
          <div className="account-row">
            <span className="account-label">Email</span>
            <span>{customer.emailAddress?.emailAddress}</span>
          </div>
        </div>

        <div className="account-card">
          <h2>Default Address</h2>
          {address ? (
            <div className="account-address">
              <p>{address.address1}</p>
              {address.address2 && <p>{address.address2}</p>}
              <p>{address.city}, {address.province} {address.zip}</p>
              <p>{address.country}</p>
            </div>
          ) : (
            <p className="account-empty">No address saved yet.</p>
          )}
        </div>

        <div className="account-card">
          <h2>All Addresses</h2>
          {customer.addresses?.edges?.length ? (
            <ul className="account-address-list">
              {customer.addresses.edges.map(({ node }) => (
                <li key={node.id}>
                  {node.address1}, {node.city}, {node.province} {node.zip}
                </li>
              ))}
            </ul>
          ) : (
            <p className="account-empty">No saved addresses.</p>
          )}
        </div>
      </section>
    </main>
  );
}