import { getCookie } from "cookies-next";

export function getCookieCliente() {
  const token = getCookie("session");
  return token;
}
