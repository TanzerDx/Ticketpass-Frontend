import "../styles/UserIsBanned.css";

function UserIsBanned() {
  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="background-color-userIsBanned">
        <div className="content">
          <div className="userIsBanned-text">
            <h1>OOPS! YOU HAVE BEEN BANNED!</h1>
            <h2>
              Apparently, our moderation team has noticed suspicious activity
              related to your account.
            </h2>
            <h2>
              If you believe this claim is false, you can contact our support at
              cust@ticketpass.com or +31612345678.
            </h2>
          </div>

          <button
            onClick={logout}
            type="button"
            name="logout"
            className="button-logOut"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </>
  );
}

export default UserIsBanned;
