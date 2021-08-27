let handler = async (m, { conn, args }) => {

  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'

  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))

  for (let allmem of allmem) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [allmem])

}

handler.help = ['kickall', '-'].map(v => v + ' allmem')

handler.tags = ['admin']

handler.command = /^(kickall|\-)$/i

handler.owner = true

handler.mods = true

handler.premium = false

handler.group = true

handler.private = false

handler.admin = true

handler.botAdmin = true

handler.fail = null

handler.limit = true

module.exports = handler

© 2021 GitHub, Inc
