import { jwtDecode } from "jwt-decode";

 export function decodeBase64Url(token: string): any {
  const padding = '='.repeat((4 - (token.length % 4)) % 4);
  const base64 = (token + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

  const decoded = jwtDecode(base64);
  console.log(decoded);

  return decoded;
}

export const loginUrl = "http://localhost:4000/auth/signin"