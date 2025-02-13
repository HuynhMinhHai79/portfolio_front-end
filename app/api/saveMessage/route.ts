import { saveMessage } from '@/ultils/db';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("Received:", body);
      const query = await saveMessage(body.message);

        return NextResponse.json({ success: true, message: "Message received!" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
    }


}