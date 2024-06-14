export const chooseTopic = async (formData) => {
    console.log("pepa");
    const req = await fetch(`http://localhost:5000/choose`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
      credentials: "include"
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data,
    }
  };