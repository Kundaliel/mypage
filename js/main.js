//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.addEventListener("load", function() {
    Graphics._switchFullScreen();
    SceneManager.run(Scene_Boot);
});
