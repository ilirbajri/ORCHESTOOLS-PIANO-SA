Content.makeFrontInterface(1200, 230);;

    // Default Fonts

Engine.loadFontAs("{PROJECT_FOLDER}calibrib.ttf", "calibrib");
Engine.setGlobalFont("calibrib");        


    // Convolution and EQ setup

const var Convolution = Synth.getAudioSampleProcessor("CONVOLUTION");

Engine.loadAudioFilesIntoPool();

inline function loadImpulse(control, value)
{
    Convolution.setFile("{PROJECT_FOLDER}"+ control.getItemText() + ".wav");
}

    // SETTINGS PANEL
 
const var SETTButton= Content.getComponent("SETTINGSBTTN");
const var SETTPANEL = Content.getComponent("SETTINGS PANEL");

inline function onSETTButtonControl(component, value)
{
	if (value)
    {
        SETTPANEL.showControl(true);
    }
    else
    {
        SETTPANEL.showControl(false);
    }
};

Content.getComponent("SETTINGSBTTN").setControlCallback(onSETTButtonControl);

    // ABOUT PANEL
 
const var ABOUTPanel = Content.getComponent("ABOUT PANEL");
const var ABOUTButton = Content.getComponent("ABOUT BUTTON");
ABOUTButton.setControlCallback(ABOUTButtonCB);

inline function ABOUTButtonCB(control, value)
{
    ABOUTPanel.showControl(value);
}
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 