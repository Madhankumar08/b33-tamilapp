function Welcome({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>Hello, {name}  </h1>

    </div>

  );
}
