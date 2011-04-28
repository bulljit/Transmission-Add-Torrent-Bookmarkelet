# Bookmarklet for Adding a Torrent File to Transmission from your Mobile Phone #

https://github.com/bulljit/Transmission-Add-Torrent-Bookmarkelet/

Last Updated: 2011-04-28

0.6 - Remove google-analytic cookies  
0.5 - Filter for possible torrent links. Please report any sites that don't work  
0.4 - Added Private Tracker support. Requires Transmission 2.30 or later  
0.3 - CSS fixes  
0.2 - Added installbmlet.html file for easy installation of the Bookmarklet to your phone  
0.1 - Allows basic transfer of public Torrents to iPhone  

## Installation ##

These instructions already assume that you have setup Transmission for web access, and setup the relevant port forwarding to ensure it is accessible from the Internet. 

To setup the bookmarklet:

- Copy the server-side files to your Transmission/Web/ directory
	- web/fetchtorrent.html
    - web/installbmlet.html
    - web/images/graphics/bookmarklet/* (All images)
  
- If using the native Mac OS X Transmission.app this should be located under "~/Applications/Transmission.app/Contents/Resources/web". You can access these folders by right-clicking on the Transmission.app icon and choosing 'Show Package Contents'.

- Install the Bookmarklet on your phone:

	- http://yourserver.ip:port/transmission/web/installbmlet.html
	- Replace **yourserver.ip:port** with your server and port address


## Usage Instructions ##

1. Surf to your favorite torrent site.
2. Click on the bookmarklet. 
3. The page will be modified to add a 'new window' icon next to any possible Torrent files or Magnet links. 
4. Click the 'download' link of the Torrent that you want.
5. Enjoy the show.


## Known Issues ##

- After Transmission.app auto-updates the web files need to be reinstalled


## FAQ Answers ##

- Works on all iOS devices and desktop browsers (though there better add-ons/extensions available for the latter)
- Provides feedback of success / failure when adding Torrents
- Works with Transmission remote username and password
- Support for Private Trackers

## Credits ##

bulljit - Original concept, Javascript & Server coding, Testing  
saltedlolly - Installation UI, Documentation, Testing  
netj - Caught bug with install page.  Visit his github site for an install bash script  

