export const EditRoles = () => {
  const proxyEditRoles = async (showId, data) => {
    await fetch(
      `https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Roles/${showId}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  };
  return {
    proxyEditRoles
  } 
};
