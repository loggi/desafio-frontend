import { NextRequest, NextResponse } from "next/server"
import { trackList } from "../../../../data/trackList"

export const GET = async (req: NextRequest, context: any) => {
  const { code } = context.params
  const trackDetails = trackList.find((list) => list.id === code) || null

  return NextResponse.json(trackDetails)
}
