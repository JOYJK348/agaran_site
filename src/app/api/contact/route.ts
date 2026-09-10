import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log structured lead in server environment
    console.log("=== NEW DYNAMIC SMART FORM LEAD RECEIVED ===");
    console.log(JSON.stringify(body, null, 2));

    // Form structured lead data response
    const leadResponse = {
      success: true,
      message: "Lead successfully recorded",
      leadId: `AGR-${Date.now().toString().slice(-6)}`,
      receivedAt: new Date().toISOString(),
      leadData: {
        intent: body.intent || "Not specified",
        category: body.category || "General Enquiry",
        answers: body.answers || {},
        timeline: body.timeline || "Not specified",
        budget: body.budget || "Not specified",
        contact: body.contact || {},
      },
    };

    return NextResponse.json(leadResponse, { status: 200 });
  } catch (error) {
    console.error("Error processing contact lead:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process lead request" },
      { status: 500 }
    );
  }
}
