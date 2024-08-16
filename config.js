//Bot by VINOR KING//


require("./all/module")
global.owner = "255749750707" 
global.namaCreator = "DUDUU MENDEZ"
global.autoJoin = false 
global.antilink = true 
global.versisc = '6.𝟏' 
global.codeInvite = "https://whatsapp.com/channel/0029VaeDVzyF6smxnTiplY0N"
global.isLink = 'https://whatsapp.com/channel/0029VaeDVzyF6smxnTiplY0N'
global.sessionName = '{"noiseKey":{"private":{"type":"Buffer","data":"uOP/ii94raMLqRYw3luL9OmUzn5MUqPbxpGR3G8qcng="},"public":{"type":"Buffer","data":"66QXiMOxixh82ZwRGihS8rLhpLca+8cYh9YzvzJyox4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oCpFEnTUeb0VzD19p9l4OhpyzxpwoirJYpduDq9+g0c="},"public":{"type":"Buffer","data":"nvo0DlE8Z/ZFJYe/6KJwlg3TJDzsOyVJX5xurKPHckw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"mBm6iskvn2bLhFOeN12HZ/NKG1sZKtt40uTmI+8HPWs="},"public":{"type":"Buffer","data":"EaxOkzMtcU7/ZFVRPh9WsX5HXG8ldDJGF5WboQaTdBU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"MISy5dupdMu1mm15tkCNXLGY7TaOpwdbUbHIGakUsHA="},"public":{"type":"Buffer","data":"ZEGdvTN6zhInCdnmzX6v1xcuR1aCyES9FLvct+FbXl0="}},"signature":{"type":"Buffer","data":"FTtZy6AEU9mChK8mWzr6Js4YfMguhW2Ij/LBzvEwRl4jc6KT0bHBrkrrDVVYllaSyKo+c06yhKXNEfj+xIIUig=="},"keyId":1},"registrationId":224,"advSecretKey":"UnOk4ODe5zyHoqIX8FzRnIVrkSzx5vMCIoeWIPo2CYU=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"qgds2zTWQwG1jfeattvCdw","phoneId":"fe527f5a-964c-414e-adfb-37f106dce75d","identityId":{"type":"Buffer","data":"tusXzmkUp12ZKzJ7iogIjRzEo/8="},"registered":true,"backupToken":{"type":"Buffer","data":"eBKrrGEBYtTVYfcZjmRGoESRFv0="},"registration":{},"pairingCode":"RMN8HFGW","me":{"id":"255628871373:25@s.whatsapp.net","lid":"119091322961960:25@lid"},"account":{"details":"CJyu4IUFENHq5rUGGAEgACgA","accountSignatureKey":"OrkNHyTvbwxUuRffiTN2PvfFrlV8q0jd57aDI0Mzhmo=","accountSignature":"S5zMb8g4XcNXkXQMHcbU12A+OeR2uTTNqf9le1Og7bv5V5V4AuB2il/TPeYO0KiigYCTXUTYgau3N+c9boE6Aw==","deviceSignature":"jXbNAJwizjEdz6QFC1onbGYy2OSzMKe7wHNKl9MXP+0CdKN2O0c49qz5Xp9MBa4Hk6DLZgzP2tgvb9PLj6rKgQ=="},"signalIdentities":[{"identifier":{"name":"255628871373:25@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTq5DR8k728MVLkX34kzdj73xa5VfKtI3ee2gyNDM4Zq"}}],"platform":"android","lastAccountSyncTimestamp":1723446612,"myAppStateKeyId":"AAAAANNj"}'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "DUDUU MENDEZ" 
global.author = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
global.jumlah = "5" 
global.namabot = "𝐒𝚸𝚰𝐃𝚵𝚪-𝛁6" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
