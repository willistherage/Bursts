var Burst = BaseView.extend({
	
	//----------------------------------------
    // VARIABLES
    //----------------------------------------

    stage: null,
    graphics: null,
    burstType: null,
    burstAreaType: 200,
    burstAreaSize: 200,
    lineCount: 8,
    showGuides: true,
    turbulence: 0,
    bursts:[],

    //----------------------------------------
    // PUBLIC METHODS
    //----------------------------------------

	init: function() {
		
        this.bind();

		_.bindAll(this, 'init', 'addListeners', 'removeListeners', 'createBlast', 'createSpark', 'onUpdate');

        AnimationFrame.init();

        this.addListeners();
	},

	build: function(stage, type, count, area)
	{
        // Reference to the PIXI stage that the burst will live on. 
		this.stage = stage;

        // The type of burst that will be created.
        this.burstType = type;
        
        // The area of the burst in both width and height.
        this.burstArea = area;

        // The number of lines in the burst.
        this.lineCount = count;

        // The graphics layer the burst will be drawn onto.
		this.graphics = new PIXI.Graphics();
        
        switch(type)
        {
            case BurstType.SPARK:
                this.createSpark();
                break;
            case BurstType.BLAST:
                this.createBlast();
                break;
            default:
                console.log('Burst type '+type+' not found.');
                break;
        }

        this.stage.addChild(this.graphics);
	},

    //----------------------------------------
    // PRIVATE METHODS
    //----------------------------------------

    createBlast: function()
    {
        this.graphics.beginFill(0xFF3300);
        this.graphics.lineStyle(3, 0x00ff66, 1);
        this.graphics.moveTo(50,50);
        this.graphics.lineTo(250, 50);
        this.graphics.lineTo(100, 100);
        this.graphics.lineTo(120, 220);
        this.graphics.lineTo(400, 220);
        this.graphics.lineTo(50, 50);
        this.graphics.endFill();
    },

    createSpark: function()
    {
        this.bursts = [];

        // Degree at which the burst is split up.
        var angle = 360 / (this.lineCount * 2);
        var turbulenceAngle = angle * 0.5;

        var length = this.burstArea * 0.5;

        var x1, x2, y1, y2 = 0;

        for(var i = 0; i < this.lineCount * 2; i++)
        {
            // Determine stroke type
            var isMinor = (i % 2) == 0;

            // Determine paths

            var innerTurbulence = turbulenceAngle * ( (Math.random() * 2 - 1) * this.turbulence);
            var innerAngle = i * angle + innerTurbulence;
            
            var quarter = Math.floor(innerAngle / 90);
            var quarterAngle = innerAngle % 90;
            
            var eighth = Math.floor(innerAngle / 45);
            var eighthAngle = innerAngle % 45;
            
            var gx1 = 0;
            var gy1 = 0;
            
            var gx2 = ;
            var gy2 = 0;
            
            //// Create guide

            var guideProp = new BurstProps({x1: gx1,
                                            x2: gy1,
                                            y1: gx2,
                                            y2: gy2,
                                            color: BurstType.GUIDE_COLOR,
                                            thickness: BurstType.GUIDE_THICKNESS});

            var g = new BurstLine({props: guideProp, guide: true});
            
            this.bursts.push(g);

            //// Start position



            //// Full extension



            //// Fade out
            

            // Determine animation properties

            // Create burst
        }
    },

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

        var burst;

        for(var i = 0; i < this.bursts.length; i++)
        {
            burst = this.bursts[i];
            burst.update(0);
            burst.drawTo(this.graphics);
        }

    }
});