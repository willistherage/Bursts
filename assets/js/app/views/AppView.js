var BurstAppView = BaseView.extend({
	
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

		_.bindAll(this, 'init', 'addListeners', 'onUpdate', 'onResize');

        this.$container = $('#container');

        this.stage = new PIXI.Container();

        this.renderer = PIXI.autoDetectRenderer();
        
        this.$container.append(this.renderer.view);

        this.burst = new Burst();
        this.burst.init();
        this.burst.build(this.stage, 8);

        AnimationFrame.init();
        AnimationFrame.addListener(this.onUpdate);
	},

    //----------------------------------------
    // PRIVATE METHODS
    //----------------------------------------

    addListeners: function()
    {

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