const getCurrencyHTML = (propName) => {
    return `<div class="row currency" id="${propName}">
    <div class="row">
        <div class="col">
            <img src="./${propName}.png" />
        </div>
        <div class="col ${propName} label">
            ${camelCase(propName)}
        </div>
        <div class="col">
            <input type="text" class="currentValue ${propName}" disabled/>
        </div>
        <div class="col">
            <label class="currentChange ${propName}"></label>
        </div>
        ${propName === "win" ? `<div class="col actions"><input type="button"  onClick="calcEndWinningPoint()" value="Sum tokens" /></div>` : ``}
    </div>
    <div class="d-flex justify-content-around actions">
        <div class="p-3">
            <input type="button" onClick="addValue('${propName}', -1)" value="-1" />
            <input type="button" onClick="addValue('${propName}', 1)" value="+1" />
        </div>
        <div class="p-3">
            <input type="button" onClick="addValue('${propName}', -5)" value="-5" />
            <input type="button" onClick="addValue('${propName}', 5)" value="+5" />
        </div>
        <div class="p-3">
            <input type="button" onClick="addValue('${propName}', -10)" value="-10" />
            <input type="button" onClick="addValue('${propName}', 10)" value="+10" />
        </div>
    </div>
</div>`
}

function camelCase(str) {
    return str
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}