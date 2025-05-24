export default function handler(req, res) {
  const { story } = req.body;
  const verdicts = [
    'You were wrong.',
    'They were wrong.',
    'Everyone sucks here.',
    'No one is the a*****.',
    'It’s complicated, but you could’ve handled it better.'
  ];
  const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
  res.status(200).json({ verdict });
}
