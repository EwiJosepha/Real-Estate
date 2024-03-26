"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export function decodeBase64Url(token: string): any {
  const padding = '='.repeat((4 - (token.length % 4)) % 4);
  const base64 = (token + padding)
    .replace(/-/g, '+')
    .replace(/_/g, '/');

  const decoded = jwtDecode(base64);
  console.log(decoded);

  return decoded;
}

let parsedId: any
  // const [parseId, setParseId] = useState<number | undefined>(undefined)
  if (typeof localStorage !== "undefined") {
    const agentCurrentId: { id?: number, email?: string, iat?: number, exp?: number } = JSON.parse(localStorage.getItem("decoded") as string);
    parsedId = agentCurrentId?.id
    // setParseId(agentCurrentId.id)
  }





// console.log(parseId);
export const loginUrl = "http://localhost:4000/auth/signin"
export const propertiesForAgent = `http://localhost:4000/properties/agent/${parsedId}`
export const getAllProperties = "http://localhost:4000/properties"
export const searchByRoom = `http://localhost:4000/properties/room/`
export const agentInfo = `http://localhost:4000/api/v1/agent/${parsedId}`
export const logOutUrl = "http://localhost:4000/auth/signout"

export const agentdata = () => {
  return useQuery({
    queryKey: ["agent-name"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:4000/api/v1/agent/${parsedId}`)
      return data
    }
  })
}

export function searchRooms(searchParams: string) {
  const { data } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:4000/properties/room/${searchParams}`)
      return data
    }
  })

  return { data }

}