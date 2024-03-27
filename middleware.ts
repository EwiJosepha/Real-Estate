
import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  

    const verify = req.cookies.get("token")
    // const verify = JSON.parse(localStorage.getItem("decoded") as string)
    const url = req.url

    if (!verify && url.includes("/dashboard")) {
      return NextResponse.redirect("http://localhost:3000")
    }
  
    if (verify && url === "http://localhost:3000/login") {
      return NextResponse.redirect("http://localhost:3000/dashboard")
    }
  


}