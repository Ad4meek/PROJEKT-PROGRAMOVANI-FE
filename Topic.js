export const getTopics = async () => {
    const req = await fetch(`http://localhost:5000/topics`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg
    }
  };
  export const getTopic = async (id) => {
    const req = await fetch(`http://localhost:5000/topics/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await req.json();
    
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg
    }
  };
  export const createTopic = async (formData) => {
    const req = await fetch(`http://localhost:5000/topics`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg
    }
  };
  
  export const deleteTopic = async (id) => {
    const req = await fetch(`http://localhost:5000/topics/${id}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const data = await req.json();
    return {
      status: req.status,
      payload: data.payload,
      msg: data.msg
    }
  };