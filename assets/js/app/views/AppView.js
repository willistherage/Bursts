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

        this.graphics = new PIXI.Graphics();
        this.graphics.beginFill(0xFF3300);
        this.graphics.lineStyle(10, 0xffd900, 1);
        this.graphics.moveTo(50,50);
        this.graphics.lineTo(250, 50);
        this.graphics.lineTo(100, 100);
        this.graphics.lineTo(250, 220);
        this.graphics.lineTo(50, 220);
        this.graphics.lineTo(50, 50);
        this.graphics.endFill();

        this.stage.addChild(this.graphics);

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