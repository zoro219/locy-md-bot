/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const {
	System,
	isPrivate,
	sendGitInfo,
	getIg,
	getJson,
	IronMan,
	axios,
	githubstalk,
	GetPinterest,
	shuffleArray
} = require("../lib/");


System({
     pattern: 'ig ?(.*)',
     fromMe: isPrivate,
     desc: "Search Instagram Profile",
     type: "search",
}, async (message, match) => {
  try {
    if (!match) {
      return await message.reply('_Please provide an Instagram *username*_ *Example: .ig sedboy.am*');
    } else {
      if (isUrl(match)) {
        return await message.reply("_Please provide an Instagram *username*_ *Example: .ig sedboy.am*");
      } else {
        const { result } = await getIg(`${encodeURIComponent(match)}`);
        const { avatar, username, name, description, posts, followers, following } = result;
        await message.client.sendMessage(message.chat, {
          image: { url: avatar },
          caption: `*⭒ Username :* ${username}\n*⭒ Nickname :* ${name}\n*⭒ Followers :* ${followers}\n*⭒ Following :* ${following}\n*⭒ Post :* ${posts}\n*⭒ Description :* ${description}`
        }, {quoted: message.data});
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


System({
     pattern: "searchpin",
     fromMe: isPrivate,
     desc: "Search pinterest image",
     type: "search",
}, async (message, match) => {
  try {
    if (!match) {
      return await message.reply('_*Example: loki*_');
    } else {
      if (isUrl(match)) {
        return await message.reply("_*Example: loki*_");
      } else {
        const urls = await GetPinterest(match);
        for (const url of urls) {
          await message.send(url, { quoted: message.data }, "image");
        }
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


System({
	pattern: "github",
	fromMe: isPrivate,
	desc: "Fetch GitHub user information",
	type: "search",
},
async (message, match) => {
	function _0x1e19(_0xaf6ea,_0x5188ba){const _0x259e75=_0x2bc4();return _0x1e19=function(_0x3f74aa,_0x2175cf){_0x3f74aa=_0x3f74aa-(0x1500+-0x1437+-0x3d);let _0x345257=_0x259e75[_0x3f74aa];return _0x345257;},_0x1e19(_0xaf6ea,_0x5188ba);}const _0x452de8=_0x1e19;(function(_0x3ab9cb,_0x5c022e){const _0x159fc5=_0x1e19,_0x68edb1=_0x3ab9cb();while(!![]){try{const _0x1f3b6d=parseInt(_0x159fc5(0xab))/(-0x62*-0xe+-0x22e0+-0xb*-0x2af)+-parseInt(_0x159fc5(0xc7))/(0x2*0x10f1+-0x472*0x3+-0x148a)*(-parseInt(_0x159fc5(0xae))/(-0x14d6+-0x2481+0x395a))+-parseInt(_0x159fc5(0xb5))/(-0xfb3+0x1*0x1f0b+-0xf54)*(parseInt(_0x159fc5(0xbf))/(0x8b6+-0xb3f+-0x28e*-0x1))+-parseInt(_0x159fc5(0x92))/(0x14d5+-0xd64+-0x1*0x76b)*(parseInt(_0x159fc5(0xb6))/(-0x437*0x3+-0x26a7*-0x1+-0x19fb))+parseInt(_0x159fc5(0x98))/(-0xe95*0x1+0x1478+-0x5db)*(parseInt(_0x159fc5(0xb9))/(0xf57+-0x1*0x18f5+0x9a7))+-parseInt(_0x159fc5(0xc8))/(-0x2144+0x173+-0x1*-0x1fdb)*(parseInt(_0x159fc5(0xca))/(0x2273+-0x627+-0x1c41))+parseInt(_0x159fc5(0x97))/(0x1b39+-0x196e+-0x1bf);if(_0x1f3b6d===_0x5c022e)break;else _0x68edb1['push'](_0x68edb1['shift']());}catch(_0x207509){_0x68edb1['push'](_0x68edb1['shift']());}}}(_0x2bc4,0x3fba6+-0x1*-0xa3483+-0x6aa9e),match=match);if(!match)return await message[_0x452de8(0xba)](_0x452de8(0xa0)+_0x452de8(0x96)+_0x452de8(0x99)+_0x452de8(0x94)+_0x452de8(0xaf));try{const userData=await githubstalk(match);if(userData){const responseMessage=_0x452de8(0xbd)+_0x452de8(0xb4)+(_0x452de8(0xb7)+userData[_0x452de8(0x9d)]+'\x0a')+(_0x452de8(0x8d)+(userData[_0x452de8(0x90)]||'-')+'\x0a')+(_0x452de8(0xb3)+(userData[_0x452de8(0xa5)]||'-')+'\x0a\x0a')+(_0x452de8(0x8e)+userData['id']+'\x0a')+(_0x452de8(0xc9)+_0x452de8(0xaa)+userData[_0x452de8(0xb0)]+'\x0a')+(_0x452de8(0xc0)+userData[_0x452de8(0xad)]+'\x0a')+(_0x452de8(0x9c)+(userData[_0x452de8(0xb2)]||'-')+'\x0a')+(_0x452de8(0xc5)+(userData[_0x452de8(0xc2)]||'-')+'\x0a')+(_0x452de8(0x93)+(userData[_0x452de8(0xbb)]||'-')+'\x0a')+(_0x452de8(0x8c)+(userData[_0x452de8(0xc4)]||'-')+'\x0a')+(_0x452de8(0xb1)+_0x452de8(0xa4)+userData[_0x452de8(0x95)+'s']+'\x0a')+(_0x452de8(0x91)+_0x452de8(0xa1)+userData[_0x452de8(0xa9)+'s']+'\x0a')+(_0x452de8(0x9a)+'\x20'+userData[_0x452de8(0xa8)]+'\x0a')+(_0x452de8(0xcb)+'\x20'+userData[_0x452de8(0xb8)]+'\x0a')+(_0x452de8(0xc3)+_0x452de8(0xbe)+userData[_0x452de8(0x9b)]+'\x0a')+(_0x452de8(0xc6)+_0x452de8(0xa2)+userData[_0x452de8(0xcc)]);await message[_0x452de8(0xba)](responseMessage);}else await message[_0x452de8(0xba)](_0x452de8(0xa6)+_0x452de8(0xa3)+_0x452de8(0x8f));}catch(_0x25246b){console[_0x452de8(0x9e)](_0x25246b),await message[_0x452de8(0xba)](_0x452de8(0x9f)+_0x452de8(0xac)+_0x452de8(0xc1)+_0x452de8(0xbc)+_0x452de8(0xa7)+_0x452de8(0xaf));}function _0x2bc4(){const _0xbb6d4f=['ed\x20At:\x20','found\x20on\x20G','os:\x20','bio','*User\x20not\x20','\x20user\x20info','followers','publicGist','L:\x20','430564IcnGIT','occurred\x20w','type','843wYFsQa','rmation*','url','Public\x20Rep','company','Bio:\x20','er\x20Info*\x0a\x0a','21272VXVUeP','15841MECCET','Username:\x20','following','45bxQLkx','reply','location','ing\x20GitHub','*GitHub\x20Us','eated\x20At:\x20','865qrqnAz','Type:\x20','hile\x20fetch','blog','Account\x20Cr','email','Blog:\x20','Last\x20Updat','1574OQjQHG','637430Rkumeu','Profile\x20UR','165GbLUNk','Following:','updatedAt','Email:\x20','Name:\x20','ID:\x20','itHub*','name','Public\x20Gis','456eOPJAG','Location:\x20','fetch\x20info','publicRepo','\x20GitHub\x20us','20894040BHqUXx','237128maSJLc','ername\x20to\x20','Followers:','createdAt','Company:\x20','username','error','*An\x20error\x20','*Provide\x20a','ts:\x20'];_0x2bc4=function(){return _0xbb6d4f;};return _0x2bc4();}
});


System({
	pattern: "gpt",
	fromMe: isPrivate,
	desc: "open ai",
	type: "search",
},
async (message, match) => {
	const _0x281044=_0x36b2;function _0x12e0(){const _0x28a892=['text','\x20process.','An\x20error\x20o','No\x20result\x20','535tfzvwX','send','2085162uMbmsD','again\x20late','8OnfkuF','2134167eouIbH','1050307cpnRIr','14308533XioZKM','6210396VpRNfF','age','32380atChPj','https://ae','ccurred.\x20P','No\x20text\x20to','mt.me/open','lease\x20try\x20','ai?text=','reply_mess','3200613EJLZTk','found.'];_0x12e0=function(){return _0x28a892;};return _0x12e0();}(function(_0x34aa95,_0x43e522){const _0x2ce329=_0x36b2,_0x218872=_0x34aa95();while(!![]){try{const _0x5956d3=-parseInt(_0x2ce329(0x120))/(-0xa+0x914+-0x909)+parseInt(_0x2ce329(0x11c))/(-0x2*0x23b+-0x165a+-0x2*-0xd69)+-parseInt(_0x2ce329(0x12c))/(-0x24a8+-0x1*0x9dc+0x2e87)+-parseInt(_0x2ce329(0x124))/(-0x1085+0x15f1+-0x15a*0x4)*(-parseInt(_0x2ce329(0x11a))/(0x2258+0x1b1c+0x1*-0x3d6f))+-parseInt(_0x2ce329(0x122))/(-0x220+-0x1015*0x2+-0x4*-0x894)+parseInt(_0x2ce329(0x11f))/(-0x2a*0x43+-0x1*-0x1253+0x37*-0x22)+parseInt(_0x2ce329(0x11e))/(0x511*0x5+-0x3*0x2a+-0x57*0x49)*(parseInt(_0x2ce329(0x121))/(-0x23d1*0x1+-0x245*0xc+0x3f16));if(_0x5956d3===_0x43e522)break;else _0x218872['push'](_0x218872['shift']());}catch(_0xaae331){_0x218872['push'](_0x218872['shift']());}}}(_0x12e0,0xf94a0+0x3d8a8+-0x97d74));let textToUse=message[_0x281044(0x12b)+_0x281044(0x123)][_0x281044(0x12e)]||match;function _0x36b2(_0x5b390b,_0xf7e4c){const _0x573463=_0x12e0();return _0x36b2=function(_0x38762f,_0x5ea930){_0x38762f=_0x38762f-(-0x1c16+0x2*-0x11fb+-0x1d*-0x23f);let _0x11f3b2=_0x573463[_0x38762f];return _0x11f3b2;},_0x36b2(_0x5b390b,_0xf7e4c);}if(textToUse)try{const {result}=await getJson(_0x281044(0x125)+_0x281044(0x128)+_0x281044(0x12a)+textToUse);result?await message[_0x281044(0x11b)](''+result):await message[_0x281044(0x11b)](_0x281044(0x119)+_0x281044(0x12d));}catch(_0x254813){await message[_0x281044(0x11b)](_0x281044(0x118)+_0x281044(0x126)+_0x281044(0x129)+_0x281044(0x11d)+'r.');}else await message[_0x281044(0x11b)](_0x281044(0x127)+_0x281044(0x117));
})


System({
    pattern: "img",
    fromMe: isPrivate,
    desc: "to search Google images",
    type: "search",
},
async (message, match) => {
    match = match || message.reply_message.text;
    if (!match) {
        return await message.reply("_Invalid command format. Please use e.g.: iron man,10_");
    } else {
        try {
            let searchTerm = "";
            let numberOfImages = 5;
            const commandParts = match.split(',');
            if (commandParts.length > 1) {
                searchTerm = commandParts[0].trim();
                numberOfImages = parseInt(commandParts[1].trim());
                if (isNaN(numberOfImages) || numberOfImages < 1 || numberOfImages > 10) {
                    return await message.reply("_Please specify a valid number between 1 and 10 for the images_");
                }
            } else {
                searchTerm = match.trim();
            }
            if (!searchTerm) {
                return await message.reply("_Invalid command format. Please use e.g.: iron man,10_");
            }
            const encodedSearchTerm = encodeURIComponent(searchTerm);
            const bb = await IronMan(`ironman/s/google/image?img=${encodedSearchTerm}`);
            const data = await getJson(bb);
            const urlsToSend = data.map(item => item.url);
            const send = await message.send(`_Downloading ${numberOfImages} images of ${searchTerm}_`);
            for (const imageUrl of urlsToSend.slice(0, numberOfImages)) {
                try {
                    await message.client.sendMessage(message.chat, {
                        image: { url: imageUrl }
                    });
                    await new Promise(resolve => setTimeout(resolve, 1000));
                } catch (imageError) {
                    console.error("Error with image:", imageError);
                }
            }
            await send.edit("_Downloaded_");
        } catch (error) {
            console.error("Error occurred:", error);
            return await message.reply("_Error in downloading images. Check the logs for details._");
        }
    }
});


System({
	pattern: 'google ?(.*)',
	fromMe: isPrivate,
	desc: "Google Search",
	type: "search",
}, async (message, match) => {
	const _0xca308c=_0x5b3f;(function(_0x8e319b,_0x4dd39c){const _0x2ff7c2=_0x5b3f,_0x1faab1=_0x8e319b();while(!![]){try{const _0xf924cf=parseInt(_0x2ff7c2(0x18d))/(-0x257a+0x5eb*-0x1+-0x15b3*-0x2)+parseInt(_0x2ff7c2(0x186))/(0x247e+-0x2*-0x1b6+0x1*-0x27e8)+-parseInt(_0x2ff7c2(0x185))/(-0xbdc+0x1b81+-0xfa2)*(-parseInt(_0x2ff7c2(0x18a))/(0x4de+-0x2463+-0xa83*-0x3))+parseInt(_0x2ff7c2(0x17d))/(0x1*-0x1f67+-0x1a3e*-0x1+0x3*0x1ba)*(parseInt(_0x2ff7c2(0x173))/(-0x1561+-0x9*-0x162+0x8f5))+-parseInt(_0x2ff7c2(0x194))/(0x7*-0x18e+-0xf*0x28d+0x312c)+parseInt(_0x2ff7c2(0x18b))/(-0x6be+-0x5d9+0x1*0xc9f)+parseInt(_0x2ff7c2(0x170))/(0x9*-0x2d7+-0x19a+0x1b32)*(-parseInt(_0x2ff7c2(0x184))/(0x675+-0x5*-0x609+-0x2*0x124c));if(_0xf924cf===_0x4dd39c)break;else _0x1faab1['push'](_0x1faab1['shift']());}catch(_0x303a16){_0x1faab1['push'](_0x1faab1['shift']());}}}(_0x4c5a,-0x27*-0x6742+0x11f042+0x58e0*-0x3e));try{match=match||message[_0xca308c(0x17c)+_0xca308c(0x172)][_0xca308c(0x189)];if(!match)return await message[_0xca308c(0x17f)](_0xca308c(0x16f)+_0xca308c(0x175)+_0xca308c(0x176));const api=IronMan(_0xca308c(0x18e)+_0xca308c(0x17e)+_0xca308c(0x193)+match),searchResults=await getJson(api),formattedText=searchResults[_0xca308c(0x183)]((_0x5556bf,_0x1ffcf3)=>'\x0a*'+(_0x1ffcf3+(0x1e9e+-0xf55*0x1+-0xf48))+(_0xca308c(0x192)+'*')+_0x5556bf[_0xca308c(0x197)]+_0xca308c(0x181)+_0x5556bf[_0xca308c(0x177)]+(_0xca308c(0x196)+_0xca308c(0x187))+_0x5556bf[_0xca308c(0x180)]+(_0xca308c(0x198)+_0xca308c(0x18f)+_0xca308c(0x195)))[_0xca308c(0x191)]('\x0a');return await message[_0xca308c(0x17f)](_0xca308c(0x178)+_0xca308c(0x190)+_0xca308c(0x17b)+formattedText);}catch(_0x565d77){return console[_0xca308c(0x179)](_0xca308c(0x17a)+_0xca308c(0x182),_0x565d77),await message[_0xca308c(0x17f)](_0xca308c(0x17a)+_0xca308c(0x171)+_0xca308c(0x174)+_0xca308c(0x188)+_0xca308c(0x18c));}function _0x5b3f(_0x4344bd,_0x1b301c){const _0x303155=_0x4c5a();return _0x5b3f=function(_0x3ee0c4,_0x33660c){_0x3ee0c4=_0x3ee0c4-(0x1f4d*0x1+0x25c0+-0x439e);let _0xbe9f9=_0x303155[_0x3ee0c4];return _0xbe9f9;},_0x5b3f(_0x4344bd,_0x1b301c);}function _0x4c5a(){const _0x13a09d=['join','\x20\x20Title:*\x20','rch?q=','9478917SqNUIU','─────\x0a\x0a','\x0a*Descript','title','_\x0a\x0a───────','_Give\x20a\x20*Q','9621vSRewx','ccurred\x20du','age','1444848IvCyCI','ring\x20the\x20G','uery*\x20to\x20s','earch_','link','\x0a\x20\x20\x20*↯\x20Goo','error','An\x20error\x20o','\x20result*\x0a\x0a','reply_mess','20yWXXfH','google/sea','send','snippet','*\x0a*Url:*\x20','ccurred:','map','35580ZkNvEp','44607BFiPyJ','1953192XVbWaH','ion:*\x20_','oogle\x20sear','text','348gGyMSS','12552608OLQIlN','ch.','1151046pyzjri','ironman/s/','──────────','gle\x20search'];_0x4c5a=function(){return _0x13a09d;};return _0x4c5a();}
});



System({
	pattern: 'gs ?(.*)',
	fromMe: isPrivate,
	desc: "Google Search",
	type: "search",
}, async (message, match) => {
	function _0x19b1(_0x5088c7,_0x27ab2e){const _0x29dc45=_0x370e();return _0x19b1=function(_0x48cb86,_0xc00666){_0x48cb86=_0x48cb86-(-0x2*0x1025+-0x141+0x2275);let _0x147723=_0x29dc45[_0x48cb86];return _0x147723;},_0x19b1(_0x5088c7,_0x27ab2e);}const _0x2e976d=_0x19b1;(function(_0x5ac492,_0x1c23b0){const _0x46a699=_0x19b1,_0x404158=_0x5ac492();while(!![]){try{const _0x2e2c77=parseInt(_0x46a699(0xeb))/(0x11+0x13ae+-0x13be)+parseInt(_0x46a699(0x103))/(-0x57*-0x51+0x1ff8+-0x3b7d)*(parseInt(_0x46a699(0xf9))/(0x1297*-0x1+-0x1d29+0x2fc3))+-parseInt(_0x46a699(0xea))/(-0x1*0x5c0+-0x1479+0x8bf*0x3)*(parseInt(_0x46a699(0xee))/(0x2*0xf4d+-0x1342+0xd*-0xdf))+-parseInt(_0x46a699(0x10e))/(-0x172e+-0xdfa+0x1*0x252e)*(-parseInt(_0x46a699(0xed))/(0x4e1*0x5+-0x259e+-0x2*-0x6a0))+parseInt(_0x46a699(0xf1))/(-0x302+0x2050+-0x1d46)*(-parseInt(_0x46a699(0x10b))/(-0x9*-0x1dc+0x627+-0x12*0x145))+parseInt(_0x46a699(0xf5))/(0x187c+0x22d8+0x1*-0x3b4a)*(parseInt(_0x46a699(0xf7))/(-0x4d*-0x25+0xb61+-0x27f*0x9))+-parseInt(_0x46a699(0xef))/(-0xb77*-0x1+-0x1*-0x1b6b+-0x26d6);if(_0x2e2c77===_0x1c23b0)break;else _0x404158['push'](_0x404158['shift']());}catch(_0x1eb048){_0x404158['push'](_0x404158['shift']());}}}(_0x370e,-0x69dbf+0x8eaa2+0x310e4));try{match=match||message[_0x2e976d(0xf3)+_0x2e976d(0x112)][_0x2e976d(0x113)];if(!match)return await message[_0x2e976d(0x111)](_0x2e976d(0x10d)+_0x2e976d(0x102)+_0x2e976d(0xf2));const api=IronMan(_0x2e976d(0xf0)+_0x2e976d(0x10f)+_0x2e976d(0x108)+encodeURIComponent(match)),searchResults=await getJson(api);if(searchResults[_0x2e976d(0x110)]>-0x1453+0x1040+-0x413*-0x1){const firstResult=searchResults[-0x223c+0x1e05+0x437],formattedText=_0x2e976d(0xfd)+_0x2e976d(0xfe)+firstResult[_0x2e976d(0x104)]+(_0x2e976d(0x100)+'\x20')+firstResult[_0x2e976d(0x105)]+(_0x2e976d(0xfa)+_0x2e976d(0xfb))+firstResult[_0x2e976d(0x115)]+_0x2e976d(0x114);return await message[_0x2e976d(0x111)](_0x2e976d(0x116)+_0x2e976d(0xf4)+_0x2e976d(0x109)+match+'*\x0a'+formattedText);}else return await message[_0x2e976d(0x111)](_0x2e976d(0xff)+_0x2e976d(0x10a)+_0x2e976d(0x107));}catch(_0x4f6aa8){return console[_0x2e976d(0x101)](_0x2e976d(0xfc)+_0x2e976d(0xf8),_0x4f6aa8),await message[_0x2e976d(0x111)](_0x2e976d(0xfc)+_0x2e976d(0x106)+_0x2e976d(0xec)+_0x2e976d(0xf6)+_0x2e976d(0x10c));}function _0x370e(){const _0x5b6732=['send','age','text','_\x0a\x0a','snippet','*Google\x20Se','119836xRkRzC','693168gXIaYQ','ring\x20the\x20G','3673586rCGTUB','5WeWqvd','7512636qUUHKc','ironman/s/','40wmewAV','earch_','reply_mess','arch\x20Resul','10QaMxRF','oogle\x20sear','1509937juvPYU','ccurred:','1263JpGXLv','\x0a*⬡\x20Descri','ption:*\x20_','An\x20error\x20o','\x0a*⬡\x20Title:','*\x20*','No\x20search\x20','*\x0a*⬡\x20Url:*','error','uery*\x20to\x20s','1522zcEfCo','title','link','ccurred\x20du','und.','rch?q=','t\x20Of\x20','results\x20fo','1202247lMlPzW','ch.','_Give\x20a\x20*Q','6BFbkws','google/sea','length'];_0x370e=function(){return _0x5b6732;};return _0x370e();}
});
