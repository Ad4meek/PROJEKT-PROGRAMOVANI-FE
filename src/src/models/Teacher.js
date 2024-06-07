export const getTeachers = async () => {
    const req = await fetch(`http://localhost:3000/teachers`, {
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
  export const getTeacher = async (id) => {
    const req = await fetch(`http://localhost:3000/teachers/${id}`, {
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
  export const createTeacher = async (formData) => {
    const req = await fetch(`http://localhost:3000/teachers`, {
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

  export const deleteTeacher = async (id) => {
    const req = await fetch(`http://localhost:3000/teachers/${id}`, {
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