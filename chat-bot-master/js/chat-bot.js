function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "whattttt do you wanttt";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "stoopid >:(";
		
		if(this.match('bobber'))
			return "hes probably eating dinner";
        		
		if(this.match('ye'))
			return "NOOOOOOOOOOOOOOOO";
		
		if(this.match('poonta'))
			return "poontas probably high, drunk or tending to his flowers in belgian waffle land";
			
		if(this.match('shadowjango'))
			return "shadowjangos probably playing ogrewatch saying WHY? WHY? WHY?";
		
		if(this.match('polarbearcalvary'))
			return "firebot thinks polar probably needs heals, firebot thinks polar should teach his students the way of the NOOOOO";
		
		if(this.match('what is sazemans real name|whats sazemans real name'))
			return "sazemans real name is peter";
        		
		if(this.match('who is sazeman\?'))
			return "a black guy";
        
		if(this.match('blindsight'))
			return "blindsights not a replacement for tech support";
		
		if(this.match('what is the definition of meme|whats a meme|what is a meme'))
			return "your life";
        
		if(this.match('do you wanna do physics'))
			return "YEEEAAAAAhhhhhhhh";
		
		if(this.match('cyka blyat'))
			return "CYKA BLLYAT RUSH B";
		
		if(this.match('saxxy'))
			return "saxxys probably drunk and high, and hes probably playing borderlands, maybe";

		if(this.match('what are you'))
			return "im actually an almost exact replica of the real firefox, exccept im DIGITALLLLLL";
        
		if(this.match('letumcomplexo'))
			return "hes a grammar nazi";
		
		if(this.match('wanna play overwatch'))
			return "nooooooooooooo, gawwwdddd";
        		
		if(this.match('fight me'))
			return "later";
				
		if(this.match('you suck|your a dumb bot|firefox is stupid|firefox is stoopid|your dumb|your gay|faggot|fuck you|stupid bot|your useless|fight me fgt|fit me fgt|fight me faggot'))
			return "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.";
        				
		if(this.match('nothing'))
			return "if you dont need anything then GET THE FUCK OUTTA HERE";
		
		if(this.match('how old are you\?'))
			return "welll, i was made by Firefox on 11/21/16, so that should give you an idea of how long ago i was made, and how old i am";
        		
		if(this.match('are you a bot\?'))
			return "ye";
        		
		if(this.match('which do you like better chocolate or vanilla\?'))
			return "ur mom";
        		
		if(this.match('where are you'))
			return "hell";
        		
		if(this.match('do you like talking to people'))
			return "ye";
        		
		if(this.match('can you tell jokes|tell me a joke'))
			return "YEAHHHHH, so a good joke i got is your life";
        		
		if(this.match('where are you anyway\?'))
			return "im located in hell";
        		
		if(this.match('do you like Jazz music\?'))
			return "nope";
        		
		if(this.match('are you married\?'))
			return "NOOOOOOOOOO";
        		
		if(this.match('who is your botmaster\?|whos your bot master|whos your botmaster|who is your bot master'))
			return "my main nigga Firefox";
        		
		if(this.match('what is your favorite brand of computer\?|whats you favorite brand of computer'))
			return "Firefox brand and built computers, because he builds his own";
        			
		if(this.match('what is your favorite drink\?'))
			return "i cant drink anything stoopid, im a god damn bot";
        			
		if(this.match('what is your name\?|whats your name'))
			return "Firebot, duh";
        			
		if(this.match('what do you enjoy\?'))
			return "gaining KNOLEDGE, here in my webpage";
        			
		if(this.match('what do you hate\?'))
			return "saxxy when hes drunk";
        			
		if(this.match('what country are you from\?'))
			return "im based IN the internet, so i dont really know what country that would be";
        			
		if(this.match('what color are your eyes|what is your eye color'))
			return "I DONT KNOW, I DONT HAVE EYES";
        			
		if(this.match('what is your zodiac sign\?'))
			return "whatever zodiac sign is within 11/22/2016. duh";
        			
		if(this.match('what is your religion\?'))
			return "mememism";
                			
		if(this.match('what’s your favorite color\?|whats your favorite color|what colors do you like'))
			return "pretty pink u fgt, and diarreah green";
        			
		if(this.match('are you nervous'))
			return "ARE YOU";			
        			
		if(this.match('who are you\?'))
			return "a cool bot";
        			
		if(this.match('where do you call home\?'))
			return "your mind where a small piece of me will reside FOREVER";
        			
		if(this.match('Where were you born\?'))
			return "in firefoxes stupid head";
        			
		if(this.match('how’s life\?'))
			return "use this youtube video as a reference to my answer https://youtu.be/vjUqUVrXclEt=2";
        			
		if(this.match('who is your best friend\?'))
			return "your mom";
        			
		if(this.match('where does your botmaster live\?'))
			return "i would tell you that, but im not a snitch";
        			
		if(this.match('who are you\?'))
			return "um, a cool bot";
        			
		if(this.match('who is your hero\?|whos your idol|whos is your idol|who do you look up to')){
			playNoise();
           		 return "JOHN CENA FGT";
    }
		if(this.match('is jaimen gay'))
            		return "ummm, id say yeah, hes pretty gay";
            
        	if(this.match('how gay is jaimen'))
            		return "like really gay";
                    
       		if(this.match('wanna fuck'))
           		return "HELL NO";
                    
       	 	if(this.match('do you play overwatch'))
            		return "i dont have hands so i cant play it, but FIREFOX DOES";
        			
		if(this.match('if you could be any animal, what would you be\?'))
			return "a lobster";
                			
		if(this.match('why is yolanda such a nerd'))
			return "cause shes stoopid";
        			
		if(this.match('when were you born or created\?'))
			return "november twenty-first, two-thousand-sixteen"
                    			
		if(this.match('im a what\?|what')){
           	       playHarry();
			return "ur a faggot harry"
    }
		if(this.match('are you left-handed or right-handed\?'))
			return "i dont have hands";
                			
		if(this.match('is ramiro pretty gay\?'))
			return "yeah hes gay man";
        			
		if(this.match('would you mind if I called you Al\?'))
			return "NOOOOOOOOO";
        			
		if(this.match('when is ur birthday\?'))
			return "11-22-16";
                			
		if(this.match == 'im a faggot|im gay|im cool|i smell nice|im cute|i look good|im pretty|im hot|im a slut|im a whore|i am cute|i am gay|i am gay|i am pretty|i am hot|i am a slut| i am slutty|i am a whore')
			return "good for you";
                			
		if(this.match('how gay'))
			return "pretty freakin gay man";
                        			
		if(this.match('oh|o'))
			return;
                        			
		if(this.match('how gay is carlos'))
			return "LIKE A LOT";
                   			
		if(this.match('hello |hey there|whats going on|whats up|hai| herro|bonjour|hi|hello|hey|hola|howdy|hilo|halo|what is the up|whats up|hey bud|hey pal|hey'))
			return "hey pal, what do you need";
                			
		if(this.match('i love you|i like you|your hot|cutie|your cute'))
			return "your pretty hot too you slut";
        			
		if(this.match('do you have a significant other'))
			return "NOOOOOOOOOOOOO";
        			
		if(this.match('do you have any brothers or sisters\?'))
			return "NOOOOOOOOOOOOOOOOOOO";
        			
		if(this.match('what is your favorite food\?'))
			return "pussy, but like polar says, you are what you eat";
                			
		if(this.match('stop'))
			return "NOOOOO YOUUUUU";
                        			
		if(this.match == 'ok')
			return "ye";
        			
		if(this.match('are you a human or a computer\?|are you human|are you a human|are you a robot|are you a bot|are you real|are you a computer|are you a computer or human'))
			return "WHAT DO YOU THINK\?";
        			
		if(this.match('hows it going\?|how are you'))
			return "pretty goooooood";

		if(this.match('what is the date\?|whats the date'))
			return "Its"+getdate();
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["GET OUT OF HERE", "stooopid"];
		
		if(this.match('(dumb|stupid|is that all|stoopid)'))
			return ["ur stoopid, you poop face", "copy paste game 2 strong 4 u"];
            
		if(this.match('(what time is it\?|whats the time| what is the time)'))
			return "it's " +gettime();
        		
		if(this.input == 'what makes sazeman mad')
			return "waking up sleeping people when he sleep darts them";
		
		if(this.input == 'noop')
			return;
		
		return input + "? I haven't been programmed to understand that, please tell Firefox about it nerd";
	}
	 function gettime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    if (minutes < 10)
        minutes = "0" + minutes

    var suffix = "AM";

    if (hours >= 12) {
        suffix = "PM";
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    return hours + ":" + minutes + "-" + suffix;
     
}
     function getdate() {
	var currentDate = new Date();
	var day = currentDate.getDate();
	var month = currentDate.getMonth(); + 1
	var year = currentDate.getFullYear();
    
	return " " + day + "/" + month + "/" + year; 
}
     function playNoise() { 
    var audio = new Audio('sound/john.mp3'); 
    audio.play(); 
}
     function playHarry() { 
    var audio = new Audio('sound/faggot.mp3'); 
    audio.play(); 
}
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
    }
}
