
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `💝 Queen Hentai 💝, Enter the Instagram Username\n\n💝Example: ${usedPrefix + command} Queen Hentai` 
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *💝 Queen Hentai 💝* 
▢ *💝Number:* ${res.name} 
▢ *💝Username:* ${res.username}
▢ *💝followers:* ${res.followersH}
▢ *💝following:* ${res.followingH}
▢ *💝Bio:* ${res.description}
▢ *💝Posts:* ${res.postsH}

▢ *💝 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
Generated BY 💝 Queen Hentai 💝
└────────────`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['dl']
handler.command = ['igstalk'] 

export default handler