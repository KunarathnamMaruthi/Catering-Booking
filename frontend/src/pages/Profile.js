function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>My Profile</h2>

      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <button onClick={() => {
        localStorage.clear();
        window.location.href = "/login";
      }}>
        Logout
      </button>
    </div>
  );
}

export default Profile;