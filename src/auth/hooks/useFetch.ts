export const UseFetch = async () => {
  const url = "https://ef35-181-176-117-138.ngrok-free.app/api/usuarios";
  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
};
