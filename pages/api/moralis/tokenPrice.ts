import Moralis from "moralis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!Moralis.Core.isStarted) {
      await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
      });
    }

    const response = await Moralis.EvmApi.token.getTokenPrice({
      chain: "0x38",
      address: "0xf04ab1a43cba1474160b7b8409387853d7be02d5",
      include: "percent_change",
    });

    const tokenPrice = response.raw.usdPrice;

    res.status(200).json({ tokenPrice });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching token information from Moralis" });
  }
}