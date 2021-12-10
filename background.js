chrome.omnibox.onInputEntered.addListener((text) => {
    // Encode user input for special characters , / ? : @ & = + $ #
    var newURL = 'https://www.reddit.com/r/' + encodeURIComponent(text);
    chrome.tabs.create({ url: newURL });
  });