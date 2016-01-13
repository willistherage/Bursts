var BurstAppView = BaseView.extend({
	
	//----------------------------------------
    // VARIABLES
    //----------------------------------------

    $container: null,
    $canvas: null,
    stage: null,
    renderer: null,
    graphics: null,
    burst:null,
    resolution: 2,

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();
        
        _.bindAll(this, 'init', 'addListeners', 'removeListeners', 'onUpdate', 'onResize');

        // Initializing animation frame
        AnimationFrame.init();

        // Grabbing reference to the container
        this.$container = $('#container');

        // Initializing pixi renderer
        this.stage = new PIXI.Container();
        this.renderer = PIXI.autoDetectRenderer(800, 600, {antialias: true});
        this.$container.append(this.renderer.view);
        
        // Grabbing reference to the canvas
        this.$canvas = this.$container.find('canvas');

        // Setting the resolution of the canvas
        this.renderer.resolution = this.resolution;
        TweenMax.set(this.$canvas, {scale:1/this.resolution});

        // Creating the Burst
        this.burst = new Burst();
        this.burst.init();
        this.burst.build(this.stage, BurstType.SPARK, 4, 400);

        this.addListeners();
	},

    //----------------------------------------
    // PRIVATE METHODS
    //----------------------------------------

    addListeners: function()
    {
        $(window).bind('resize', this.onResize);
        this.onResize();

        AnimationFrame.addListener(this.onUpdate);
    },

    removeListeners: function()
    {
        $(window).unbind('resize', this.onResize);

        AnimationFrame.removeListener(this.onUpdate);
    },

    //----------------------------------------
    // EVENT HANDLERS
    //----------------------------------------

    onUpdate: function() {
        
        this.renderer.render(this.stage);
    },

    onResize: function()
    {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.burst.graphics.x = Math.round(this.width * 0.5);
        this.burst.graphics.y = Math.round(this.height * 0.5); 

        this.renderer.resize(this.width, this.height);
    }
});