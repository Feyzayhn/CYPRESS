const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl : "https://www.google.com",

    projectId: "8gikqr",

    "video": false,
    // testlerin videolarını kaydetmiyor true yaparsam kayıt eder
    // defoult olarak "video": true dur

    "retries": 2
    // Test Fail olduğunda kac kere daha calistirmasi gerektigini giriyoruz
    // "retries": 2 => 1 kere calistirip Hata aldiginda; 2 kere daha deneyecek 

  },
});

// burası freamwork ile ilgili ara ayarlarin yapildigi yerdir