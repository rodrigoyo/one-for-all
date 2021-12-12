export default function handler(req, res) {
  const { password } = req.body;

  if (password !== process.env.MASTER_PASSWORD) {
    res.status(401).json({ message: 'unauthorized' });
  }

  res.status(200).json({ message: 'ok' });
}
