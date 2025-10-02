// SDK Status Check
window.addEventListener("load", () => {
  document.getElementById("status").innerText = "✅ SDK Loaded (Zone ID: 9911742)";
});

// Rewarded Popup
function showRewardedPopup() {
  show_9911742('pop')
    .then(() => {
      alert("✅ You earned reward from Rewarded Popup!");
    })
    .catch(() => {
      alert("⚠️ Ad failed to load.");
    });
}

// Rewarded Interstitial
function showRewardedInterstitial() {
  show_9911742()
    .then(() => {
      alert("✅ You earned reward from Rewarded Interstitial!");
    })
    .catch(() => {
      alert("⚠️ Ad failed to load.");
    });
}

// In-App Interstitial (auto every 15 sec)
show_9911742({
  type: 'inApp',
  inAppSettings: {
    frequency: 999,    // অনেকবার চলবে
    capping: 0.004,    // প্রতি ১৫ সেকেন্ডে (0.004 ঘন্টা = 14.4 সেকেন্ড)
    interval: 15,      // ১৫ সেকেন্ড gap
    timeout: 3,        // প্রথম ad এর আগে ৩ সেক delay
    everyPage: false
  }
});
