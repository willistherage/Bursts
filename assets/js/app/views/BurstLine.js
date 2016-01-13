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
    opacity: 0.5,

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();

		_.bindAll(this, 'init', 'update', 'drawTo');

        this.properties = this.options.props;
        this.guide = this.options.guide;
	},

    update: function(progress)
    {
        this.progress = progress;

        // Property list is empty
        if(this.properties.length == 0)
            return;

        var prop;

        // There is only one property set or the line is a guide
        if(this.guide || this.properties.length == 1)
        {
            prop = this.properties[0];
            this.x1 = prop.x1;
            this.y1 = prop.y1;
            this.x2 = prop.x2;
            this.y2 = prop.y2;

            this.thickness = prop.thickness;
            this.color = prop.color;
        }

        // Determine the line segment based on the progress between the property sets

    },

    drawTo: function(graphics)
    {
        graphics.lineStyle(this.thickness, this.color, this.opacity);
        graphics.moveTo(this.x1, this.y1);
        graphics.lineTo(this.x2, this.y2);

    }

});