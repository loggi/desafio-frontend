const get = async (endpoint: string, config?: Object) => {
  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const post = async (endpoint: string, data?: Object) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export { get, post };
