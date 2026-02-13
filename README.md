A Brave scriptlet to make Youtube function a bit nicer when used with a TV. This script attempts to trigger fullscreen automatically (if browser security features allow it) when a video starts to play, returns to the home page at the end of the video and removes keyboard shortcuts that aren't super helpful.

Disclaimer: This is for my own use, so isn't likely to be developed past the point of the bare minimum needed to work, unless I get bored and end up trying some other way of doing things.

## Limitations
Due to browser security, putting a video into fullscreen requires user interaction, like clicking a link on a page, or pressing a key, to return a valid transient user activation for entering fullscreen (https://developer.mozilla.org/en-US/docs/Glossary/Transient_activation). There is some ability to allow auto fullscreen without the need for user interaction, but this doesn't seem to be fully available in Brave to allow adding specific sites.
Entering fullscreen automatically can work from a previous interaction, such as clicking a video to play from the home screen, however it seems to depend on the speed the page/video loads for the user interaction to still be valid and let the video go fullscreen without any further interaction. If the delay between interaction is too long, fullscreen won't be triggered.
