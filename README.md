# Guttenberg-block
https://wp-gb.com/
https://developer.wordpress.org/block-editor/reference-guides/theme-json-reference/

Range Control => Radius of the border
Align in block.json => to align the whole content
Box Control => Padding
Pannel => To make a Pannel in the settings 
Insepector Control => To add settings of the block in the edit page
Color Picker => To pick a color (enable Alpha) make it allow the user to transpearent the block 
Toolbar Group => To pick the toolbar group
Toolbar button => used to insert a button in the toolbar where bold is present
Media upload check => to check weather the media is uploaded or not 
Media upload => To upload media on 
-------->render as attribute to open the media library where we can add new media 
-------->gallery={true} for multiple images 
Inner Block => To make nested block in the custom blog where i can set my layout
-------->template => this attribute is where we provide the other blocks which i want to use every built in block will start from core/blockname while for custom one it should be the namespace/blockname
-------->templateLock => true which will not allow the user to delete our inner block 
-------->AllowedBlock => Blocks which are allowed to add we can write in it there name and pass it on like array

