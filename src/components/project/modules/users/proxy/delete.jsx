
export const DeleteUser = () => {
  const proxyDeleteUser = async (id) => {
    await fetch(
      `https://64da4698e947d30a260b10f5.mockapi.io/api/v1/lesson10/Phong/${id}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
  }

  return {
    proxyDeleteUser
  }
}