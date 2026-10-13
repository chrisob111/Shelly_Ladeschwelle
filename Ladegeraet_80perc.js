let POWER_THRESHOLD = 358;   // Schwelle in Watt
let TIME_THRESHOLD = 10;   // Wie lang muss Schwelle ueberschritten werden in Sekunden
let highPowerTimer = null;

Shelly.addEventHandler(function (event) {

  // Nur Switch-Events auswerten
  if (event.component !== "switch:0") return;
  if (!event.info || event.info.apower === undefined) return;

  let power = event.info.apower;

  // Leistung loggen
  console.log("Aktuelle Leistung:", power.toFixed(0), "W");

  // Über Schwellwert
  if (power > POWER_THRESHOLD) {
    if (highPowerTimer === null) {
      console.log(
        "Leistung über",
        POWER_THRESHOLD,
        "W → Timer gestartet (",
        TIME_THRESHOLD,
        "Sekunden )"
      );

      highPowerTimer = Timer.set(TIME_THRESHOLD * 1000, false, function () {
        console.log(
          "Leistung seit",
          TIME_THRESHOLD,
          "Sekunden über",
          POWER_THRESHOLD,
          "W → Steckdose AUS"
        );

        Shelly.call("Switch.Set", { id: 0, on: false });
        highPowerTimer = null;
      });
    }
  }
  // Wieder unter Schwellwert
  else {
    if (highPowerTimer !== null) {
      console.log(
        "Leistung wieder unter",
        POWER_THRESHOLD,
        "W → Timer abgebrochen"
      );

      Timer.clear(highPowerTimer);
      highPowerTimer = null;
    }
  }
});