var BurstLine = function() { 
	
    var l = {

    	//----------------------------------------
        // VARIABLES
        //----------------------------------------

        

        //----------------------------------------
        // PUBLIC METHODS
        //----------------------------------------

    	init: function() {
    		
            this.bind();

    		_.bindAll(this, 'init', 'addListeners', 'removeListeners', 'onUpdate');

            AnimationFrame.init();

            this.addListeners();
    	},

        //----------------------------------------
        // PRIVATE METHODS
        //----------------------------------------

        addListeners: function()
        {

            AnimationFrame.addListener(this.onUpdate);
        },

        removeListeners: function()
        {

            AnimationFrame.removeListener(this.onUpdate);
        },

        //----------------------------------------
        // EVENT HANDLERS
        //----------------------------------------

        onUpdate: function() {

            
        }
    };

    l.init();

    return l;
}