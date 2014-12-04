<?php
require "credentials.php";
require "php-webdriver/lib/__init__.php";

$browsers = array(
	"ie11" 		=> array("browser" => "IE", "browser_version" => "11.0", 	"os" => "Windows", "os_version" => "8.1", "resolution" => "1280x1024"),
	"chrome" 	=> array("browser"=> "chrome", 	"os" => "Windows", "os_version" => "8", "resolution" => "1280x1024"),
	"firefox" 	=> array("browser"=> "firefox", "os" => "Windows", "os_version" => "8", "resolution" => "1280x1024"),
	"ie10" 		=> array("browser" => "IE", "browser_version" => "10.0", 	"os" => "Windows", "os_version" => "7", "resolution" => "1280x1024"),
	"ie9" 		=> array("browser" => "IE", "browser_version" => "9.0", 	"os" => "Windows", "os_version" => "7", "resolution" => "1280x1024"),
	"ie8" 		=> array("browser" => "IE", "browser_version" => "8.0", 	"os" => "Windows", "os_version" => "7", "resolution" => "1280x1024"),
	"ipadAir"	=> array("browser" => "iPad", "platform" => "MAC", "device" => "iPad Air", "deviceOrientation" => "landscape"),
	"nexus7" 	=> array("browser" => "android", "platform" => "ANDROID", "device" => "Google Nexus 7", "deviceOrientation" => "landscape")
);

$driver = null;

function waitUntil($el) {
	global $driver;

	$driver->wait(60, 1000)->until(WebDriverExpectedCondition::elementToBeClickable($el));
	$el = $driver->findElement($el);

	if(!$el) {
		$driver->quit();
	}

	return $el;
}

foreach($browsers as $browser) {
	//$browser["browserstack.local"] 	= true;
	$browser["acceptSslCerts"] 			= true;
	$browser["browserstack.debug"] 		= true;

	$driver = RemoteWebDriver::create($authURL, $browser);

	$driver->get("https://rawgit.com/misantronic/minc/master/examples/minc.html");

	waitUntil(WebDriverBy::cssSelector("body.success"));

	// screenshot
	file_put_contents('tests/screens/'. $browser['browser'] . (isset($browser['browser_version']) ? '-'.$browser['browser_version'] : '') .'.png', $driver->takeScreenshot());

	$driver->quit();
}