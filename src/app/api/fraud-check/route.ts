import { NextRequest, NextResponse } from "next/server";
import { fraudCheckDB } from "./fraudCheck.service";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mobile = searchParams.get("mobile");
  if (!mobile) {
    return NextResponse.json(
      { error: "Missing mobile parameter" },
      { status: 400 }
    );
  }
  try {
    const result = await fraudCheckDB(mobile);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
