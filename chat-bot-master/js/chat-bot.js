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
		
		if(this.match('(hi|hello|hey|hola|howdy)(\\s|!|\\.|$)'))
			return "whatttt do you wanttttt";
		
		if(this.match('what[^ ]* up') || this.match('sup') || this.match('how are you'))
			return "whattttt do you wanttt";
		
		if(this.match('l(ol)+') || this.match('(ha)+(h|$)') || this.match('lmao'))
			return "what's so funny?";
		
		if(this.match('^no+(\\s|!|\\.|$)'))
			return "stoopid >:(";
		
		if(this.match('bobber'))
			return "hes probably eating dinner";
		
		if(this.match('poonta'))
			return "poontas probably high, drunk or tending to his flowers in belgian waffle land";
			
		if(this.match('shadowjango'))
			return "shadowjangos probably playing ogrewatch saying WHY? WHY? WHY?";
		
		if(this.match('polarbearcalvary'))
			return "firebot thinks polar probably needs heals, firebot thinks polar should teach his students the way of the NOOOOO";
		
		if(this.match('sazeman'))
			return "sazemans real name is peter";
		
		if(this.match('blindsight'))
			return "blindsights not a replacement for tech support";
		
		if(this.match('its in mumble'))
			return "noooooooo";
		
		if(this.match('what makes sazeman mad'))
			return "waking up sleeping people in overwatch duh, like bastions";
		
		if(this.match('do you wanna do physics'))
			return "YEEEAAAAAhhhhhhhh";
		
		if(this.match('cyka blyat'))
			return "CYKA BLLYAT RUSH B";
		
		if(this.match('saxxy'))
			return "saxxys probably drunk and high, and hes probably playing borderlands, maybe";
		
		if(this.match('ye'))
			return "yeeeee";
		
		if(this.match('what are you'))
			return "im actually an almost exact replica of the real firefox, exccept im DIGITALLLLLL";
		
		if(this.match('wanna play overwatch'))
			return "nooooooooooooo, gawwwdddd";
				
		if(this.match('you suck|your a dumb bot|firefox is stupid|firefox is stoopid|your dumb|your gay|faggot|fuck you|stupid bot|your useless|fight me fgt|fit me fgt|fight me faggot'))
			return "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.";
				
		if(this.match('sazeman'))
			return "sazemans real name is peter";
		
		if(this.match('epicvictory'))
			return "epics stoopid";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["GET OUT OF HERE", "stooopid"];
		
		if(this.match('(dumb|stupid|is that all|stoopid)'))
			return ["ur stoopid, you poop face", "copy paste game 2 strong 4 u"];
            
		if(this.match('(what time is it?\)'))
			return "it's "+gettime();
		
		if(this.input == 'noop')
			return;
		
		return input + " what?";
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

    return hours + " " + minutes + " " + suffix;
     
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
