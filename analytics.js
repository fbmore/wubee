// Visit counts with Foliàire Analytics: no cookies, honours Do Not Track, opt out with #foliaire-opt-out.
// Not loaded on a friend's game link (?g=, ?p=, ?w=), so game IDs and the names in them never leave the page.
(() => {
  const q = new URLSearchParams(location.search);
  if (["g", "p", "w"].some((k) => q.has(k))) return;
  window.FOLIAIRE_SITE_ID = "07e3783d0eabe56fbc931ce2";
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://foliairestudio.com/analytics/foliaire.js";
  document.head.append(s);
})();
