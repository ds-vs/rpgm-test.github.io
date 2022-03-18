// =============================================================================
// RMMZ - GAME MENU
// =============================================================================
/*:
  @author 
  * @plugindesc 
  * Custom menu.
 */

//Removes font outline

var _Window_Base_ResetFontSettings = Window_Base.prototype.resetFontSettings;
Window_Base.prototype.resetFontSettings = function() {
    _Window_Base_ResetFontSettings.call( this );
    this.contents.outlineWidth = 0;
};


//Removes shadow behind font

var Bitmap_drawTextOutline = Bitmap.prototype._drawTextOuline;
Bitmap.prototype._drawTextOutline = function(text, tx, ty, maxWidth) {
    const context = this.context;
    context.strokeStyle = this.outlineColor;
    context.lineWidth = this.outlineWidth;
    context.lineJoin = "round";
};

//Removes dark rectangle around menu options

var ColorManageroutlineColor = ColorManager.prototype.outlineColor;
ColorManager.prototype.outlineColor = function() {
    return "rgba(0, 0, 0, 0)";
};

var ColorManagerdimColor1 = ColorManager.prototype.dimColor1;
ColorManager.prototype.outlineColor = function() {
    return "rgba(0, 0, 0, 0)";
};
ColorManager.prototype.dimColor1 = function() {
    return "rgba(0, 0, 0, 0)";
};

var ColorManagerdimColor2 = ColorManager.prototype.dimColor2;
ColorManager.prototype.dimColor2 = function() {
    return "rgba(0, 0, 0, 0)";
};

var ColorManageritemBackColor1 = ColorManager.prototype.itemBackColor1;
ColorManager.itemBackColor1 = function() {
    return "rgba(60, 41, 25, 0.1)";
};

var ColorManageritemBackColor2 = ColorManager.prototype.itemBackColor2;
ColorManager.itemBackColor2 = function() {
    return "rgba(60, 41, 25, 0.1)";
};

var WindowBaseBackOpacity = Window_Base.prototype.updateBackOpacity;
Window_Base.prototype.updateBackOpacity = function() {
    return backOpacity = 255;
};

//Custom adjustments to HP/MP/TP/Time gauges

var SpriteGaugeSize = Sprite_Gauge.prototype.updateSpriteGauge;
Sprite_Gauge.prototype.gaugeHeight = function() {
    return this._statusType === "time" ? 6 : 24;
};
Sprite_Gauge.prototype.gaugeX = function() {
    return this._statusType === "time" ? 0 : 0;
};
Sprite_Gauge.prototype.labelFontSize = function() {
    return $gameSystem.mainFontSize() - 5;
};
Sprite_Gauge.prototype.valueFontSize = function() {
    return $gameSystem.mainFontSize() - 5;
};
Sprite_Gauge.prototype.drawValue = function() {
    const currentValue = this.currentValue();
    const width = this.bitmapWidth();
    const height = this.bitmapHeight();
    this.setupValueFont();
    this.bitmap.drawText(currentValue, -3, 0, width, height, "right");
};


Sprite_Gauge.prototype.bitmapWidth = function() {
    return 128;
};

Sprite_Gauge.prototype.bitmapHeight = function() {
    return 24;
};

Sprite_Gauge.prototype.gaugeHeight = function() {
    return this._statusType === "time" ? 6 : 24;
};

Sprite_Gauge.prototype.gaugeX = function() {
    return this._statusType === "time" ? 0 : 0;
};


Sprite_Gauge.prototype.labelY = function() {
    return 1;
};

Sprite_Gauge.prototype.labelFontFace = function() {
    return $gameSystem.mainFontFace();
};

Sprite_Gauge.prototype.labelFontSize = function() {
    return $gameSystem.mainFontSize() - 5;
};

Sprite_Gauge.prototype.valueFontFace = function() {
    return $gameSystem.numberFontFace();
};

Sprite_Gauge.prototype.valueFontSize = function() {
    return $gameSystem.mainFontSize() - 5;
};


Sprite_Gauge.prototype.labelColor = function() {
    return "rgba(255, 255, 255, 1)"
};

Sprite_Gauge.prototype.labelOutlineColor = function() {
    return ColorManager.outlineColor();
};

Sprite_Gauge.prototype.labelOutlineWidth = function() {
    return 0;
};

Sprite_Gauge.prototype.valueColor = function() {
    switch (this._statusType) {
        case "hp":
            return "rgba(255, 255, 255, 1)";
        case "mp":
            return "rgba(255, 255, 255, 1)";
        case "tp":
            return "rgba(255, 255, 255, 1)";
        default:
            return ColorManager.normalColor();
    }
};

Sprite_Gauge.prototype.valueOutlineColor = function() {
    return "rgba(0, 0, 0, )";
};

Sprite_Gauge.prototype.valueOutlineWidth = function() {
    return 0;
};

var updateSpriteName = Sprite_Name.prototype.updateSpriteName;
Sprite_Name.prototype.name = function() {
    return "";
};

var updateStatusBase = Window_StatusBase.prototype.updateStatusBase;
Window_StatusBase.prototype.gaugeLineHeight = function() {
    return 26;
};


//Gives the Battle Log a background using the Windowskin.


var updateBattleLog = Window_BattleLog.prototype.updateBattleLog;
Window_BattleLog.prototype.backColor = function() {
    return "#e9de75";
};

Window_BattleLog.prototype.backPaintOpacity = function() {
    return 255;
};



