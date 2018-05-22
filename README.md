<h1>**Youtube Embed**</h1><br>
**Author:** Gunnar Correa<br>
**E-mail:** gunnercorrea@gmail.com<br>
**Web site:** www.gunnarcorrea.com<br>

<h2>**Description**</h2>
With this plugin, the user informs the url of the video and the element, the plugin processes the information and returns the embed code formatted for embedding and with a div to create a responsive format.

<h2>**How to use**</h2>
Create an object by passing the url to the element that will receive a new formatted element. Only pass values that can be accessed through your ID.

**HTML**
```html

<input type="text" id="youtubeURL" value="https://www.youtube.com/watch?v=R7y9xl3ENec" /> 
<div id="youtubeRESULT"></div>
<script src="youtube.js"></script>
```

**Script**<br>
```javascript

var data = {
  youtubeURL : GetValueId("youtubeURL"),
  youtubeRESULT : "youtubeRESULT"
  };
CreateYoutube(data);
  
```
