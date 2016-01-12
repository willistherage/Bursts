var Burst = BaseView.extend({
	
	//----------------------------------------
    // VARIABLES
    //----------------------------------------

    stage: null,
    graphics: null,
    lineCount: 8,
    showGuides: false,
    bursts:[],

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();

		_.bindAll(this, 'init', 'addListeners', 'removeListeners', 'onUpdate', 'onResize');

        AnimationFrame.init();

        this.addListeners();
	},

	build: function(stage, lines)
	{
		this.stage = stage;

		this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(0xFF3300);
        this.graphics.lineStyle(10, 0xffffff, 0.5);
        this.graphics.moveTo(50,50);
        this.graphics.lineTo(250, 50);
        this.graphics.lineTo(100, 100);
        this.graphics.lineTo(120, 220);
        this.graphics.lineTo(50, 220);
        this.graphics.lineTo(50, 50);
        this.graphics.endFill();

        this.stage.addChild(this.graphics);
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

        
    },

    onResize: function() {
        
    }
});