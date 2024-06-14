export const getCookie = async (formData) => {
  console.log("pepa");
  const req = await fetch(`http://localhost:5000/setcookie`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
    body: JSON.stringify(formData),
  });
  const data = await req.json();
  return {
    status: req.status,
    payload: data.payload,
    msg: data.msg,
  };
};
