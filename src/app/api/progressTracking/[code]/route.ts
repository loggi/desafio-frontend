import { NextRequest, NextResponse } from "next/server"
import trackList from "../../../../data/trackList.json"

export const GET = async (req: NextRequest, context: any) => {
  const { code } = context.params
  const noContentMessage = {
    message: "Nenhum pedido encontrado para esse código.",
  }

  const trackDetails =
    trackList.find((list) => list.id === code) || noContentMessage

  return NextResponse.json(trackDetails)
}
