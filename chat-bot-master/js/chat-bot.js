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
			return "whatttt";
		
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
			return "firebot thinks polar probatbly needs heals, firebot thinks polar should teach his students the way of the NOOOOO";
		
		if(this.match('sazeman'))
			return "sazemans real name is peter";
		
		if(this.match('epicvictory'))
			return "epics stoopid";
		
		if(this.match('(cya|bye|see ya|ttyl|talk to you later)'))
			return ["GET OUT OF HERE", "stooopid"];
		
		if(this.match('(dumb|stupid|is that all|stoopid)'))
			return ["ur stoopid, you poop face", "copy paste game 2 strong"];
		
		if(this.input == 'noop')
			return;
		
		return input + " what?";
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
