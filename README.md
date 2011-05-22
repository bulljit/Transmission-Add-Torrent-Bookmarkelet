# Bookmarklet for Adding a Torrent File to Transmission from your Mobile Phone #

[](https://github.com/bulljit/Transmission-Add-Torrent-Bookmarkelet/)

Last Updated: 2011-05-21

0.7 - Fix for foreign characters in URL  
0.6 - Remove google-analytic cookies  
0.5 - Filter for possible torrent links  
0.4 - Added Private Tracker support (cookies). Requires Transmission 2.30+  
0.3 - CSS fixes  
0.2 - Added webpage for easy installation  
0.1 - Allows basic transfer of public Torrents to iPhone  

## Installation ##

These instructions already assume that you have setup Transmission for web access, and setup the relevant port forwarding to ensure it is accessible from the Internet. 

To setup the bookmarklet:

- Copy the server-side files to your Transmission/Web/ directory
  - If using the native Mac OS X Transmission.app this should be located under "~/Applications/Transmission.app/Contents/Resources/web". You can access these folders by right-clicking on the Transmission.app icon and choosing 'Show Package Contents'.

- Install the Bookmarklet on your phone:

	- http://yourserver.ip:port/transmission/web/installbookmarklet.html
		- Replace **yourserver.ip:port** with your server and port address
	- most uptodate version of [bookmarklet](https://github.com/bulljit/Transmission-Add-Torrent-Bookmarkelet/issues/7)

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
- Support for Private Trackers (requires Transmission v2.30+)

## Special Thanks to ##

jordan, @saltedlolly, @netj, @lidow

## Todo ##

* fork transmission_web files and install in `~/Library/Application Support/Transmission/web/` which will override the default for Transmission.app