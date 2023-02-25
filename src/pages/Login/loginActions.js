async function login({ queryKey }) {
  const { username, password } = queryKey[1];

  const res = await fetch(`url`, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: { username: username, password: password },
  });

  if (!res.ok) {
    throw new Error(`login failed for user ${username}`);
  }

  return res.json();
}

export default login;
