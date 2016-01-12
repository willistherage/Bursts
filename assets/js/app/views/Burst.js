var Burst = BaseView.extend({
	
	//----------------------------------------
    // VARIABLES
    //----------------------------------------

    $container: null,
    stage: null,
    renderer: null,
    graphics: null,
    burst:null,

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();

		_.bindAll(this, 'init', 'addListeners', 'removeListeners', 'onUpdate', 'onResize');

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

        this.renderer.render(this.stage);
    },

    onResize: function() {
        
    }
});