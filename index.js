const express = require("express");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

const app = express();

app.post("/call", (req, res) => {
  const twiml = new VoiceResponse();

  twiml.say("Namaskar. Te sadhya busy aahet. Krupaya tumcha message sanga.");

  twiml.record({
    maxLength: 30
  });

  res.type("text/xml");
  res.send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
