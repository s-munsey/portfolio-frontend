async function loginUser(username, password) {
  const uri = "http://localhost:4000/signin";

  const res = await fetch(uri, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });

  if (!res.ok) {
    throw new Error(`login failed for user ${username}`);
  }
  console.log(res.json);
  return res.json();
}

export default loginUser;
