// SCSS
import '../styles/index.scss';

// JS
import './form';
import './loading';
import './navigation';
import './artists/info';
import './artists/velazquez_scene';
import './artists/goya_scene';
import './artists/picasso_scene';
import './artists/dali_scene';

const loadTime = () => {
  // Get current time.
  const now = new Date().getTime();
  // Calculate page load time.
  const pageLoadTime = now - performance.timing.navigationStart;
  // Write the load time to the F12 console.
  if (window.console) console.log(`Page Load Time: ${pageLoadTime}`);
};

window.addEventListener('load', loadTime, false);

const perfEntries = performance.getEntriesByType('navigation');
console.log(`TimeStamp to Load: ${perfEntries.domContentLoadedEventEnd - perfEntries.domContentLoadedEventStart}`);
console.log(perfEntries);
