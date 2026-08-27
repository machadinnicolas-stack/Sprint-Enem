export default function handler(req: any, res: any) {
  res.status(200).json({ status: 'ok', serverTime: new Date().toISOString() });
}
