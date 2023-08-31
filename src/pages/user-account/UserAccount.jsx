import UpdateAccount from "./UpdateAccount";
import UpdatePassword from "./UpdatePassword";

export default function UserAccount() {
  return (
    <section className="account section">
      <div className="user__account-content grid">
        <UpdateAccount />
        <UpdatePassword />
      </div>
    </section>
  );
}
