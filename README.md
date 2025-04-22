# ISTQB Practice Exam Application

Deze applicatie helpt je bij het oefenen voor het ISTQB Foundation Level examen. Je kunt verschillende examens maken, je tijd bijhouden, en direct feedback krijgen op je antwoorden.

## Copyright Notice

Copyright Notice © International Software Testing Qualifications Board (ISTQB®).
ISTQB® is a registered trademark of the International Software Testing Qualifications Board.
All rights reserved.

Deze applicatie bevat extracts van het officiële ISTQB® Certified Tester Foundation Level (CTFL) v4.0 syllabus en oefenexamens, gebruikt voor niet-commerciële doeleinden. De bron wordt hierbij erkend als de International Software Testing Qualifications Board (ISTQB®).

Deze applicatie is niet geaffilieerd met of goedgekeurd door ISTQB®. Voor officiële informatie over het ISTQB® examen, bezoek [https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/).

## Installatie Handleiding

#### Stap 1: Node.js installeren

Eerst moet je Node.js installeren. Dit is nodig om de applicatie te kunnen draaien.

#### Voor Windows:
1. Ga naar [https://nodejs.org/](https://nodejs.org/)
2. Download de "LTS" (Long Term Support) versie
3. Open het gedownloade bestand (bijvoorbeeld: `node-v20.x.x-x64.msi`)
4. Volg de installatie wizard:
   - Klik steeds op "Next"
   - Accepteer de standaard instellingen
   - Klik op "Install"
5. Open een nieuwe Command Prompt (cmd) om te controleren of het werkt:
   ```
   node --version
   npm --version
   ```
   Als je versienummers ziet, is de installatie gelukt!

#### Voor Mac:
1. Ga naar [https://nodejs.org/](https://nodejs.org/)
2. Download de "LTS" versie voor macOS
3. Open het gedownloade bestand (bijvoorbeeld: `node-v20.x.x.pkg`)
4. Volg de installatie wizard
5. Open Terminal (via Spotlight: druk cmd+spatie en type "terminal")
6. Controleer of het werkt:
   ```
   node --version
   npm --version
   ```
   Als je versienummers ziet, is de installatie gelukt!

### Stap 2: De applicatie starten

1. Open een terminal (Mac) of Command Prompt (Windows)
2. Ga naar de map waar je de applicatie hebt uitgepakt:
   ```
   cd pad/naar/istqb-practice
   ```
   (Vervang "pad/naar" met het werkelijke pad waar je de map hebt neergezet)

3. Installeer de benodigde packages:
   ```
   npm install
   ```
   Dit kan even duren! Wacht tot het klaar is.

4. Start de applicatie:
   ```
   npm run dev
   ```

5. Open je browser en ga naar:
   ```
   http://localhost:5173
   ```

De applicatie zou nu moeten draaien! 🎉

## Docker/Podman Installatie

Je kunt de applicatie ook draaien met Docker of Podman. Dit is handig als je deze tools al hebt geïnstalleerd.

### Stap 1: Docker/Podman installeren

#### Voor Windows:
1. Download Docker Desktop van [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Installeer Docker Desktop met de standaard instellingen
3. Start Docker Desktop

#### Voor Mac:
1. Download Docker Desktop van [https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)
2. Installeer Docker Desktop met de standaard instellingen
3. Start Docker Desktop

### Stap 2: De applicatie bouwen en starten

1. Open een terminal (Mac) of Command Prompt (Windows)
2. Ga naar de map waar je de applicatie hebt uitgepakt:
   ```
   cd pad/naar/istqb-practice
   ```
   (Vervang "pad/naar" met het werkelijke pad waar je de map hebt neergezet)

3. Bouw de Docker image (vergeet de punt aan het einde niet!):
   ```bash
   docker build -t istqb-practice .
   ```
   of met Podman:
   ```bash
   podman build -t istqb-practice .
   ```

4. Start de container:
   ```bash
   docker run -p 8080:80 istqb-practice
   ```
   of met Podman:
   ```bash
   podman run -p 8080:80 istqb-practice
   ```

5. Open je browser en ga naar:
   ```
   http://localhost:8080
   ```

De applicatie zou nu moeten werken! 🎉

### Problemen oplossen

#### Docker/Podman start niet?
- Controleer of Docker Desktop draait
- Controleer of poort 8080 niet al in gebruik is

#### Kan de applicatie niet vinden?
- Controleer of de container draait:
  ```bash
  docker ps
  ```
  of
  ```bash
  podman ps
  ```

#### De applicatie laadt niet correct?
- Controleer de container logs:
  ```bash
  docker logs <container-id>
  ```
  of
  ```bash
  podman logs <container-id>
  ```

## Veelgestelde Vragen

### Algemene vragen
#### Hoe weet ik in welke map ik ben in de terminal?
- Windows: typ `cd` om het huidige pad te zien
- Mac: typ `pwd` om het huidige pad te zien

#### Hoe navigeer ik naar de juiste map?
- Gebruik `cd mapnaam` om naar een map te gaan
- Gebruik `cd ..` om een map terug te gaan
- Windows tip: je kunt ook naar de map gaan in Windows Verkenner, dan in de adresbalk "cmd" typen en Enter drukken
- Mac tip: je kunt een map naar het Terminal icoon slepen om het pad automatisch in te vullen

#### Ik krijg een foutmelding over "poort in gebruik"
Dit betekent dat poort 5173 al in gebruik is. Probeer:
1. Sluit andere applicaties die mogelijk deze poort gebruiken
2. Of start de applicatie op een andere poort:
   ```
   npm run dev -- --port 5174
   ```

#### De applicatie werkt niet meer
Probeer deze stappen:
1. Stop de applicatie (druk Ctrl+C in de terminal)
2. Verwijder de node_modules map:
   ```
   rm -rf node_modules    # voor Mac
   rmdir /s node_modules  # voor Windows
   ```
3. Installeer opnieuw:
   ```
   npm install
   npm run dev
   ```

## Support

Als je problemen tegenkomt of vragen hebt, kun je:
1. Deze README opnieuw doorlezen
2. De foutmelding googlen
3. Contact opnemen met de ontwikkelaar

Veel succes met oefenen! 📚✨
