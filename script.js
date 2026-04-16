function swapLang() {
  let from = document.getElementById("fromLang");
  let to = document.getElementById("toLang");

  let temp = from.value;
  from.value = to.value;
  to.value = temp;
}

function copyText() {
  const output = document.getElementById("outputText");

  if (!output.value) return;

  output.select();
  document.execCommand("copy");
}

async function translateText() {
  const output = document.getElementById("outputText");
  const input = document.getElementById("inputText").value;

  output.value = "Testing API...";

  try {
    const response = await fetch(
  "https://ameerabbas.cognitiveservices.azure.com/translator/text/v3.0/translate?api-version=3.0&to=hi",
  {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": "91KpYcnQvLS8i2xYt4jg3YPMIvGREDDW2FTn2D4W2ugqcvDMmplyJQQJ99CDAC3pKaRXJ3w3AAAbACOG0j8J",
      "Ocp-Apim-Subscription-Region": "eastasia",
      "Content-Type": "application/json"
    },
    body: JSON.stringify([{ Text: input }])
  }
);
    const data = await response.json();
    console.log(data);

    output.value = data[0]?.translations[0]?.text || "No result";

  } catch (err) {
    output.value = "Still failing";
    console.error(err);
  }
}