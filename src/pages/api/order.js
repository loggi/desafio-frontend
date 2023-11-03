import { getOrder } from "../repositories/InMemoryRepository"

const order = async (req, res) => {
  try {
    const orderObject = await getOrder(req.query.orderNumber)

    res.status(200).json({ order: orderObject })
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}

export default order
