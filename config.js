/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['94706564978','94766960038'], // Add your number without + or spaces (e.g., 94766960038)
    ownerName: ['𝖩𝖠𝖭𝖨𝖸𝖠 𝖬𝖣', '𝖩𝖠𝖭𝖨𝖸𝖠'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '𝖩𝖠𝖭𝖨𝖸𝖠 𝖬𝖣',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '𝖩𝖠𝖭𝖨𝖸𝖠-𝖬𝖣!H4sIAAAAAAAAA5VUW5OiOBj9L3nVGu4qVnXVAKLiBVTwglvzECFCuEsCNkz537ewu6fnYXe29y0k4eR855zv+wmyHBO0RA0Y/wRFiWtIUbekTYHAGKjV9YpK0Ac+pBCMga4FO9GMMjy/W5vR69A47HjFbAoyupz203I3CnRWo/LiuA9ewKMPiuqSYO8PgHVAZxb0DsM7YworZ1cf/TSuj0aeHm6JnJ68m1Uy0co+Je4LeHSIEJc4C/QiRCkqYbJEzQbi8mv0DeV1u70xRkjgIeC4+t6zpgtz7S8385irajGRBhNncbmdM+9r9PG0SgRnzRaKins4ldacI67VjdKKTcXcDnZrNYJ/P1yOfPxGn+AgQ77ho4xi2nxZ9+UmQ/rtIjo8z6kZ6fEDXzm4Vr3sSdJV5V1vnTF04nN6+kXdpcY5DOY4N+671vNJL97Sa7usN7ZYkNFR05qoFKqz08ox+zvxTfmRlfj/6L6eTNVwSq29TUPD5HpH92QemqaO69ViFnDKbLS0j5HGTFL3a/TDxNUWhSuxiafubnkbVrf4ckgnbDLc1pjX5Tw98YY5PJ/Wn/Qhrco/sdSqYM/GG2a98MvNYAZFzuLVidNDuzCGSDiv7JxwKbxOTtoxT+uwSBmTxPutdNa3d+US2mFaem16zMQBK64RlO5Kot1fnhXFqDF8MOYefVCiABNaQorz7LnHs30A/dpGXonoU17Qi91TNIe1aOqM3hzx7sqrbMR7YkUcLKi9Od7ttfOkJVr8AvqgKHMPEYL8OSY0L5s1IgQGiIDxXz/6IEOv9M247jmB64MrLgndZ1WR5ND/cPXjEHpeXmXUbjJP6xaoBGP2cxtRirOAdDpWGSy9ENdICyElYHyFCUG/KkQl8sGYlhX61bVa7nfCc/bcFiTVAX2QPg3BPhgDWRyyA2kgysPRWPxOvt07UFgU3zJEQR9ksLsLIpjhBoI+SJ4/DXmWF1iO4yVR5AZj8Xu3/fjFtgP3EYU4IZ3BFuPG8nair7RjvGZnM0UPFC1QwGd1HzF5s4HMdSESykmkREh0G3K0lq8SnjjmdCWQw3qxi7j6YjYzVjFe/gEEjIHv+AYJzGlPP8XLeNYLllYi2emuFejWlKk9P4QR6V3ZnVlyt61yuFCdX0mSpM81azhTtVXVyqMMRiMNbtNz2BqSRZ+Z6gMf1dhDvz9GR6+MWy0YzC2mq3sTVZe9JNl7sWqWqwlv5HkcsoshIXFvaSnn44hXVH7g5Hao3JxWyy1OHrYOPQ/ZO6P08jWzigeuqrwF+NlAyfvgws9odb51n1eMnnPg3aH/8PGNdhc29tH/DeF9rvxLb6oX9dUU5cFdvBtCNVuX0wgT5AZsu7Pl4dTR9q584VsvpIoGHo8ffVAkkF7zMu1sTC9dYsq86qJrZNf8T1NACQx1G5hd0QkkVPlsBweniFCYFmDMDYe8II1EiX+7tSnzYg5JCMZA2MlnQQaPvwFcXHZpXAcAAA==',
    newsletterJid: '120363425330105126@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/janitha325/-.git', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: '𝖩𝖠𝖭𝖨𝖸𝖠 𝖬𝖣',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/janitha325',
      instagram: 'https://www.instagram.com/janiya_x_sh?igsh=OHR6aThub2YybjN3',
      youtube: 'https://youtube.com/@janiya-md?si=YrPJY2jZhYkTpN5H'
    }
};
  
