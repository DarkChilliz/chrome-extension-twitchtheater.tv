// Set Player Styles ///////////////////////////////////////////////////////////////////

function missingValue(aspect_ratio, width, height) {
    //https://www.silisoftware.com/tools/screen_aspect_ratio_calculator
    if (width && height) {
        aspect_ratio = width / height;
        return aspect_ratio;
    }
    if (aspect_ratio) {
        if (width && !height) {
            height = width / aspect_ratio;
            return height;
        } else if (height && !width) {
            width = height * aspect_ratio;
            return width;
        }
    }
}

function writeStyle(v, w, h, t, l) {
    var obj = document.getElementById("v-" + fldids[v]);
    obj.style = "width: "  + w + "px;" +
                "height: " + h + "px;" +
                "top: "    + t + "px;" +
                "left: "   + l + "px;";
}

function chgPlayerStyle() {
    const r = 1.7777777777777777; //1.778
    var clientW = Math.round( document.getElementById("playdiv").clientWidth ),
        clientH = Math.round( document.getElementById("playdiv").clientHeight ),
        w = [],
        h = [],
        t = [],
        l = [],
        playerNotConfigured = function() {
            console.info("chgPlayerStyle(): not configured for [" + fldids.length + "] players");
        };

    //1920x1080 (16:9 aspect ratio)
    if (screen.width / screen.height == 1.7777777777777777 || screen.width == 1920 && screen.height == 1080) {
        switch(chans.length) { //unfinished
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === true) {
                    w[0] = clientW;
                    h[0] = Math.round( missingValue( r, w[0], 0 ) );
                    //top
                    writeStyle(0, w[0], h[0], 0, 0);
                }
                break;
            case 2:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[0], h[1], t[1], 0);
                break;
            case 3:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                w[1] = clientW / 2;
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                l[0] = w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], 0);
                break;
            case 4:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = clientW / 3;
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], 0);
                break;
            case 5:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = clientW / 4;
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                w[2] = l[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], 0);
                break;
            case 6:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                //
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                w[2] = l[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[1], t[1], 0);
                break;
            case 7:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                w[2] = l[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[2], t[1], 0);
                writeStyle(6, w[2], h[2], t[2], 0);
                break;
            case 8:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 3;
                //
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = l[2] - w[1];
                //
                w[2] = l[3];
                w[3] = l[3] / 2;
                l[4] = w[3];
                h[4] = Math.round( missingValue( r, w[3], 0 ) );
                h[3] = h[1] - h[4];
                t[2] = t[1] + h[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[1], h[1], t[1], l[3]);
                //stack 5 top
                writeStyle(5, w[2], h[3], t[1], 0);
                //stack 5 bot
                writeStyle(6, w[3], h[4], t[2], l[4]);
                writeStyle(7, w[3], h[4], t[2], 0);
                break;
            case 9: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - (w[2] * 2) - (w[1] * 3);
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[2] = l[1] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[1], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[3], h[1], t[1], l[3]);
                //stack 5
                writeStyle(5, w[2], h[2], t[1], l[4]);
                writeStyle(6, w[2], h[2], t[4], l[4]);
                //stack 6
                writeStyle(7, w[2], h[2], t[1], 0);
                writeStyle(8, w[2], h[2], t[4], 0);
                break;
            case 10:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //
                l[2] = w[2] * 3;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[3], h[1], t[1], l[2]);
                //stack 4
                writeStyle(4, w[2], h[2], t[1], l[3]);
                writeStyle(5, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle(6, w[2], h[2], t[1], l[4]);
                writeStyle(7, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(8, w[2], h[2], t[1], 0);
                writeStyle(9, w[2], h[2], t[2], 0);
                break;
            case 11: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                l[3] = w[2] * 2;
                l[4] = w[2];
                //
                l[2] = w[2] * 3;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[2], t[1], l[2]);
                writeStyle( 4, w[3], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], 0);
                writeStyle(10, w[2], h[2], t[2], 0);
                break;
            case 12:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //
                l[2] = w[2] * 4;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[1], t[1], l[2]);
                //stack 4
                writeStyle( 4, w[2], h[2], t[1], l[3]);
                writeStyle( 5, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 6, w[2], h[2], t[1], l[4]);
                writeStyle( 7, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 8, w[2], h[2], t[1], l[5]);
                writeStyle( 9, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(10, w[2], h[2], t[1], 0);
                writeStyle(11, w[2], h[2], t[2], 0);
                break;
            case 13:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                l[1] = l[0] - w[1];
                //
                l[2] = w[2] * 4;
                w[3] = clientW - (l[2] + (w[1] * 2));
                //
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[1], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[3], h[2], t[1], l[2]);
                writeStyle( 4, w[3], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], 0);
                writeStyle(12, w[2], h[2], t[2], 0);
                break;
            case 14:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 5;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 4;
                l[3] = w[2] * 3;
                l[4] = w[2] * 2;
                l[5] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[2], t[1], l[1]);
                writeStyle( 3, w[3], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], 0);
                writeStyle(13, w[2], h[2], t[2], 0);
                break;
            case 15:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 6;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 5;
                l[3] = w[2] * 4;
                l[4] = w[2] * 3;
                l[5] = w[2] * 2;
                l[6] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[2], h[2], t[1], l[2]);
                writeStyle( 4, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], l[6]);
                writeStyle(12, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(13, w[2], h[2], t[1], 0);
                writeStyle(14, w[2], h[2], t[2], 0);
                break;
            case 16:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = clientW - w[1];
                //
                l[1] = w[2] * 6;
                w[3] = clientW - (l[1] + w[1]);
                //
                l[2] = w[2] * 5;
                l[3] = w[2] * 4;
                l[4] = w[2] * 3;
                l[5] = w[2] * 2;
                l[6] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[3], h[2], t[1], l[1]);
                writeStyle( 3, w[3], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], l[6]);
                writeStyle(13, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(14, w[2], h[2], t[1], 0);
                writeStyle(15, w[2], h[2], t[2], 0);
                break;
            case 17: //update
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle( 3, w[2], h[2], t[1], l[2]);
                writeStyle( 4, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 5, w[2], h[2], t[1], l[3]);
                writeStyle( 6, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 7, w[2], h[2], t[1], l[4]);
                writeStyle( 8, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle( 9, w[2], h[2], t[1], l[5]);
                writeStyle(10, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(11, w[2], h[2], t[1], l[6]);
                writeStyle(12, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(13, w[2], h[2], t[1], l[7]);
                writeStyle(14, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(15, w[2], h[2], t[1], 0);
                writeStyle(16, w[2], h[2], t[2], 0);
                break;
            case 18:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle( 2, w[2], h[2], t[1], l[1]);
                writeStyle( 3, w[2], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 4, w[2], h[2], t[1], l[2]);
                writeStyle( 5, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 6, w[2], h[2], t[1], l[3]);
                writeStyle( 7, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 8, w[2], h[2], t[1], l[4]);
                writeStyle( 9, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(10, w[2], h[2], t[1], l[5]);
                writeStyle(11, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(12, w[2], h[2], t[1], l[6]);
                writeStyle(13, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(14, w[2], h[2], t[1], l[7]);
                writeStyle(15, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(16, w[2], h[2], t[1], 0);
                writeStyle(17, w[2], h[2], t[2], 0);
                break;
            case 19:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                t[2] = t[1] + h[2];
                //
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                l[0] = w[2] * 8;
                l[1] = w[2] * 7;
                w[1] = clientW - l[0];
                //
                l[2] = w[2] * 6;
                l[3] = w[2] * 5;
                l[4] = w[2] * 4;
                l[5] = w[2] * 3;
                l[6] = w[2] * 2;
                l[7] = w[2];
                //top
                writeStyle( 0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle( 1, w[1], h[2], t[1], l[0]);
                writeStyle( 2, w[1], h[2], t[2], l[0]);
                //stack 2
                writeStyle( 3, w[2], h[2], t[1], l[1]);
                writeStyle( 4, w[2], h[2], t[2], l[1]);
                //stack 3
                writeStyle( 5, w[2], h[2], t[1], l[2]);
                writeStyle( 6, w[2], h[2], t[2], l[2]);
                //stack 4
                writeStyle( 7, w[2], h[2], t[1], l[3]);
                writeStyle( 8, w[2], h[2], t[2], l[3]);
                //stack 5
                writeStyle( 9, w[2], h[2], t[1], l[4]);
                writeStyle(10, w[2], h[2], t[2], l[4]);
                //stack 6
                writeStyle(11, w[2], h[2], t[1], l[5]);
                writeStyle(12, w[2], h[2], t[2], l[5]);
                //stack 7
                writeStyle(13, w[2], h[2], t[1], l[6]);
                writeStyle(14, w[2], h[2], t[2], l[6]);
                //stack 8
                writeStyle(15, w[2], h[2], t[1], l[7]);
                writeStyle(16, w[2], h[2], t[2], l[7]);
                //stack 9
                writeStyle(17, w[2], h[2], t[1], 0);
                writeStyle(18, w[2], h[2], t[2], 0);
                break;
            default:
                playerNotConfigured;
        }
    //1440x900 (16:10 aspect ratio)
    } else if (screen.width / screen.height == 1.6 || screen.width == 1440 && screen.height == 900) {
        switch(chans.length) {
            case 0:
                break;
            case 1:
                if (useChgPlayerStyleCaseOne === true) {
                    w[0] = clientW;
                    h[0] = Math.round( missingValue( r, w[0], 0 ) );
                    //top
                    writeStyle(0, w[0], h[0], 0, 0);
                }
                break;
            case 2:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[0], h[1], t[1], 0);
                break;
            case 3:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                w[1] = clientW / 2;
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                l[0] = w[1];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[1], h[1], t[1], 0);
                break;
            case 4:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                l[0] = clientW - w[1];
                //
                l[1] = w[2] = l[0] / 2;
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[2], h[1], t[1], 0);
                break;
            case 5:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                l[0] = clientW - w[1];
                //
                h[3] = h[1] / 2;
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                // l[1] = l[0] - w[3];
                t[2] = t[1] + h[3];
                w[2] = l[0] - w[3];
                l[1] = w[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[1]);
                //stack 3
                writeStyle(3, w[3], h[3], t[1], 0);
                writeStyle(4, w[3], h[3], t[2], 0);
                break;
            case 6:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - ( w[1] + w[2] );
                //
                h[3] = Math.round( missingValue( r, w[3], 0 ) );
                h[4] = h[1] - h[3];
                t[3] = t[1] + h[3];
                //
                l[2] = w[3];
                l[0] = w[3] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                //stack 3 top
                writeStyle(2, w[3], h[3], t[1], 0);
                //stack 3 bot
                writeStyle(5, w[3], h[4], t[3], 0);
                break;
            case 7:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = clientW - ( w[1] + w[2] );
                w[4] = w[3] / 2;
                //
                h[4] = Math.round( missingValue( r, w[4], 0 ) );
                h[3] = h[1] - h[4];
                t[3] = t[1] + h[3];
                //
                l[2] = w[3];
                l[1] = w[4];
                l[0] = w[3] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                //stack 3 top
                writeStyle(2, w[3], h[3], t[1], 0);
                //stack 3 bot
                writeStyle(5, w[4], h[4], t[3], l[1]);
                writeStyle(6, w[4], h[4], t[3], 0);
                break;
            case 8:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                t[1] = clientH - h[1];
                t[2] = t[1] + h[2];
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                w[4] = w[0] - ( w[3] + w[2] + w[1] );
                //
                l[1] = w[3];
                l[2] = w[3] + w[4];
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[2], l[2]);
                //stack 3
                writeStyle(4, w[4], h[2], t[1], l[1]);
                writeStyle(5, w[4], h[2], t[2], l[1]);
                //stack 4
                writeStyle(6, w[3], h[2], t[1], 0);
                writeStyle(7, w[3], h[2], t[2], 0);
                break;
            case 9:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                w[4] = w[0] - ( w[3] + w[2] + w[1] );
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[1] = w[3];
                l[2] = l[1] + w[4];
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[4], l[2]);
                //stack 3
                writeStyle(4, w[4], h[2], t[1], l[1]);
                writeStyle(5, w[4], h[2], t[4], l[1]);
                //stack 4
                writeStyle(6, w[3], h[3], t[1], 0);
                writeStyle(7, w[3], h[3], t[2], 0);
                writeStyle(8, w[3], h[3], t[3], 0);
                break;
            case 10:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                h[2] = h[1] / 2;
                h[3] = h[1] / 3;
                //
                w[1] = Math.round( missingValue( r, 0, h[1] ) );
                w[3] = Math.round( missingValue( r, 0, h[3] ) );
                //
                t[2] = t[1] + h[3];
                t[3] = t[2] + h[3];
                t[4] = t[1] + h[2];
                //
                l[1] = w[3];
                l[2] = w[3] * 2;
                w[2] = w[0] - ( l[2] + w[1] );
                l[0] = l[2] + w[2];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[4], l[2]);
                //stack 3
                writeStyle(4, w[3], h[3], t[1], l[1]);
                writeStyle(5, w[3], h[3], t[2], l[1]);
                writeStyle(6, w[3], h[3], t[3], l[1]);
                //stack 4
                writeStyle(7, w[3], h[3], t[1], 0);
                writeStyle(8, w[3], h[3], t[2], 0);
                writeStyle(9, w[3], h[3], t[3], 0);
                break;
            case 11:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[0] = w[2] * 3;
                //
                w[1] = w[0] - l[0]; //Math.round( missingValue( r, 0, h[1] ) );
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[2]);
                writeStyle(3, w[2], h[2], t[2], l[2]);
                writeStyle(4, w[2], h[2], t[3], l[2]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[1]);
                writeStyle(6, w[2], h[2], t[2], l[1]);
                writeStyle(7, w[2], h[2], t[3], l[1]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], 0);
                writeStyle( 9, w[2], h[2], t[2], 0);
                writeStyle(10, w[2], h[2], t[3], 0);
                break;
            case 12:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[1], t[1], l[3]);
                //stack 3
                writeStyle(3, w[2], h[2], t[1], l[2]);
                writeStyle(4, w[2], h[2], t[2], l[2]);
                writeStyle(5, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(6, w[2], h[2], t[1], l[1]);
                writeStyle(7, w[2], h[2], t[2], l[1]);
                writeStyle(8, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle( 9, w[2], h[2], t[1], 0);
                writeStyle(10, w[2], h[2], t[2], 0);
                writeStyle(11, w[2], h[2], t[3], 0);
                break;
            case 13:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                h[3] = h[1] / 2;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                t[4] = t[1] + h[3];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[3], t[1], l[3]);
                writeStyle(3, w[2], h[3], t[4], l[3]);
                //stack 3
                writeStyle(4, w[2], h[2], t[1], l[2]);
                writeStyle(5, w[2], h[2], t[2], l[2]);
                writeStyle(6, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(7, w[2], h[2], t[1], l[1]);
                writeStyle(8, w[2], h[2], t[2], l[1]);
                writeStyle(9, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(10, w[2], h[2], t[1], 0);
                writeStyle(11, w[2], h[2], t[2], 0);
                writeStyle(12, w[2], h[2], t[3], 0);
                break;
            case 14:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                w[1] = w[0] - l[0];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[1], t[1], l[0]);
                //stack 2
                writeStyle(2, w[2], h[2], t[1], l[3]);
                writeStyle(3, w[2], h[2], t[2], l[3]);
                writeStyle(4, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[2]);
                writeStyle(6, w[2], h[2], t[2], l[2]);
                writeStyle(7, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], l[1]);
                writeStyle( 9, w[2], h[2], t[2], l[1]);
                writeStyle(10, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(11, w[2], h[2], t[1], 0);
                writeStyle(12, w[2], h[2], t[2], 0);
                writeStyle(13, w[2], h[2], t[3], 0);
                break;
            case 15:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = h[1] / 2;
                t[4] = t[1] + h[3];
                //
                h[4] = h[1] - h[2];
                h[5] = h[1] - h[4];
                t[5] = t[1] + h[4];
                w[3] = clientW - l[4];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[3], h[4], t[1], l[4]);
                writeStyle(2, w[3], h[5], t[5], l[4]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[3]);
                writeStyle(4, w[2], h[2], t[2], l[3]);
                writeStyle(5, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle(6, w[2], h[2], t[1], l[2]);
                writeStyle(7, w[2], h[2], t[2], l[2]);
                writeStyle(8, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle( 9, w[2], h[2], t[1], l[1]);
                writeStyle(10, w[2], h[2], t[2], l[1]);
                writeStyle(11, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(12, w[2], h[2], t[1], 0);
                writeStyle(13, w[2], h[2], t[2], 0);
                writeStyle(14, w[2], h[2], t[3], 0);
                break;
            case 16:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[0] = w[2] * 4;
                //
                h[3] = h[1] / 2;
                t[4] = t[1] + h[3];
                //
                h[4] = h[1] - h[2];
                h[5] = h[1] - h[4];
                t[5] = t[1] + h[4];
                w[1] = clientW - l[0];
                w[3] = w[1] / 2;
                l[4] = l[0] + w[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[4], t[1], l[0]);
                writeStyle(2, w[3], h[5], t[5], l[4]);
                writeStyle(3, w[3], h[5], t[5], l[0]);
                //stack 2
                writeStyle(4, w[2], h[2], t[1], l[3]);
                writeStyle(5, w[2], h[2], t[2], l[3]);
                writeStyle(6, w[2], h[2], t[3], l[3]);
                //stack 3
                writeStyle( 7, w[2], h[2], t[1], l[2]);
                writeStyle( 8, w[2], h[2], t[2], l[2]);
                writeStyle( 9, w[2], h[2], t[3], l[2]);
                //stack 4
                writeStyle(10, w[2], h[2], t[1], l[1]);
                writeStyle(11, w[2], h[2], t[2], l[1]);
                writeStyle(12, w[2], h[2], t[3], l[1]);
                //stack 5
                writeStyle(13, w[2], h[2], t[1], 0);
                writeStyle(14, w[2], h[2], t[2], 0);
                writeStyle(15, w[2], h[2], t[3], 0);
                break;
            case 17:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = Math.round( missingValue( r, w[1], 0 ) );
                h[4] = h[1] - h[3];
                t[4] = t[1] + h[3];
                //
                w[3] = Math.round( missingValue( r, 0, h[4] ) );
                w[4] = (w[1] + w[2]) - w[3];
                l[5] = l[4] + w[4];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[3], t[1], l[0]);
                writeStyle(2, w[3], h[4], t[4], l[5]);
                //stack 2
                writeStyle(4, w[2], h[3], t[1], l[4]);
                writeStyle(3, w[4], h[4], t[4], l[4]);
                //stack 3
                writeStyle(5, w[2], h[2], t[1], l[3]);
                writeStyle(6, w[2], h[2], t[2], l[3]);
                writeStyle(7, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle( 8, w[2], h[2], t[1], l[2]);
                writeStyle( 9, w[2], h[2], t[2], l[2]);
                writeStyle(10, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(11, w[2], h[2], t[1], l[1]);
                writeStyle(12, w[2], h[2], t[2], l[1]);
                writeStyle(13, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(14, w[2], h[2], t[1], 0);
                writeStyle(15, w[2], h[2], t[2], 0);
                writeStyle(16, w[2], h[2], t[3], 0);
                break;
            case 18:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = Math.round( missingValue( r, 0, h[2] ) );
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //
                w[1] = w[0] - l[0];
                //
                h[3] = Math.round( missingValue( r, w[1], 0 ) );
                h[4] = h[1] - h[3];
                t[4] = t[1] + h[3];
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[1], h[3], t[1], l[0]);
                writeStyle(2, w[1], h[4], t[4], l[0]);
                //stack 2
                writeStyle(3, w[2], h[2], t[1], l[4]);
                writeStyle(4, w[2], h[2], t[2], l[4]);
                writeStyle(5, w[2], h[2], t[3], l[4]);
                //stack 3
                writeStyle(6, w[2], h[2], t[1], l[3]);
                writeStyle(7, w[2], h[2], t[2], l[3]);
                writeStyle(8, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle( 9, w[2], h[2], t[1], l[2]);
                writeStyle(10, w[2], h[2], t[2], l[2]);
                writeStyle(11, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(12, w[2], h[2], t[1], l[1]);
                writeStyle(13, w[2], h[2], t[2], l[1]);
                writeStyle(14, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(15, w[2], h[2], t[1], 0);
                writeStyle(16, w[2], h[2], t[2], 0);
                writeStyle(17, w[2], h[2], t[3], 0);
                break;
            case 19:
                w[0] = clientW;
                h[0] = Math.round( missingValue( r, w[0], 0 ) );
                //
                h[1] = clientH - h[0];
                t[1] = clientH - h[1];
                //
                h[2] = h[1] / 3;
                w[2] = w[0] / 6;
                //
                t[2] = t[1] + h[2];
                t[3] = t[2] + h[2];
                //
                l[1] = w[2];
                l[2] = w[2] * 2;
                l[3] = w[2] * 3;
                l[4] = w[2] * 4;
                l[0] = w[2] * 5;
                //top
                writeStyle(0, w[0], h[0], 0, 0);
                //stack 1
                writeStyle(1, w[2], h[2], t[1], l[0]);
                writeStyle(2, w[2], h[2], t[2], l[0]);
                writeStyle(3, w[2], h[2], t[3], l[0]);
                //stack 2
                writeStyle(4, w[2], h[2], t[1], l[4]);
                writeStyle(5, w[2], h[2], t[2], l[4]);
                writeStyle(6, w[2], h[2], t[3], l[4]);
                //stack 3
                writeStyle(7, w[2], h[2], t[1], l[3]);
                writeStyle(8, w[2], h[2], t[2], l[3]);
                writeStyle(9, w[2], h[2], t[3], l[3]);
                //stack 4
                writeStyle(10, w[2], h[2], t[1], l[2]);
                writeStyle(11, w[2], h[2], t[2], l[2]);
                writeStyle(12, w[2], h[2], t[3], l[2]);
                //stack 5
                writeStyle(13, w[2], h[2], t[1], l[1]);
                writeStyle(14, w[2], h[2], t[2], l[1]);
                writeStyle(15, w[2], h[2], t[3], l[1]);
                //stack 6
                writeStyle(16, w[2], h[2], t[1], 0);
                writeStyle(17, w[2], h[2], t[2], 0);
                writeStyle(18, w[2], h[2], t[3], 0);
                break;
            default:
                playerNotConfigured;
        }
    }
}

function goFullScreen() {
    if (isfullscr()) {
        chgPlayerStyle();
    } else {
        gofullscr();
        setTimeout(function() {
            chgPlayerStyle();
        }, 300);
    }
}

// Set Quality /////////////////////////////////////////////////////////////////////////

function getQualities(strmID) {
    var obj = document.getElementById("v-" + fldids[strmID]);
    if (typeof obj.quality === "undefined" || obj.quality.length < 1) {
        if (chans[strmID].search("v=") == -1) {
            var list = obj.player.getQualities();
            obj.quality = [];
            for(let i = 0, l = list.length; i < l; i++) {
                obj.quality.push(list[i].group);
            }
        } else if (chans[strmID].search("v=") > -1) {
            obj.quality = obj.player.getQualities();
        }
    }
}

function chkQuality(array, string) {
    if (array.indexOf(string) < 0) {
        return array[array.length - 1]; //[0]
    } else {
        return (array[array.indexOf(string)]);
    }
}

function setQuality(strmID, strmQuality) {
    var currentQuality = "",
        checkQuality = "",
        pad = 7,
        obj = document.getElementById("v-" + fldids[strmID]);
    if (obj.player.getEnded() !== true && chans[strmID].search("v=") == -1) {
        currentQuality = obj.player.getQuality();
        if (currentQuality !== strmQuality) {
            if (chans[strmID].search("v=") == -1) {
                checkQuality = chkQuality(obj.quality, strmQuality);
                obj.player.setQuality( checkQuality );
                console.info("setQuality(v-" + fldids[strmID] + "): ", (typeof currentQuality !== "undefined" ? currentQuality.padStart(pad) : "".padStart(pad)),"->", (typeof checkQuality !== "undefined" ? checkQuality.padEnd(pad) : "".padEnd(pad)), "["+obj.player.getPlayerState().channelName+"]");
            } else {
                console.info("setQuality(v-" + fldids[strmID] +"): Not Twitch");
            }
        }
    }
}

function chgQuality(strmID, strmQuality) {
    var length = 0,
        aspect_ratio = screen.width / screen.height;
    // getQualities(strmID);
    // setQuality(strmID, strmQuality);
    if (gameMode === true) {
        quality = ["480p30","160p30","160p30"];
    } else {
        quality = ["auto","auto","auto"];
    }
    if (maxQualityMode === true) {
        quality[0] = "chunked";
    }
    switch(aspect_ratio) {
        case 1.7777777777777777:
            // length = 0;
            break;
        case 1.6:
            switch(chans.length) {
                case 3:
                    length = 2;
                    break;
                case 7:
                case 5:
                    length = 2;
                    if (gameMode === false) {
                        quality[2] = "360p30"; //(gameMode === true ? "160p30" : "360p30")
                    }
                    break;
                case 2:
                case 4:
                case 6:
                case 11:
                    length = 1;
                    break;
                case 8:
                case 9:
                case 10:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    length = 1;
                    if (gameMode === false) {
                        quality[1] = "360p30";
                    }
                    break;
            }
            break;
        default:
            // length = 0;
    }
    for(let i = 0, l = chans.length; i < l; i++) {
        getQualities(i); //"160p30" "360p30" "480p30" "720p30" "720p60" "chunked" "auto"
        setQuality(i, (i > length ? "160p30" : quality[i]) );
    }
}

// Miscellaneous Functions /////////////////////////////////////////////////////////////

function chgCookie_redundantBackup(chk, val, txt) {
    var i = new Date();
    i.setTime(i.getTime() + ((chk ? 365 : 0) * 24 * 60 * 60 * 1000));
    document.cookie = val + "=" + (chk ? (txt == undefined ? 1 : txt) : "") + ";expires=" + i.toUTCString() + ";path=/"
}

function getCookie_redundantBackup(txt) {
    if (txt) {
        return getvarval(document.cookie.replace(/\s+/g, "").split(";"), txt)
    } else {
        return document.cookie.replace(/\s+/g, "").split(";")
    }
}

function updChatIndx() {
    //https://www.w3schools.com/js/js_cookies.asp
    var chatsel = document.getElementById("chatsel"),
        chatmen = document.getElementById("chatmen"),
        cookieName = "sesssave",
        sesssave = getCookie_redundantBackup(cookieName),
        sesssaveLowerCase = sesssave.toLowerCase();

    if ( sesssave !== sesssaveLowerCase ) {
        chgCookie_redundantBackup( 1, cookieName, sesssaveLowerCase );
    }

    // https://morioh.com/p/0b5bd0ececd4
    if ( JSON.stringify(chans) !== JSON.stringify(chans).toLowerCase() ) {
        for(let indx in fldids) {
            let obj = document.querySelector("#t-" + fldids[indx]); //strflds
            if (obj.value !== obj.value.toLowerCase()) {
                obj.value = obj.value.toLowerCase();
            }
        }
        chans = chans.join('|').toLowerCase().split('|');
    }
    if ( JSON.stringify(chats) !== JSON.stringify(chats).toLowerCase() ) {
        for(let indx in chats) {
            let obj = document.getElementById("c-" + chats[indx]);
            if (obj.id !== obj.id.toLowerCase()) {
                obj.id = obj.id.toLowerCase();
                obj.textContent = '';
            }
        }
        for(let i = 0, l = chats.length; i < l; i++) {
            chatsel.options[i].textContent = chatsel.options[i].textContent.toLowerCase();
            chatmen.options[i].textContent = chatmen.options[i].textContent.toLowerCase();
        }
        chats = chats.join('|').toLowerCase().split('|');

        if (!document.getElementById('v-' + fldids[chatsel.selectedIndex]).player.getPlayerState().videoID) {
            chgchat();
        }
    }

    //https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array
    //https://stackoverflow.com/questions/25934989
    if ( JSON.stringify(chans) !== JSON.stringify(chats.slice(0, chans.length)) ) {
        var selectedChat = "",
            list = [],
            indx = chats.slice();

        //find 'chats' that have active streams and list them in order of 'chans'
        for(let i = 0, l = chans.length; i < l; i++) {
            let indxOf = indx.indexOf(chans[i]);
            if (indxOf > -1) {
                list.push( indx.splice(indxOf, 1).toString() );
            }
        }
        //add rest of chats with inactive streams to end of list
        for(let l = indx.length; l > 0; l--) {
            list.push( indx.shift() );
        }

        //get 'selectedIndex' value
        selectedChat = chats[chatsel.selectedIndex];

        //replace 'chatsel' & 'chatmen'
        for(let i = 0, l = list.length; i < l; i++) {
            chatsel.options[i].textContent = list[i]; //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
            chatmen.options[i].textContent = list[i]; //innerHTML, value
        }

        //replace 'chats' with reordered 'list'
        chats = list.slice(); //chats = [...list];

        //restore 'selectedIndex' value
        selectedChat = chats.indexOf(selectedChat);
        chatsel.selectedIndex = selectedChat;
        chatmen.selectedIndex = selectedChat;

        if (!document.getElementById('v-' + fldids[chatsel.selectedIndex]).player.getPlayerState().videoID) {
            chgchat();
        }
    }
}

function openFuncMenu(val) {
    if (val == undefined) {
        val = document.getElementById("funcMenuBot").style.display; //funcMenuDiv
    }
    if (val) {
        updateUnloadAllChatsButton();

        document.getElementById("funcMenuTop").style.display = ""; //"inline"
        document.getElementById("funcMenuBot").style.display = ""; //"inline"
        document.getElementById("funcMenuDiv").style.right = "0px";
        document.getElementById("funcMenuDiv").style.width = "340px";
        document.getElementById("funcMenuBot").style.background = "#202023 none repeat scroll 0% 0%"; //funcMenuDiv
        document.getElementById("funcMenuBot").style.maxHeight = "" + (window.innerHeight - 50) + "px";
    } else {
        document.getElementById("funcMenuTop").style.display = "none";
        document.getElementById("funcMenuBot").style.display = "none";

        document.getElementById("funcMenuDiv").style.right = ""; //"290px", "254px"
        document.getElementById("funcMenuDiv").style.width = "";
        document.getElementById("funcMenuDiv").style.background = "";
    }
}

function evtchk(event) {
    if (event.ctrlKey) {
        openmenu(0);
        openFuncMenu(0);
        chgvolume(100);
        updChatIndx();
        chgQuality();
        goFullScreen();
    }
}

function funcEvtChk(event) {
    if (event.ctrlKey) {
        openFuncMenu(0);
        chgvolume(100);
        chgQuality();
        goFullScreen();
    }
}

function updateUnloadAllChatsButton() {
    var loadedChats = 0;
    for(let indx in chats) {
        let obj = document.getElementById("c-" + chats[indx]);

        if (obj.innerHTML) {
            loadedChats++;
        }
    }

    if (loadedChats > 0) {
        let obj = document.getElementsByClassName("unloadAllChats")[0];
        obj.innerText = "chats " + loadedChats + " / " + chats.length;
    }
}

// Button Menu Functions ///////////////////////////////////////////////////////////////

function removeOfflineChannels(val) {
    var list = [],
        id = [];

    for(let i = (fldids.length - 1); i > -1; i--) {
        let obj = document.getElementById("v-" + fldids[i]);
        if (obj.player.getEnded() || obj.player.getQualities().length == 0) { //obj.player.isPaused()
            list.unshift(obj.player.getPlayerState().channelName);
            id.unshift(fldids[i]);
        }
    }

    for(let i = 0, l = id.length; i < l; i++) {
        remstream(id[i], !val ? null : val);
    }

    if (list.length > 0){
        console.info("removeOfflineChannels(" + list.length + "):", list.toString());
    }
}

function setGameMode() {
    var obj = document.getElementsByClassName("setGameMode")[0];
    gameMode = !gameMode;

    if (gameMode === true) {
        obj.style.color = "lightcoral";
    } else {
        obj.style.color = "whitesmoke";
    }
}

function setMaxQualityMode() {
    var obj = document.getElementsByClassName("setMaxQualityMode")[0];
    maxQualityMode = !maxQualityMode;

    if (maxQualityMode === true) {
        obj.style.color = "lightcoral";
    } else {
        obj.style.color = "whitesmoke";
    }
}

function unloadAllChats() {
    // add number of loaded chats to button text
    // dont unload selected chat.. only if shift is held

    var chatsel = document.getElementById("chatsel"),
        // c = chans.slice(),
        indexOfSelectedChat = chatsel.selectedIndex,
        // selectedChat = chats[indexOfSelectedChat],
        obj = document.getElementById('v-' + fldids[indexOfSelectedChat]);

    /*
    if (event.shiftKey) {

    }
    if (!document.getElementById("c-" + chats[indx]).innerHTML) {
        genchat(indx)
    }

    for(let i = 0, l = chats.length; i < l; i++) {

    }
    */

    for(let indx in chats) {
        // if (chats[indx] != selectedChat) {}
        let obj = document.getElementById("c-" + chats[indx]);
        obj.textContent = '';
    }

    if (!obj.player.getPlayerState().videoID) {
        chgchat();
    }

    updateUnloadAllChatsButton();
}

function addStreamsFromChat() {
    var currentPlayerLength = fldids.length;

    addfromui(1, chats.toString());

    for(let i = currentPlayerLength, l = fldids.length; i < l; i++) {
        let obj = document.getElementById('v-' + fldids[i]);

        // temp function
        function playerReadyEventListener() {
            obj.player.removeEventListener("ready", playerReadyEventListener);
            obj.player.pause();

            console.info("playerReadyEventListener(v-" + i +"): ["+obj.player.getPlayerState().channelName+"]");
        }

        if (!obj.player.pause()) {
            setTimeout(function() {
                obj.player.addEventListener("ready", playerReadyEventListener);
            }, 300)
        }
    }
}

function watchPartyMode() {
    var obj = document.getElementsByClassName("watchPartyMode")[0];
    watchParty = !watchParty;

    if (watchParty === true) {
        obj.classList.add("active");
    }
    else {
        obj.classList.remove("active");
    }
}

function randomTestButton() {
    let obj = document.getElementById("v-" + fldids[0]);
    // console.log( obj.player.getPlaybackStats().bufferSize +            ' - bufferSize' );
    // console.log( obj.player.getPlaybackStats().hlsLatencyBroadcaster + ' - hlsLatencyBroadcaster' );
    // console.log( obj.player.getPlayerState().currentTime +             ' - currentTime' );
    // console.log( obj.player.isPaused() +                               ' - isPaused' );
    // console.log( obj.player.getChannel() +                             ' - getChannel' );
    // console.log( obj.player.getChannelId() +                           ' - getChannelId' );
    console.log( obj.player.getPlayerState().playback +            ' - playback' );
    console.log( obj.player.getPlayerState().ended +               ' - ended' );
    console.log( obj.player.getEnded() +                           ' - getEnded' );
    console.log( obj.player.getQualities() );
    console.log( obj.player.getPlayerState().qualitiesAvailable );
}

// Setup Functions /////////////////////////////////////////////////////////////////////

function updMenuElement() {
    //https://forum.webflow.com/t/23730
    document.getElementById("menubtn").onclick = function() {
        openmenu();
        updChatIndx();
    }
}

function createFuncMenuDiv() {
    var funcMenuDiv = document.createElement("div");
    funcMenuDiv.id = "funcMenuDiv";
    document.body.insertBefore(funcMenuDiv, document.getElementById("menudiv"));
}

function onReceiveImgURL(e) {
    document.removeEventListener("sendImgURL", onReceiveImgURL);
    document.getElementById("funcMenuDiv").outerHTML = e.detail.funcMenuDivHtml;

    var playerStyleImgObj = document.getElementById("playerStyleImg"),
        functionsMenuImgObj = document.getElementById("functionsMenuImg");

    //playerStyleImg
    playerStyleImgObj.src = e.detail.playerStyleImg;
    playerStyleImgObj.onclick = function(event) {
        if (event.ctrlKey) {
            openFuncMenu(0);
            chgvolume(100);
            playpause(1);
            theatr.playm = 0;
        }
        chgQuality();
        goFullScreen();
    };

    //functionsMenuImg
    functionsMenuImgObj.src = e.detail.functionsMenuImg;
    functionsMenuImgObj.onclick = function() {
        openFuncMenu();
    };
}

function setButtonVisibility() {
    var list = ["playerStyleImg", "functionsMenuImg"];
    list.forEach((value) => { //https://www.w3schools.com/js/js_arrow_function.asp
        var obj = document.getElementById(value)
        if (obj.style.visibility != "visible") {
            obj.style.visibility = "visible"; //https://www.w3schools.com/cssref/pr_class_visibility.asp
        }
    });
}

function onEventTrigger() {
    userQuality[0] = fldids[0];
    chgQuality();
    setButtonVisibility();
}

function setEventTrigger() {
    //https://stackoverflow.com/questions/28610365
    if (fldids.length > 0) {
        var indx = ("v-" + fldids[fldids.length - 1]),
            obj = document.getElementById(indx);

        function playingEventListener() {
            console.info("playingEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");
            rmvEvtLsnr();
            onEventTrigger();
        }
        function offlineEventListener() {
            console.info("offlineEventListener():", indx + " ["+obj.player.getPlayerState().channelName+"]");
            rmvEvtLsnr();
            onEventTrigger();
        }
        function rmvEvtLsnr() {
            obj.player.removeEventListener("playing", playingEventListener);
            obj.player.removeEventListener("offline", offlineEventListener);
        }
        obj.player.addEventListener("playing", playingEventListener);
        obj.player.addEventListener("offline", offlineEventListener);

        setTimeout(function() {
            rmvEvtLsnr();
            onEventTrigger();
        }, 10000);

        console.info("setEventTrigger(): fldids.length ===", fldids.length);
    } else {
        setButtonVisibility();
        console.info("setEventTrigger(): no streams found");
    }
}

////////////////////////////////////////////////////////////////////////////////////////

var userQuality = [],
    useUserQuality = false,
    gameMode = false,
    maxQualityMode = false,
    watchParty = false,
    useChgPlayerStyleCaseOne = false;
(function() {
    updMenuElement();
    createFuncMenuDiv();
    document.addEventListener("sendImgURL", onReceiveImgURL);
    setTimeout(setEventTrigger, 300); // setEventTrigger();
})();

////////////////////////////////////////////////////////////////////////////////////////
