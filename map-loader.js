// map-loader.js
(function () {
  // prevent duplicate loading
  if (document.querySelector('script[src="map-navigation.js"]')) return;

  const sharedScript = document.createElement("script");
  sharedScript.src = "map-navigation.js";
  sharedScript.defer = true;
  document.head.appendChild(sharedScript);

  console.log("🧭 map-navigation.js auto-loaded by map-loader.js");
})();
