import { NextRequest, NextResponse } from "next/server";

export function GET(){
    console.log("inside get")
    return NextResponse.json({
        success: true,
        message: "hi from bb"
    })
}