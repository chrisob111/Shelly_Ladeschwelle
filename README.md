# Shelly Ladeschwelle

Das Script schaltet die Steckdose ab, sobald der Schwellwert überschritten wird. Das funktioniert nur, bevor das Ladegerät in die Konstantspannungsphase wechselt. Soll in der Konstantstromphase gewechselt werden, müsste das Script abgeändert werden, sodass eine Leistungsschwelle unterschritten wird.<br>

358W Ladeschwelle überschreiten für SR24 350W-Netzteil entspricht einem Ladestand von etwas über 80%.<br>
1210W Ladeschwelle überschreiten für SR24 1200W-Netzteil entspricht auch etwas über 80%.<br>
<br>
Getestet auf einem Shelly Smart Plug MTR Gen3<br>

# Anwendung
Das Java Script kann mit einem beliebigen Editor geöffnet werden.<br>
Der Inhalt muss in ein neues Script auf der Steckdose kopiert werden.<br>
