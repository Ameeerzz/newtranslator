async function translateText() {
  const output = document.getElementById("outputText");
  output.value = "Translating...";

  try {
    const input = document.getElementById("inputText").value;
    const from = document.getElementById("fromLang").value;
    const to = document.getElementById("toLang").value;

    const key = "BkJ8Cp9EdA2qIMBX74CfJojvfTZ1KjZdBz2bV4YFhckTKU4qlZuuJQQJ99CDAC3pKaRXJ3w3AAAbACOG1IM7";
    const endpoint = "https://api.cognitive.microsofttranslator.com/";
    const region = "eastasia";

    const url = `${endpoint}/translate?api-version=3.0&from=${from}&to=${to}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Ocp-Apim-Subscription-Region": region,
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{ Text: input }])
    });

    const data = await response.json();
    output.value = data[0].translations[0].text;

  } catch (error) {
    output.value = "Error connecting API";
    console.error(error);
  }
}