$( function() {
    function setColorOnClick(red, green, blue) {
        $( "#red" ).slider( "value", red );
        $( "#green" ).slider( "value", green );
        $( "#blue" ).slider( "value", blue );
        $("#bgColor").toggleClass("active")
        $("#textColor").toggleClass("active")
    }
    let switcher = 1;
    const defaultBgColor = "FFC5C3";
    $( "#swatch" ).css( "background-color", "#" + defaultBgColor )
    const bgColorMemory = {
        red: 255,
        green: 197,
        blue: 195
    }
    const textColorMemory = {
        red: 000,
        green: 000,
        blue: 000
    }
    
    $("#textColor").click(() => {
        if (switcher === 1) return;
        const {red, green, blue} = textColorMemory;
        switcher = 1;
        setColorOnClick(red, green, blue)
    })
    $("#bgColor").click(() => {
        if (switcher === 0) return;
        const {red, green, blue} = bgColorMemory;
        switcher = 0;
        setColorOnClick(red, green, blue)
    })

    function hexFromRGB(r, g, b) {
      const hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }

    function refreshColor() {
      const red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
        if (switcher) {
            textColorMemory.red = red;
            textColorMemory.green = green;
            textColorMemory.blue = blue;
            $( "#text" ).css( "color", "#" + hex )
        } else {
            bgColorMemory.red = red;
            bgColorMemory.green = green;
            bgColorMemory.blue = blue;
            $( "#swatch" ).css( "background-color", "#" + hex )
        }
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshColor,
      change: refreshColor
    });
    $( "#red" ).slider( "value", 69 );
    $( "#green" ).slider( "value", 99 );
    $( "#blue" ).slider( "value", 71 );
});