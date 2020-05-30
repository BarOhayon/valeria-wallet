function getHistoryLogHtml(log) {

    let logString = [...log].reverse().map((l) => {
        return `<tr>                        
                    <td class="gold">${l.gold !== 0 ? l.gold < 0 ? l.gold : "+"+l.gold : ""}</td>
                    <td class="magic">${l.magic !== 0 ? l.magic < 0 ? l.magic : "+"+l.magic : ""}</td>
                    <td class="attack">${l.attack !== 0 ? l.attack < 0 ? l.attack : "+"+l.attack : ""}</td>
                    <td class="win">${l.win !== 0 ? l.win < 0 ? l.win : "+"+l.win : ""}</td>
                </tr>`
    }).join("");

    return `
            <table width="100%">
                <thead>
                    <tr>
                        <th class="gold">Gold</th>
                        <th class="magic">Magic</th>
                        <th class="attack">Attack</th>
                        <th class="win">Victory</th>
                    </tr>
                </thead>
                <tbody>
                    ${logString}
                </tbody>
            </table>
            `;
}