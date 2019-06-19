import emojiFlags from 'emoji-flags'

const flag = (code) => {
  const res = {
    img: '🌍',
    name: 'unknow'
  }
  if (code) {
    const emojiInfo = emojiFlags.countryCode(code)
    res.img = emojiInfo.emoji
    res.name = emojiInfo.name
  }
  return res
}

export default flag
