var BurstLine = BaseView.extend({
    
    //----------------------------------------
    // VARIABLES
    //----------------------------------------

    guide: false,
    progress: 0,
    properties: [],

    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,

    thickness: 1,
    color: 0xFFFFFF,
    opacity: 1,

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();

		_.bindAll(this, 'init', 'update', 'drawTo');

        AnimationFrame.init();

        this.properties = this.options.props;
        this.guide = this.options.guide;

        this.addListeners();
	},

    update: function(progress)
    {
        this.progress = progress;
    },

    drawTo: function(graphics)
    {
        graphics.lineStyle(this.thickness, this.color, this.opacity);
        graphics.moveTo(this.x1, this.y1);
        graphics.lineTo(this.x2, this.y2);
    }

});