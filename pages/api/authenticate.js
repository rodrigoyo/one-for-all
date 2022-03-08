export default function handler(req, res) {
  if (!req.body.password) {
    res.status(400).json({
      status_code: 0,
      error_msg: 'Require Params Missing',
    });
  }

  const { password } = req.body;

  if (password !== process.env.MASTER_PASSWORD) {
    res.status(401).json({ message: 'unauthorized' });
  }

  res.status(200).json({
    status_code: 1,
    message: 'ok',
  });
}
